/*import DashboardLayout
  from "../layouts/DashboardLayout";

function Dashboard() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <DashboardLayout>

      <div className="page-container">

        <div className="page-header">
          <div>
            <h1 className="page-title">
              Dashboard
            </h1>

            <p className="page-subtitle">
              Logistics & Dispatch Management System
            </p>
          </div>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <p>Total Users</p>
            <h2>12</h2>
          </div>

          <div className="stat-card">
            <p>Customers</p>
            <h2>18</h2>
          </div>

          <div className="stat-card">
            <p>Drivers</p>
            <h2>7</h2>
          </div>

          <div className="stat-card">
            <p>Vehicles</p>
            <h2>9</h2>
          </div>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default Dashboard;*/

import DispatcherDashboard
  from "./DispatcherDashboard";

import DriverDashboard
  from "./DriverDashboard";

import {
  useEffect,
  useState
}
  from "react";

import DashboardLayout
  from "../layouts/DashboardLayout";

import {
  getDashboardStats
}
  from "../services/dashboardService";

function Dashboard() {

  // const [stats, setStats] =
  //   useState(null);

  // useEffect(() => {

  //   const loadDashboard =
  //     async () => {

  //       const data =
  //         await getDashboardStats();

  //       setStats(data);

  //     };

  //   loadDashboard();

  // }, []);

  // const user = JSON.parse(
  //   localStorage.getItem("user")
  // );

  // const role =
  //   user?.roleId?.roleName;

  // if (role === "Driver") {
  //   return <DriverDashboard />;
  // }

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const role =
    user?.roleId?.roleName;

  const [stats, setStats] =
    useState(null);

  useEffect(() => {

    if (role !== "SuperAdmin") {
      return;
    }

    const loadDashboard =
      async () => {

        try {

          const data =
            await getDashboardStats();

          setStats(data);

        } catch (error) {

          console.error(error);

        }

      };

    loadDashboard();

  }, [role]);

  if (role === "Driver") {
    return <DriverDashboard />;
  }

  if (role === "Dispatcher") {
    return <DispatcherDashboard />;
  }

  if (!stats) {

    return (
      <DashboardLayout>

        <h2>
          Loading Dashboard...
        </h2>

      </DashboardLayout>
    );

  }

  return (

    <DashboardLayout>

      <div className="dashboard-page">

        <div className="dashboard-header">

          <h1>
            Super Admin Dashboard
          </h1>

          <p>
            Logistics & Dispatch Management System
          </p>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>Total Users</h3>
            <h2>{stats.totalUsers}</h2>
          </div>

          <div className="dashboard-card">
            <h3>Customers</h3>
            <h2>{stats.totalCustomers}</h2>
          </div>

          <div className="dashboard-card">
            <h3>Drivers</h3>
            <h2>{stats.totalDrivers}</h2>
          </div>

          <div className="dashboard-card">
            <h3>Vehicles</h3>
            <h2>{stats.totalVehicles}</h2>
          </div>

          <div className="dashboard-card">
            <h3>Orders</h3>
            <h2>{stats.totalOrders}</h2>
          </div>

          <div className="dashboard-card">
            <h3>Dispatches</h3>
            <h2>{stats.totalDispatches}</h2>
          </div>

          <div className="dashboard-card">
            <h3>Deliveries</h3>
            <h2>{stats.totalDeliveries}</h2>
          </div>

          <div className="dashboard-card">
            <h3>Delivered Orders</h3>
            <h2>{stats.deliveredOrders}</h2>
          </div>

          <div className="dashboard-card green">
            <h3>Available Drivers</h3>
            <h2>{stats.availableDrivers}</h2>
          </div>

          <div className="dashboard-card blue">
            <h3>Available Vehicles</h3>
            <h2>{stats.availableVehicles}</h2>
          </div>

          <div className="dashboard-card purple">
            <h3>Active Dispatches</h3>
            <h2>{stats.activeDispatches}</h2>
          </div>

        </div>

      </div>

    </DashboardLayout>

  );
}

export default Dashboard;