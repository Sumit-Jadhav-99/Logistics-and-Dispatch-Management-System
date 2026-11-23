import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

const getHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(
      "token"
    )}`,
  },
});

export const getUsers = async () => {
  const response = await axios.get(
    API_URL,
    getHeaders()
  );

  return response.data;
};

export const createUser = async (data) => {
  const response = await axios.post(
    API_URL,
    data,
    getHeaders()
  );

  return response.data;
};

export const updateStatus = async (
  id,
  accountStatus
) => {
  const response = await axios.put(
    `${API_URL}/${id}/status`,
    { accountStatus },
    getHeaders()
  );

  return response.data;
};