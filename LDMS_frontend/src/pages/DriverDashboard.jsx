// import DashboardLayout from "../layouts/DashboardLayout";

// function DriverDashboard() {

//   const user = JSON.parse(
//     localStorage.getItem("user")
//   );

//   return (

//     <DashboardLayout>

//       <div className="dashboard-header">

//         <h1>
//           Driver Dashboard
//         </h1>

//         <p>
//           Welcome, {user?.firstName}
//         </p>

//       </div>

//       <div className="dashboard-grid">

//         <div className="dashboard-card">

//           <h3>
//             Tracking Updates
//           </h3>

//           <h2>
//             Update
//           </h2>

//           <p>
//             Manage shipment tracking
//           </p>

//         </div>

//         <div className="dashboard-card green">

//           <h3>
//             Deliveries
//           </h3>

//           <h2>
//             Active
//           </h2>

//           <p>
//             Confirm completed deliveries
//           </p>

//         </div>

//         <div className="dashboard-card blue">

//           <h3>
//             Availability
//           </h3>

//           <h2>
//             Driver
//           </h2>

//           <p>
//             Ready for dispatch assignments
//           </p>

//         </div>

//       </div>

//       <div
//         className="dashboard-card"
//         style={{
//           marginTop: "30px"
//         }}
//       >

//         <h2>
//           Driver Responsibilities
//         </h2>

//         <br/>

//         <ul
//           style={{
//             lineHeight: "2"
//           }}
//         >
//           <li>
//             Update Tracking Events
//           </li>

//           <li>
//             View Assigned Dispatches
//           </li>

//           <li>
//             Confirm Deliveries
//           </li>

//           <li>
//             Monitor Shipment Progress
//           </li>

//         </ul>

//       </div>

//     </DashboardLayout>

//   );
// }

// export default DriverDashboard;

// import {
//     useEffect,
//     useState
// }
//     from "react";

// import DashboardLayout
//     from "../layouts/DashboardLayout";

// import {
//     getDriverDashboard
// }
//     from "../services/dashboardService";

// function DriverDashboard() {

//     const [stats, setStats] =
//         useState(null);

//     useEffect(() => {

//         const loadStats =
//             async () => {

//                 const data =
//                     await getDriverDashboard();

//                 setStats(data);
//             };

//         loadStats();

//     }, []);

//     if (!stats) {
//         return (
//             <DashboardLayout>
//                 Loading...
//             </DashboardLayout>
//         );
//     }

//     return (

//         <DashboardLayout>

//             <div className="dashboard-header">

//                 <h1>
//                     Driver Dashboard
//                 </h1>


//                 <p>
//                     Logistics Driver Portal
//                 </p>

//             </div>

//             <div className="dashboard-grid">

//                 <div className="dashboard-card">

//                     <h3>
//                         Total Dispatches
//                     </h3>

//                     <h2>
//                         {stats.totalDispatches}
//                     </h2>

//                 </div>

//                 <div className="dashboard-card purple">

//                     <h3>
//                         Active Dispatches
//                     </h3>

//                     <h2>
//                         {stats.activeDispatches}
//                     </h2>

//                 </div>

//                 <div className="dashboard-card green">

//                     <h3>
//                         Completed Deliveries
//                     </h3>

//                     <h2>
//                         {stats.completedDeliveries}
//                     </h2>

//                 </div>

//                 <div className="dashboard-card blue">

//                     <h3>
//                         Current Status
//                     </h3>

//                     <h2>
//                         {stats.availabilityStatus}
//                     </h2>

//                 </div>

//             </div>

//         </DashboardLayout>

//     );

// }

// export default DriverDashboard; 

// import DashboardLayout from "../layouts/DashboardLayout";
// import {
//     getDriverDashboard
//  }
//     from "../services/dashboardService";

// function DriverDashboard() {

//     const user = JSON.parse(
//         localStorage.getItem("user")
//     );

//     const [stats, setStats] =
//         useState(null);

//     useEffect(() => {

//         const loadStats =
//             async () => {

//                 const data =
//                     await getDriverDashboard();

//                 setStats(data);
//             };

//         loadStats();

//     }, []);

//     if (!stats) {
//         return (
//             <DashboardLayout>
//                 Loading...
//             </DashboardLayout>
//         );
//     }

//     return (

//         <DashboardLayout>

//             <div className="dashboard-header">

//                 <h1>
//                     Driver Dashboard
//                 </h1>

//                 <p>
//                     Welcome back, {user?.firstName}. Manage deliveries and shipment tracking efficiently.
//                 </p>

//             </div>

//             <div className="dashboard-grid">

//                 <div className="dashboard-card">

//                     <h3>
//                         Tracking Updates
//                     </h3>

