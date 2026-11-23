import { Navigate } from "react-router-dom";

function RoleProtectedRoute({
  children,
  allowedRoles,
}) {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  const role =
    user?.roleId?.roleName;

  if (
    !allowedRoles.includes(role)
  ) {
    return (
      <Navigate to="/dashboard" />
    );
  }

  return children;
}

export default RoleProtectedRoute;