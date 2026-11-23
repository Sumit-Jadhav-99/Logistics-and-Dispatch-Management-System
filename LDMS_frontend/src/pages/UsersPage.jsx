import { useEffect, useState }
  from "react";

import DashboardLayout
  from "../layouts/DashboardLayout";

import {
  getUsers,
  createUser,
  updateStatus
}
  from "../services/userService";

function UsersPage() {

  const [users, setUsers] =
    useState([]);

  const [form, setForm] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      roleName: "Driver"
    });

  const loadUsers =
    async () => {

      const data =
        await getUsers();

      setUsers(data);
    };

  useEffect(() => {
    loadUsers();
  }, []);

  const submitHandler =
    async (e) => {

      e.preventDefault();

      await createUser(form);

      loadUsers();
    };

  return (

    <DashboardLayout>

      <div className="page-header">
        <h1>User Management</h1>
        <p>
          Create and manage drivers,
          dispatchers and administrators
        </p>
      </div>
      <div className="user-stats">

        <div className="user-stat-card">
          <h3>Total Users</h3>
          <h2>{users.length}</h2>
        </div>

        <div className="user-stat-card">
          <h3>Drivers</h3>
          <h2>
            {
              users.filter(
                user =>
                  user.roleId?.roleName === "Driver"
              ).length
            }
          </h2>
        </div>

        <div className="user-stat-card">
          <h3>Dispatchers</h3>
          <h2>
            {
              users.filter(
                user =>
                  user.roleId?.roleName === "Dispatcher"
              ).length
            }
          </h2>
        </div>

      </div>

      <form
        onSubmit={submitHandler}
        className="user-form"
      >

        <input
          placeholder="First Name"
          onChange={(e) => setForm({
            ...form,
            firstName: e.target.value
          })}
        />

        <input
          placeholder="Last Name"
          onChange={(e) => setForm({
            ...form,
            lastName: e.target.value
          })}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({
            ...form,
            email: e.target.value
          })}
        />

        <input
          placeholder="Phone"
          onChange={(e) => setForm({
            ...form,
            phone: e.target.value
          })}
        />

        <input
          placeholder="Password"
          onChange={(e) => setForm({
            ...form,
            password: e.target.value
          })}
        />

        <select
          onChange={(e) => setForm({
            ...form,
            roleName: e.target.value
          })}
        >

          <option>
            Driver
          </option>

          <option>
            Dispatcher
          </option>

        </select>

        <button>
          Create User
        </button>

      </form>

      <br />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (
            <tr key={user._id}>

              <td>
                {user.firstName}
              </td>

              <td>
                {user.email}
              </td>

              {/* <td>
                {user.roleId?.roleName}
              </td> */}

              <td>

                <span
                  className={`role-badge
${user.roleId?.roleName ===
                      "SuperAdmin"
                      ? "role-admin"
                      : user.roleId?.roleName ===
                        "Dispatcher"
                        ? "role-dispatcher"
                        : "role-driver"
                    }`}
                >

                  {user.roleId?.roleName}

                </span>

              </td>

              <td>

                <button
                  onClick={async () => {
                    await updateStatus(
                      user._id,
                      user.accountStatus ===
                        "ACTIVE"
                        ? "INACTIVE"
                        : "ACTIVE"
                    );

                    loadUsers();
                  }}
                >

                  {user.accountStatus}

                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </DashboardLayout>
  );
}

export default UsersPage;