import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getOrders } from "../services/orderService";

import {
  createTracking,
  getTracking
} from "../services/trackingService";

import {
  getDispatches
} from "../services/dispatchService";



function TrackingPage() {

  const [orders, setOrders] =
    useState([]);

  const [dispatches, setDispatches] =
    useState([]);

  const [trackingEvents,
    setTrackingEvents] =
    useState([]);

  const [selectedOrder,
    setSelectedOrder] =
    useState("");

  const [form, setForm] =
    useState({

      dispatchId: "",
      orderId: "",
      status: "PICKED_UP",
      remarks: "",
      location: {
        city: ""
      }
    });

  /*const loadOrders =
    async () => {

      const data =
        await getOrders();

      setOrders(data);
    };*/

  const loadOrders =
    async () => {

      const orderData =
        await getOrders();

      const dispatchData =
        await getDispatches();

      setOrders(orderData);

      setDispatches(dispatchData);

      // console.log(dispatchData);
    };

  useEffect(() => {
    loadOrders();
  }, []);

  const loadTracking =
    async (orderId) => {

      const data =
        await getTracking(orderId);

      setTrackingEvents(data);
    };

  // const submitHandler =
  //   async (e) => {

  //     e.preventDefault();
  //     console.log(form);

  //     await createTracking(form);

  //     loadTracking(form.orderId);

  //     alert(
  //       "Tracking Updated"
  //     );
  //   };

  const submitHandler =
    async (e) => {

      e.preventDefault();

      if (!form.dispatchId) {
        return alert(
          "Dispatch not found for selected order"
        );
      }

      if (!form.location.city) {
        return alert(
          "City is required"
        );
      }

      if (!form.remarks.trim()) {
        return alert(
          "Remarks are required"
        );
      }

      try {

        // console.log(form);

        await createTracking(form);

        loadTracking(
          form.orderId
        );

        alert(
          "Tracking Updated Successfully"
        );

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Tracking Failed"
        );

      }

    };

  return (

    <DashboardLayout>

      <div className="page-container">

        <div className="module-card">

          <h2>
            Tracking Management
          </h2>

          <form
            onSubmit={submitHandler}
          >

            <div className="form-grid">

              <div className="form-group">

                <label>
                  Order
                </label>

                {/* <select
                  className="form-control"

                  onChange={(e) => {

                    const orderId =
                      e.target.value;

                    setSelectedOrder(
                      orderId
                    );

                    setForm({
                      ...form,
                      orderId
                    });

                    loadTracking(
                      orderId
                    );

                  }}
                > */}

                <select
                  className="form-control"

                  onChange={(e) => {

                    const orderId =
                      e.target.value;

                    const foundDispatch =
                      dispatches.find(
                        dispatch =>
                          dispatch.orderIds?.some(
                            order =>
                              order._id === orderId
                          )
                      );

                    setSelectedOrder(
                      orderId
                    );

                    setForm({

                      ...form,

                      orderId,

                      dispatchId:
                        foundDispatch?._id || ""

                    });

                    loadTracking(
                      orderId
                    );

                  }}
                >

                  <option>
                    Select Order
                  </option>

                  {
                    orders.map(order => (

                      <option
                        key={order._id}
                        value={order._id}
                      >

                        {order.orderNumber}

                      </option>

                    ))
                  }

                </select>

              </div>

              <div className="form-group">

                <label>Status</label>

                <select
                  className="form-control"

                  onChange={(e) =>
                    setForm({

                      ...form,

                      status:
                        e.target.value

                    })
                  }
                >

                  <option>
                    PICKED_UP
                  </option>

                  <option>
                    IN_TRANSIT
                  </option>

                  <option>
                    AT_HUB
                  </option>

                  <option>
                    OUT_FOR_DELIVERY
                  </option>

                  <option>
                    DELIVERED
                  </option>

                </select>

              </div>

            </div>

            <div className="form-group">

              <label>
                Current City
              </label>

              <input
                className="form-control"

                placeholder="Current Location"

                onChange={(e) =>
                  setForm({

                    ...form,

                    location: {
                      ...form.location,

                      city: e.target.value
                    }

                  })
                }
              />

            </div>

            <textarea
              className="form-control"

              placeholder="Enter shipment remarks"

              style={{
                marginTop: "15px"
              }}

              onChange={(e) =>
                setForm({

                  ...form,

                  remarks:
                    e.target.value

                })
              }
            />

            <button
              className="btn-primary"

              style={{
                marginTop: "15px"
              }}
            >

              Add Tracking Event

            </button>

          </form>

        </div>

        <div className="module-card">

          <h2>
            Tracking Timeline
          </h2>

          {
            trackingEvents.map(event => (

              <div
                key={event._id}

                style={{
                  borderLeft:
                    "3px solid #7C3AED",

                  padding: "15px",
                  marginBottom: "10px"
                }}
              >

                <h4>
                  {event.status}
                </h4>

                <p>
                  {event.remarks}
                </p>

                <small>
                  {
                    new Date(
                      event.createdAt
                    ).toLocaleString()
                  }
                </small>

              </div>

            ))
          }

        </div>

      </div>

    </DashboardLayout>
  );
}

export default TrackingPage;