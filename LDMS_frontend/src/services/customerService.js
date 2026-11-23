/*
import axios from "axios";
const API =
    "http://localhost:5000/api/customers";

const getHeaders = () => ({
    headers: {
        Authorization:
            `Bearer ${localStorage.getItem("token")
            }`
    }
});

export const getCustomers =
    async () => {

        const response =
            await axios.get(
                API,
                getHeaders()
            );

        return response.data;
    };

export const createCustomer =
    async (data) => {

        const response =
            await axios.post(
                API,
                data,
                getHeaders()
            );

        return response.data;
    };
*/


import axios from "axios";

const API =
  "https://logistics-and-dispatch-management-system.onrender.com/api/customers";

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(
      "token"
    )}`,
  },
});

export const getCustomers = async () => {
  const response = await axios.get(
    API,
    getHeaders()
  );

  return response.data;
};

export const createCustomer = async (
  data
) => {
  const response = await axios.post(
    API,
    data,
    getHeaders()
  );

  return response.data;
};
