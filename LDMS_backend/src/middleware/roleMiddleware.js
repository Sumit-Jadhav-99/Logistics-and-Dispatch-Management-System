/*const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (
      !roles.includes(req.user.roleName)
    ) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };
};

module.exports = roleMiddleware;
*/


const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {

    if (
      !allowedRoles.includes(req.user.role)
    ) {
      return res.status(403).json({
        message: "Access Denied"
      });
    }

    next();
  };
};

module.exports = roleMiddleware;