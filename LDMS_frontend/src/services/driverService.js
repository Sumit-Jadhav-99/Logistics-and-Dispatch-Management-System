import axios from "axios";

const API =
"https://logistics-and-dispatch-management-system.onrender.com/api/drivers";

const getHeaders = () => ({
 headers:{
  Authorization:
  `Bearer ${
   localStorage.getItem("token")
  }`
 }
});

export const getDrivers =
async()=>{

 const response =
 await axios.get(
  API,
  getHeaders()
 );

 return response.data;
};

export const createDriver =
async(data)=>{

 const response =
 await axios.post(
  API,
  data,
  getHeaders()
 );

 return response.data;
};
