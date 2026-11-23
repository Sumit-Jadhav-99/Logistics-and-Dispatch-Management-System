const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const driverRoutes = require("./routes/driverRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dispatchRoutes = require("./routes/dispatchRoutes");
const trackingRoutes = require("./routes/trackingRoutes");
const deliveryRoutes = require("./routes/deliveryRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");



const app = express();

// app.use(cors());
app.use(
  cors({
    origin: [
      "https://logistics-and-dispatch-management-system-692i.onrender.com"
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/dispatches", dispatchRoutes);
app.use("/api/tracking", trackingRoutes);
app.use("/api/deliveries", deliveryRoutes);
app.use("/api/dashboard", dashboardRoutes);


module.exports = app;
