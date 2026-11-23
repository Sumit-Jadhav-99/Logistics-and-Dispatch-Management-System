require("dotenv").config();
const dns= require("dns");

dns.setServers(['1.1.1.1','8.8.8.1'])

const app = require("./src/app");

const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  // console.log("Server Started Successfully!");
  console.log(`Server URL: http://localhost:${PORT}`);
});