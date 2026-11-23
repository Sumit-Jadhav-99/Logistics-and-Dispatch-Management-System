/*const user =
JSON.parse(
 localStorage.getItem("user")
);

const role =
user?.roleId?.roleName;


import { Link } from "react-router-dom";

import { logout } from "../services/authService";

function Sidebar() {

  const logoutHandler = () => {

    logout();

    window.location.href = "/login";
  };

  return (
    <div className="sidebar">

      <h2>LDMS</h2>

      <Link to="/dashboard">
        Dashboard
      </Link>

      <Link to="/users">
        Users
      </Link>

      <Link to="/customers">
        Customers
      </Link>

      <Link to="/drivers">
        Drivers
      </Link>

      <Link to="/vehicles">
        Vehicles
      </Link>

      <Link to="/orders">
        Orders
      </Link>

      <Link to="/dispatches">
        Dispatches
      </Link>

      <Link to="/tracking">
        Tracking
      </Link>

      <Link to="/deliveries">
        Deliveries
      </Link>



      <button
        onClick={logoutHandler}
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;*/

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Sidebar() {

  const navigate =
    useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const role =
    user?.roleId?.roleName;

  const logoutHandler = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/login");
  };

  return (

    <div className="sidebar">

      <h2>LDMS</h2>

      <Link to="/dashboard">
        Dashboard
      </Link>

      {role === "SuperAdmin" && (
        <Link to="/users">
          Users
        </Link>
      )}

      {(role === "SuperAdmin" ||
        role === "Dispatcher") && (
          <>
            <Link to="/customers">
              Customers
            </Link>

            <Link to="/drivers">
              Drivers
            </Link>

            <Link to="/vehicles">
              Vehicles
            </Link>

            <Link to="/orders">
              Orders
            </Link>

            <Link to="/dispatches">
              Dispatches
            </Link>
          </>
        )}

      {(role === "SuperAdmin" ||
        role === "Dispatcher" ||
        role === "Driver") && (
          <>
            <Link to="/tracking">
              Tracking
            </Link>

            <Link to="/deliveries">
              Deliveries
            </Link>
          </>
        )}

      <button
        onClick={logoutHandler}
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;