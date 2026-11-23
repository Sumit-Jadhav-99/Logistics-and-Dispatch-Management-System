/*
import {useState,useEffect} from "react";
import DashboardLayout
from "../layouts/DashboardLayout";

import {
 getCustomers,
 createCustomer
}
from "../services/customerService";

function CustomersPage(){

 const [customers,
 setCustomers] =
 useState([]);

 const [form,
 setForm] =
 useState({

  companyName:"",
  contactPerson:"",
  email:"",
  phone:"",

  address:{
    city:""
  },

  gstNumber:""
 });

 const loadCustomers =
 async()=>{

   const data =
   await getCustomers();

   setCustomers(data);
 };

 useEffect(()=>{
   loadCustomers();
 },[]);

 const submitHandler =
 async(e)=>{

   e.preventDefault();

   await createCustomer(form);

   loadCustomers();
 };

 return(

 <DashboardLayout>

  <h1>
    Customer Management
  </h1>

  <form
   onSubmit={submitHandler}
  >

   <input
    placeholder="Company Name"
    onChange={(e)=>
    setForm({
     ...form,
     companyName:
     e.target.value
    })}
   />

   <input
    placeholder="Contact Person"
    onChange={(e)=>
    setForm({
     ...form,
     contactPerson:
     e.target.value
    })}
   />

   <button>
    Create Customer
   </button>

  </form>

  <br />

  <table>

    <thead>

      <tr>

        <th>
          Company
        </th>

        <th>
          Contact
        </th>

        <th>
          Email
        </th>

      </tr>

    </thead>

    <tbody>

      {customers.map(c=>(
        <tr
         key={c._id}
        >

          <td>
            {c.companyName}
          </td>

          <td>
            {c.contactPerson}
          </td>

          <td>
            {c.email}
          </td>

        </tr>
      ))}

    </tbody>

  </table>

 </DashboardLayout>
 );
}

export default CustomersPage;
*/

import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import {
  getCustomers,
  createCustomer,
} from "../services/customerService";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    gstNumber: "",

    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
  });

  const loadCustomers = async () => {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch customers");
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!form.companyName.trim()) {
      return alert("Company Name is required");
    }

    if (!form.contactPerson.trim()) {
      return alert("Contact Person is required");
    }

    if (!form.email.trim()) {
      return alert("Email is required");
    }

    if (!form.phone.trim()) {
      return alert("Phone Number is required");
    }

    try {
      setLoading(true);

      await createCustomer(form);

      alert("Customer Created Successfully");

      setForm({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        gstNumber: "",

        address: {
          street: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
        },
      });

      loadCustomers();
    } catch (error) {
      alert(
        error?.response?.data?.message ||
        "Failed to create customer"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="page-container">
        <div className="page-header">
          <div>
            <h1 className="page-title">
              Customer Management
            </h1>

            <p className="page-subtitle">
              Manage all logistics customers
            </p>
          </div>
        </div>

        <div className="module-card">
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Create Customer
          </h2>

          <form onSubmit={submitHandler}>
            <div className="form-grid">
              <div className="form-group">
                <label>Company Name *</label>

                <input
                  className="form-control"
                  value={form.companyName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      companyName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Contact Person *</label>

                <input
                  className="form-control"
                  value={form.contactPerson}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      contactPerson:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Email *</label>

                <input
                  type="email"
                  className="form-control"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Phone *</label>

                <input
                  className="form-control"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>GST Number</label>

                <input
                  className="form-control"
                  value={form.gstNumber}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      gstNumber:
                        e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Street Address</label>

                <input
                  className="form-control"
                  value={
                    form.address.street
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: {
                        ...form.address,
                        street:
                          e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>City</label>

                <input
                  className="form-control"
                  value={form.address.city}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: {
                        ...form.address,
                        city: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>State</label>

                <input
                  className="form-control"
                  value={
                    form.address.state
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: {
                        ...form.address,
                        state:
                          e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Country</label>

                <input
                  className="form-control"
                  value={
                    form.address.country
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: {
                        ...form.address,
                        country:
                          e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="form-group">
                <label>Pincode</label>

                <input
                  className="form-control"
                  value={
                    form.address.pincode
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: {
                        ...form.address,
                        pincode:
                          e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={loading}
              style={{
                marginTop: "20px",
              }}
            >
              {loading
                ? "Creating..."
                : "Create Customer"}
            </button>
          </form>
        </div>

        <div className="module-card">
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Customer Records
          </h2>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {customers.map(
                  (customer) => (
                    <tr
                      key={customer._id}
                    >
                      <td>
                        {
                          customer.customerCode
                        }
                      </td>

                      <td>
                        {
                          customer.companyName
                        }
                      </td>

                      <td>
                        {
                          customer.contactPerson
                        }
                      </td>

                      <td>
                        {customer.email}
                      </td>

                      <td>
                        {customer.phone}
                      </td>

                      <td>
                        <span
                          className={`badge ${customer.status ===
                              "ACTIVE"
                              ? "badge-active"
                              : "badge-inactive"
                            }`}
                        >
                          {
                            customer.status
                          }
                        </span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CustomersPage;