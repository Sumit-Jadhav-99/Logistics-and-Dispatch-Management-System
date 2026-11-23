import axios from "axios";

const API =
"https://logistics-and-dispatch-management-system.onrender.com/api/vehicles";

const getHeaders = () => ({
 headers:{
  Authorization:
  `Bearer ${
   localStorage.getItem("token")
  }`
 }
});

export const getVehicles =
async()=>{

 const response =
 await axios.get(
   API,
   getHeaders()
 );

 return response.data;
};

export const createVehicle =
async(data)=>{

 const response =
 await axios.post(
   API,
   data,
   getHeaders()
 );

 return response.data;
};
