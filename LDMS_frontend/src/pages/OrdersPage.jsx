import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { getCustomers } from "../services/customerService";

import {
  createOrder,
  getOrders
} from "../services/orderService";

function OrdersPage() {

  const [customers, setCustomers] =
    useState([]);

  const [orders, setOrders] =
    useState([]);

  const [form, setForm] =
    useState({
      customerId: "",

      pickupAddress: {
        address: "",
        city: "",
        state: "",
        pincode: ""
      },

      deliveryAddress: {
        address: "",
        city: "",
        state: "",
        pincode: ""
      },

      shipmentDetails: {
        itemDescription: "",
        quantity: "",
        weightKg: ""
      },

      priority: "MEDIUM"
    });

  const loadData = async () => {

    const customerData =
      await getCustomers();

    const orderData =
      await getOrders();

    setCustomers(customerData);
    setOrders(orderData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitHandler = async (e) => {

    e.preventDefault();

    await createOrder(form);

    alert("Order Created");

    loadData();
  };

  return (
    <DashboardLayout>

      <div className="order-page-header">

        <h1>Order Management</h1>

        <p>
          Create and manage shipment orders
        </p>

      </div>


      <div className="order-stats">

        <div className="order-stat-card">
          <h3>Total Orders</h3>
          <h2>{orders.length}</h2>
        </div>

        <div className="order-stat-card">
          <h3>Created</h3>
          <h2>
            {
              orders.filter(
                order =>
                  order.orderStatus ===
                  "CREATED"
              ).length
            }
          </h2>
        </div>

        <div className="order-stat-card">
          <h3>Delivered</h3>
          <h2>
            {
              orders.filter(
                order =>
                  order.orderStatus ===
                  "DELIVERED"
              ).length
            }
          </h2>
        </div>

      </div>

      <form
        onSubmit={submitHandler}
        className="order-form"
      >
        <label className="select_cust">Select Customer</label>
        <select
          onChange={(e) =>
            setForm({
              ...form,
              customerId: e.target.value
            })
          }
        >
          <option>
            Select Customer
          </option>

          {customers.map(customer => (

            <option
              key={customer._id}
              value={customer._id}
            >

              {customer.companyName}

            </option>

          ))}

        </select>

        <h3>
          Pickup Address
        </h3>

        <input
          placeholder="Pickup Address"
          onChange={(e) =>
            setForm({
              ...form,
              pickupAddress: {
                ...form.pickupAddress,
                address: e.target.value
              }
            })
          }
        />

        <input
          placeholder="Pickup City"
          onChange={(e) =>
            setForm({
              ...form,
              pickupAddress: {
                ...form.pickupAddress,
                city: e.target.value
              }
            })
          }
        />

        <h3>
          Delivery Address
        </h3>

        <input
          placeholder="Delivery Address"
          onChange={(e) =>
            setForm({
              ...form,
              deliveryAddress: {
                ...form.deliveryAddress,
                address: e.target.value
              }
            })
          }
        />

        <input
          placeholder="Delivery City"
          onChange={(e) =>
            setForm({
              ...form,
              deliveryAddress: {
                ...form.deliveryAddress,
                city: e.target.value
              }
            })
          }
        />

        <h3>
          Shipment Details
        </h3>

        <input
          placeholder="Item Description"
          onChange={(e) =>
            setForm({
              ...form,
              shipmentDetails: {
                ...form.shipmentDetails,
                itemDescription: e.target.value
              }
            })
          }
        />

        <input
          placeholder="Quantity"
          type="number"
          onChange={(e) =>
            setForm({
              ...form,
              shipmentDetails: {
                ...form.shipmentDetails,
                quantity: e.target.value
              }
            })
          }
        />

        <input
          placeholder="Weight (KG)"
          type="number"
          onChange={(e) =>
            setForm({
              ...form,
              shipmentDetails: {
                ...form.shipmentDetails,
                weightKg: e.target.value
              }
            })
          }
        />

        <select
          onChange={(e) =>
            setForm({
              ...form,
              priority: e.target.value
            })
          }
        >

          <option value="LOW">
            Low
          </option>

          <option value="MEDIUM">
            Medium
          </option>

          <option value="HIGH">
            High
          </option>

        </select>

        <button>
          Create Order
        </button>

      </form>

      <br />

      <h2>
        Orders List
      </h2>

      <table>

        <thead>

          <tr>

            <th>
              Order No
            </th>

            <th>
              Customer
            </th>

            <th>
              Priority
            </th>

            <th>
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map(order => (

            <tr key={order._id}>

              <td>

                <span
                  className={`priority
${order.priority === "HIGH"
                      ? "priority-high"

                      : order.priority === "MEDIUM"
                        ? "priority-medium"

                        : "priority-low"
                    }`}
                >

                  {order.priority}

                </span>

              </td>

              <td>
                {order.customerId?.companyName}
              </td>

              <td>
                {order.priority}
              </td>

              {/* <td>
                {order.orderStatus}
              </td> */}

              <td>

                <span
                  className={`order-status
${order.orderStatus === "CREATED"
                      ? "status-created"

                      : order.orderStatus === "ASSIGNED"
                        ? "status-assigned"

                        : order.orderStatus === "DISPATCHED"
                          ? "status-dispatched"

                          : order.orderStatus === "DELIVERED"
                            ? "status-delivered"

                            : "status-cancelled"
                    }`}
                >

                  {order.orderStatus}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}

export default OrdersPage;