//                     <h2>
//                         📍
//                     </h2>

//                     <p>
//                         Update shipment locations and delivery progress.
//                     </p>

//                 </div>

//                 <div className="dashboard-card green">

//                     <h3>
//                         Deliveries
//                     </h3>

//                     <h2>
//                         {stats.completedDeliveries}
//                     </h2>

//                     <p>
//                         Confirm completed deliveries and customer receipts.
//                     </p>

//                 </div>

//                 <div className="dashboard-card blue">

//                     <h3>
//                         Driver Status
//                     </h3>

//                     <h2>
//                         🚚
//                     </h2>

//                     <p>
//                         Available for dispatch assignments and route updates.
//                     </p>

//                 </div>

//             </div>

//             <div
//                 className="dashboard-card"
//                 style={{
//                     marginTop: "30px"
//                 }}
//             >

//                 <h2>
//                     Daily Activities
//                 </h2>

//                 <br />

//                 <div className="activity-list">

//                     <div className="activity-item">

//                         <span>📦</span>

//                         <div>

//                             <strong>
//                                 Update Shipment Tracking
//                             </strong>

//                             <p>
//                                 Record pickup, transit and delivery milestones.
//                             </p>

//                         </div>

//                     </div>

//                     <div className="activity-item">

//                         <span>🚛</span>

//                         <div>

//                             <strong>
//                                 Monitor Dispatches
//                             </strong>

//                             <p>
//                                 Check active assignments and delivery routes.
//                             </p>

//                         </div>

//                     </div>

//                     <div className="activity-item">

//                         <span>✅</span>

//                         <div>

//                             <strong>
//                                 Confirm Deliveries
//                             </strong>

//                             <p>
//                                 Mark shipments as delivered after customer confirmation.
//                             </p>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//             <div
//                 className="dashboard-card"
//                 style={{
//                     marginTop: "30px"
//                 }}
//             >

//                 <h2>
//                     Driver Responsibilities
//                 </h2>

//                 <br />

//                 <ul className="responsibility-list">

//                     <li>
//                         Update tracking events accurately
//                     </li>

//                     <li>
//                         Follow assigned delivery routes
//                     </li>

//                     <li>
//                         Confirm successful deliveries
//                     </li>

//                     <li>
//                         Report delivery issues immediately
//                     </li>

//                     <li>
//                         Ensure vehicle and shipment safety
//                     </li>

//                 </ul>

//             </div>

//         </DashboardLayout>

//     );
// }

// export default DriverDashboard;

import { useEffect, useState } from "react";

import DashboardLayout
    from "../layouts/DashboardLayout";

import {
    getDriverDashboard
}
    from "../services/dashboardService";

function DriverDashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const [stats, setStats] =
        useState(null);

    useEffect(() => {

        const loadStats =
            async () => {

                try {

                    const data =
                        await getDriverDashboard();

                    // console.log(data);

                    setStats(data);

                } catch (error) {

                    console.error(error);

                }

            };

        loadStats();

    }, []);

    if (!stats) {

        return (

            <DashboardLayout>

                <h2>
                    Loading Driver Dashboard...
                </h2>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="dashboard-header">

                <h1>
                    Driver Dashboard
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
                        Total Dispatches
                    </h3>

                    <h2>
                        {stats.totalDispatches}
                    </h2>

                    <p>
                        All assigned dispatches
                    </p>

                </div>

                <div
                    className="dashboard-card purple"
                >

                    <h3>
                        Active Dispatches
                    </h3>

                    <h2>
                        {stats.activeDispatches}
                    </h2>

                    <p>
                        Ongoing deliveries
                    </p>

                </div>

                <div
                    className="dashboard-card green"
                >

                    <h3>
                        Completed Deliveries
                    </h3>

                    <h2>
                        {
                            stats.completedDeliveries
                        }
                    </h2>

                    <p>
                        Successfully delivered
                    </p>

                </div>

                <div
                    className="dashboard-card blue"
                >

                    <h3>
                        Availability
                    </h3>

                    <h2>
                        {
                            stats.availabilityStatus
                        }
                    </h2>

                    <p>
                        Current driver status
                    </p>

                </div>

            </div>

            <div
                className="dashboard-card"
                style={{
                    marginTop: "30px"
                }}
            >

                <h2>
                    Driver Responsibilities
                </h2>

                <ul
                    className="responsibility-list"
                >

                    <li>
                        Update tracking events
                    </li>

                    <li>
                        Manage active deliveries
                    </li>

                    <li>
                        Confirm deliveries
                    </li>

                    <li>
                        Follow assigned routes
                    </li>

                </ul>

            </div>

        </DashboardLayout>

    );

}

export default DriverDashboard;