import RoleProtectedRoute
  from "./routes/RoleProtectedRoute";

import {
  BrowserRouter,
  Routes,
  Route
}
  from "react-router-dom";

import LandingPage
  from "./pages/LandingPage";

import LoginPage
  from "./pages/LoginPage";

import Dashboard
  from "./pages/Dashboard";

import UsersPage
  from "./pages/UsersPage";

import ProtectedRoute
  from "./routes/ProtectedRoute";

import CustomersPage
  from "./pages/CustomersPage";

import DriversPage
  from "./pages/DriversPage";

import VehiclesPage
  from "./pages/VehiclesPage";

import OrdersPage
  from "./pages/OrdersPage";


import DispatchPage from "./pages/DispatchPage";

import TrackingPage from "./pages/TrackingPage";

import DeliveriesPage
  from "./pages/DeliveriesPage";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* <Link to="/">
          ← Back To Home
        </Link> */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/users"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin"
                ]}
              >

                <UsersPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <CustomersPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/customers"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin",
                  "Dispatcher"
                ]}
              >

                <CustomersPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/drivers"
          element={
            <ProtectedRoute>
              <DriversPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/drivers"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin",
                  "Dispatcher"
                ]}
              >

                <DriversPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <VehiclesPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin",
                  "Dispatcher"
                ]}
              >

                <VehiclesPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/orders"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin",
                  "Dispatcher"
                ]}
              >

                <OrdersPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/dispatches"
          element={
            <ProtectedRoute>
              <DispatchPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/dispatches"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin",
                  "Dispatcher"
                ]}
              >

                <DispatchPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/tracking"
          element={
            <ProtectedRoute>
              <TrackingPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/tracking"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin",
                  "Dispatcher",
                  "Driver"
                ]}
              >

                <TrackingPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/deliveries"
          element={
            <ProtectedRoute>
              <DeliveriesPage />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/deliveries"
          element={
            <ProtectedRoute>

              <RoleProtectedRoute
                allowedRoles={[
                  "SuperAdmin",
                  "Dispatcher",
                  "Driver"
                ]}
              >

                <DeliveriesPage />

              </RoleProtectedRoute>

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;