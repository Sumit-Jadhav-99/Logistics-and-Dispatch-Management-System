import axios from "axios";

const API_URL = "https://logistics-and-dispatch-management-system.onrender.com/api/auth";

export const loginUser = async (data) => {
  const response = await axios.post(
    `${API_URL}/login`,
    data
  );

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
