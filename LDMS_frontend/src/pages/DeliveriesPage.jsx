import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getDeliveries, createDelivery }
  from "../services/deliveryService";

import { getDispatches }
  from "../services/dispatchService";

function DeliveriesPage() {

  const [dispatches, setDispatches] =
    useState([]);

  const [deliveries, setDeliveries] =
    useState([]);

  const [selectedDispatch,
    setSelectedDispatch] =
    useState(null);

  const [form, setForm] =
    useState({

      orderId: "",
      dispatchId: "",
      deliveredBy: "",
      receiverName: "",
      remarks: ""

    });

  const loadData = async () => {

    const dispatchData =
      await getDispatches();

    const deliveryData =
      await getDeliveries();

    setDispatches(dispatchData);

    setDeliveries(deliveryData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const dispatchChangeHandler =
    (dispatchId) => {

      const dispatch =
        dispatches.find(
          d => d._id === dispatchId
        );

      setSelectedDispatch(dispatch);

      if (dispatch) {

        setForm({

          ...form,

          dispatchId,

          orderId:
            dispatch.orderIds?.[0]?._id,

          deliveredBy:
            dispatch.driverId?._id

        });
      }
    };

  const submitHandler =
    async (e) => {

      e.preventDefault();

      if (!form.receiverName) {

        return alert(
          "Receiver Name Required"
        );
      }

      try {

        await createDelivery(form);

        alert(
          "Delivery Confirmed"
        );

        loadData();

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Unable to confirm delivery"
        );
      }
    };

  return (

    <DashboardLayout>

      <div className="page-container">

        <div className="page-header">

          <div>

            <h1 className="page-title">
              Delivery Confirmation
            </h1>

            <p className="page-subtitle">
              Confirm completed deliveries
            </p>

          </div>

        </div>

        <div className="module-card">

          <h2
            style={{
              marginBottom: "20px"
            }}
          >

            Confirm Delivery

          </h2>

          <form onSubmit={submitHandler}>

            <div className="form-grid">

              <div className="form-group">

                <label>
                  Dispatch
                </label>

                <select
                  className="form-control"

                  onChange={(e) =>
                    dispatchChangeHandler(
                      e.target.value
                    )
                  }
                >

                  <option value="">
                    Select Dispatch
                  </option>

                  {dispatches.map(
                    dispatch => (

                      <option
                        key={dispatch._id}
                        value={dispatch._id}
                      >

                        {dispatch.dispatchNumber}

                      </option>

                    ))
                  }

                </select>

              </div>

              <div className="form-group">

                <label>
                  Receiver Name
                </label>

                <input

                  className="form-control"

                  placeholder="Receiver Name"

                  value={form.receiverName}

                  onChange={(e) =>

                    setForm({

                      ...form,

                      receiverName:
                        e.target.value

                    })

                  }

                />

              </div>

            </div>

            <div
              style={{
                margin: "20px 15px"
              }}
            >

              <label>
                Delivery Remarks
              </label>
              <textarea

                className="form-control"

                rows="4"

                placeholder="Remarks"

                value={form.remarks}

                onChange={(e) =>

                  setForm({

                    ...form,

                    remarks:
                      e.target.value

                  })

                }

              />

            </div>

            {selectedDispatch && (

              <div
                style={{
                  marginTop: "20px",
                  color: "#cbd5e1"
                }}
              >

                <p>

                  <strong>Order:</strong>

                  {" "}

                  {
                    selectedDispatch
                      ?.orderIds?.[0]
                      ?.orderNumber
                  }

                </p>

                <p>

                  <strong>Driver:</strong>

                  {" "}

                  {
                    selectedDispatch
                      ?.driverId
                      ?.employeeId
                  }

                </p>

                <p>

                  <strong>Vehicle:</strong>

                  {" "}

                  {
                    selectedDispatch
                      ?.vehicleId
                      ?.vehicleNumber
                  }

                </p>

              </div>

            )}

            <button

              type="submit"

              className="btn-primary"

              style={{
                marginTop: "20px"
              }}
            >

              Confirm Delivery

            </button>

          </form>

        </div>

        <div className="module-card">

          <h2
            style={{
              marginBottom: "20px"
            }}
          >

            Completed Deliveries

          </h2>

          <div className="table-container">

            <table
              className="data-table"
            >

              <thead>

                <tr>

                  <th>
                    Order
                  </th>

                  <th>
                    Dispatch
                  </th>

                  <th>
                    Receiver
                  </th>

                  <th>
                    Delivery Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {deliveries.map(
                  delivery => (

                    <tr
                      key={delivery._id}
                    >

                      <td>
                        {
                          delivery.orderId
                            ?.orderNumber
                        }
                      </td>

                      <td>
                        {
                          delivery.dispatchId
                            ?.dispatchNumber
                        }
                      </td>

                      <td>
                        {
                          delivery.receiverName
                        }
                      </td>

                      <td>

                        <span
                          className="badge badge-active"
                        >

                          {
                            delivery.deliveryStatus
                          }

                        </span>

                      </td>

                    </tr>

                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default DeliveriesPage;