import axios from "axios";

const API =
"http://localhost:5000/api/tracking";

const getHeaders = () => ({
headers:{
Authorization:
`Bearer ${
localStorage.getItem("token")
}`
}
});

export const createTracking =
async(data)=>{

const response =
await axios.post(
API,
data,
getHeaders()
);

return response.data;
};

export const getTracking =
async(orderId)=>{

const response =
await axios.get(
`${API}/${orderId}`,
getHeaders()
);

return response.data;
};