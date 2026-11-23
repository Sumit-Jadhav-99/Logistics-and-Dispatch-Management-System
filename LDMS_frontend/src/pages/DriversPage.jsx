import {
  useEffect,
  useState
}
  from "react";

import DashboardLayout
  from "../layouts/DashboardLayout";

import {
  getDrivers,
  createDriver
}
  from "../services/driverService";

import {
  getUsers
}
  from "../services/userService";

function DriversPage() {

  const [drivers, setDrivers] =
    useState([]);

  const [users, setUsers] =
    useState([]);

  const [form, setForm] =
    useState({

      userId: "",
      licenseNumber: "",
      experienceYears: 0,
      emergencyContact: ""
    });

  const loadData =
    async () => {

      const driverData =
        await getDrivers();

      const userData =
        await getUsers();

      setDrivers(driverData);

      setUsers(
        userData.filter(
          user =>
            user.roleId?.roleName
            === "Driver"
        )
      );
    };

  useEffect(() => {
    loadData();
  }, []);

  const submitHandler =
    async (e) => {

      e.preventDefault();

      await createDriver(form);

      loadData();
    };

  return (

    <DashboardLayout>

      <div className="driver-page-header">

        <h1>
          Driver Management
        </h1>

        <p>
          Manage driver profiles, licenses and availability
        </p>

      </div>

      <div className="driver-stats">

        <div className="driver-stat-card">
          <h3>Total Drivers</h3>
          <h2>{drivers.length}</h2>
        </div>

        <div className="driver-stat-card">
          <h3>Available</h3>
          <h2>
            {
              drivers.filter(
                driver =>
                  driver.availabilityStatus ===
                  "AVAILABLE"
              ).length
            }
          </h2>
        </div>

        <div className="driver-stat-card">
          <h3>On Delivery</h3>
          <h2>
            {
              drivers.filter(
                driver =>
                  driver.availabilityStatus ===
                  "ON_DELIVERY"
              ).length
            }
          </h2>
        </div>

      </div>

      <h2
        style={{
          marginBottom: "15px"
        }}
      >
        Create Driver Profile
      </h2>

      <form
        onSubmit={submitHandler}
        className="driver-form"
      >

        <select
          onChange={(e) =>
            setForm({
              ...form,
              userId: e.target.value
            })}
        >

          <option>
            Select Driver
          </option>

          {
            users.map(user => (
              <option
                key={user._id}
                value={user._id}
              >
                {user.firstName}
              </option>
            ))
          }

        </select>

        <input
          placeholder="License Number"
          onChange={(e) =>
            setForm({

              ...form,

              licenseNumber:
                e.target.value
            })}
        />

        <input
          placeholder="Experience"
          onChange={(e) =>
            setForm({

              ...form,

              experienceYears:
                e.target.value
            })}
        />

        <button>
          Create Driver
        </button>

      </form>

      <br />

      <h2
        style={{
          marginBottom: "15px"
        }}
      >
        Driver Records
      </h2>

      <table>

        <thead>

          <tr>

            <th>
              Employee ID
            </th>

            <th>
              Name
            </th>

            <th>
              License
            </th>

            <th>
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {
            drivers.map(driver => (
              <tr
                key={driver._id}
              >

                <td>

                  <span className="employee-badge">
                    {driver.employeeId}
                  </span>

                </td>

                <td>
                  {driver.userId?.firstName}
                </td>

                <td>
                  {driver.licenseNumber}
                </td>

                {/* <td>
                  {driver.availabilityStatus}
                </td> */}

                <td>

                  <span
                    className={`driver-status
      ${driver.availabilityStatus ===
                        "AVAILABLE"

                        ? "driver-available"

                        : driver.availabilityStatus ===
                          "ON_DELIVERY"

                          ? "driver-delivery"

                          : "driver-offduty"
                      }`}
                  >

                    {driver.availabilityStatus}

                  </span>

                </td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </DashboardLayout>
  );
}

export default DriversPage;