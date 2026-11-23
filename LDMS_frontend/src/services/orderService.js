import axios from "axios";

const API =
"http://localhost:5000/api/orders";

const headers = () => ({
 headers:{
  Authorization:
  `Bearer ${
   localStorage.getItem("token")
  }`
 }
});

export const getOrders =
async()=>{

 const response =
 await axios.get(
  API,
  headers()
 );

 return response.data;
};

export const createOrder =
async(data)=>{

 const response =
 await axios.post(
  API,
  data,
  headers()
 );

 return response.data;
};