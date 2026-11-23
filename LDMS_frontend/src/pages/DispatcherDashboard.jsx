import { useEffect, useState } from "react";

import DashboardLayout
    from "../layouts/DashboardLayout";

import {
    getDispatcherDashboard
}
    from "../services/dashboardService";

function DispatcherDashboard() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const [stats, setStats] =
        useState(null);

    useEffect(() => {

        const loadData =
            async () => {

                try {

                    const data =
                        await getDispatcherDashboard();

                    setStats(data);

                } catch (error) {

                    console.log(error);

                }

            };

        loadData();

    }, []);

    if (!stats) {

        return (

            <DashboardLayout>

                <h2>
                    Loading Dispatcher Dashboard...
                </h2>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="dashboard-header">

                <h1>
                    Dispatcher Dashboard
                </h1>

                <p>

                    Welcome back,

                    {" "}

                    {user?.firstName}

                </p>

            </div>

            <div className="dashboard-grid">

                <div className="dashboard-card">

                    <h3>
                        Total Orders
                    </h3>

                    <h2>
                        {stats.totalOrders}
                    </h2>

                </div>

                <div className="dashboard-card purple">

                    <h3>
                        Pending Orders
                    </h3>

                    <h2>
                        {stats.pendingOrders}
                    </h2>

                </div>

                <div className="dashboard-card green">

                    <h3>
                        Active Dispatches
                    </h3>

                    <h2>
                        {stats.activeDispatches}
                    </h2>

                </div>

                <div className="dashboard-card blue">

                    <h3>
                        Available Drivers
                    </h3>

                    <h2>
                        {stats.availableDrivers}
                    </h2>

                </div>

                <div className="dashboard-card">

                    <h3>
                        Available Vehicles
                    </h3>

                    <h2>
                        {stats.availableVehicles}
                    </h2>

                </div>

                <div className="dashboard-card green">

                    <h3>
                        Deliveries
                    </h3>

                    <h2>
                        {stats.completedDeliveries}
                    </h2>

                </div>

            </div>

            <div
                className="dashboard-card"
                style={{
                    marginTop: "30px"
                }}
            >

                <h2>
                    Dispatcher Responsibilities
                </h2>

                <br />

                <ul
                    className="responsibility-list"
                >

                    <li>
                        Manage Orders
                    </li>

                    <li>
                        Assign Drivers
                    </li>

                    <li>
                        Assign Vehicles
                    </li>

                    <li>
                        Monitor Dispatches
                    </li>

                    <li>
                        Track Deliveries
                    </li>

                </ul>

            </div>

        </DashboardLayout>

    );

}

export default DispatcherDashboard;