import axios from "axios";

const API =
    "http://localhost:5000/api/dashboard";

export const getDashboardStats =
    async () => {

        const response =
            await axios.get(
                API,
                {
                    headers: {
                        Authorization:
                            `Bearer ${localStorage.getItem("token")
                            }`
                    }
                }
            );

        return response.data;
    };


export const getDriverDashboard =
    async () => {

        const response =
            await axios.get(
                "http://localhost:5000/api/dashboard/driver",
                {
                    headers: {
                        Authorization:
                            `Bearer ${localStorage.getItem("token")
                            }`
                    }
                });

        return response.data;

    };

export const getDispatcherDashboard =
    async () => {

        const response =
            await axios.get(

                "http://localhost:5000/api/dashboard/dispatcher",

                {
                    headers: {
                        Authorization:
                            `Bearer ${localStorage.getItem("token")
                            }`
                    }
                });

        return response.data;

    };