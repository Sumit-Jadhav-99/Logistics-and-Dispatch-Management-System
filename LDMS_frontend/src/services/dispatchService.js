import axios from "axios";

const API =
"https://logistics-and-dispatch-management-system.onrender.com/api/dispatches";

const headers = () => ({
  headers: {
    Authorization:
    `Bearer ${
      localStorage.getItem("token")
    }`
  }
});

export const getDispatches =
async () => {

  const response =
  await axios.get(
    API,
    headers()
  );

  return response.data;
};

export const createDispatch =
async (data) => {

  const response =
  await axios.post(
    API,
    data,
    headers()
  );

  return response.data;
};
