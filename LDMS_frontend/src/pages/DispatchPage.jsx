import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getOrders } from "../services/orderService";
import { getDrivers } from "../services/driverService";
import { getVehicles } from "../services/vehicleService";

import {
  createDispatch,
  getDispatches
} from "../services/dispatchService";

function DispatchPage() {

  const [orders, setOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [dispatches, setDispatches] = useState([]);

  const [form, setForm] = useState({
    orderIds: [],
    driverId: "",
    vehicleId: "",
    expectedDeliveryDate: "",
    notes: ""
  });

  const loadData = async () => {

    const orderData =
      await getOrders();

    const driverData =
      await getDrivers();

    const vehicleData =
      await getVehicles();

    const dispatchData =
      await getDispatches();

    setOrders(
      orderData.filter(
        order =>
          order.orderStatus === "CREATED"
      )
    );

    setDrivers(
      driverData.filter(
        driver =>
          driver.availabilityStatus ===
          "AVAILABLE"
      )
    );

    setVehicles(
      vehicleData.filter(
        vehicle =>
          vehicle.status ===
          "AVAILABLE"
      )
    );

    setDispatches(dispatchData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitHandler = async (e) => {

    e.preventDefault();

    if (
      !form.driverId ||
      !form.vehicleId ||
      !form.orderIds.length
    ) {
      return alert(
        "Please select Order, Driver and Vehicle"
      );
    }

    try {

      await createDispatch(form);

      alert(
        "Dispatch Created Successfully"
      );

      loadData();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Failed to Create Dispatch"
      );
    }
  };

  return (
    <DashboardLayout>

      <div className="page-container">

        <div className="page-header">
          <h1 className="page-title">
            Dispatch Management
          </h1>
        </div>

        <div className="module-card">

          <h2>Create Dispatch</h2>

          <form
            onSubmit={submitHandler}
          >

            <div className="form-grid">

              <div className="form-group">

                <label>Select Order</label>

                <select
                  className="form-control"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      orderIds: [
                        e.target.value
                      ]
                    })
                  }
                >

                  <option value="">
                    Select Order
                  </option>

                  {orders.map(order => (

                    <option
                      key={order._id}
                      value={order._id}
                    >

                      {
                        order.orderNumber
                      }

                    </option>
                  ))}

                </select>

              </div>

              <div className="form-group">

                <label>Select Driver</label>

                <select
                  className="form-control"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      driverId:
                        e.target.value
                    })
                  }
                >

                  <option>
                    Select Driver
                  </option>

                  {drivers.map(driver => (

                    <option
                      key={driver._id}
                      value={driver._id}
                    >

                      {
                        driver.userId
                          ?.firstName
                      }

                    </option>
                  ))}

                </select>

              </div>

              <div className="form-group">

                <label>Select Vehicle</label>

                <select
                  className="form-control"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      vehicleId:
                        e.target.value
                    })
                  }
                >

                  <option>
                    Select Vehicle
                  </option>

                  {vehicles.map(vehicle => (

                    <option
                      key={vehicle._id}
                      value={vehicle._id}
                    >

                      {
                        vehicle.vehicleNumber
                      }

                    </option>
                  ))}

                </select>

              </div>

              <div className="form-group">

                <label>
                  Expected Delivery
                </label>

                <input
                  type="date"
                  className="form-control"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      expectedDeliveryDate:
                        e.target.value
                    })
                  }
                />

              </div>

            </div>

            <div
              style={{
                marginTop: "20px"
              }}
            >

              <textarea
                className="form-control"
                placeholder="Notes"

                onChange={(e) =>
                  setForm({
                    ...form,
                    notes: e.target.value
                  })
                }
              />

           </div>

            <button
              className="btn-primary"
              style={{
                marginTop: "20px"
              }}
            >
              Create Dispatch
            </button>

          </form>

          <div className="module-card">

            <h2>
              Dispatch Records
            </h2>

            <div className="table-container">

              <table className="data-table">

                <thead>

                  <tr>

                    <th>
                      Dispatch No
                    </th>

                    <th>
                      Driver
                    </th>

                    <th>
                      Vehicle
                    </th>

                    <th>
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {dispatches.map(dispatch => (

                    <tr
                      key={dispatch._id}
                    >

                      <td>
                        {dispatch.dispatchNumber}
                      </td>

                      <td>
                        {
                          dispatch.driverId?.employeeId
                        }
                      </td>

                      <td>
                        {
                          dispatch.vehicleId?.vehicleNumber
                        }
                      </td>

                      <td>
                        {
                          dispatch.currentStatus
                        }
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default DispatchPage;