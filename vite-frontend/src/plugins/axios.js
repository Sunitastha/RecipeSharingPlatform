// import axios from "axios";
// import { getTokenFromLocalStorage } from "../utils/localstorage.helper";

// const baseAxios = axios.create();

// baseAxios.defaults.baseURL = "http://localhost:8083";

// // Add a request interceptor 
// baseAxios.interceptors.request.use(
//     function (config) {
//         const token = getTokenFromLocalStorage();
//         if (token) {
//             config.headers.Authorization = 'bearer ' + token;
//         }
//         return config
//     }, // function(config)
//     function (error) {
//         return Promise.reject(error)
//     }, // function(error)
// )

// baseAxios.interceptors.response.use(
//     function (response) {
//         if (response.status === 200) {
//             // console.log('data loaded successfully');
//         }

//         if (response.status === 201) {
//             // console.log('data created    successfully');
//         }
//         return response.data;
//     }, // function(response)
//     function (error) {
//         const errorVal = error?.response?.data?.error

//         if ([401].includes(error?.response?.status)) {
//             // logoutUser()
//         }
//         return Promise.reject(errorVal)
//     }, // function(error)
// ) // baseAxios.interceptors.response.use

// export default baseAxios;


import axios from "axios";
import { getTokenFromLocalStorage } from "../utils/localstorage.helper"; // Adjust the path as needed

// Create an Axios instance
const baseAxios = axios.create({
    baseURL: "http://localhost:8083", // Your backend base URL
});

// Add a request interceptor to include the token in the headers
baseAxios.interceptors.request.use(
    function (config) {
        const token = getTokenFromLocalStorage();
        if (token) {
            config.headers.Authorization = 'Bearer ' + token; // Ensure 'Bearer' is capitalized
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle responses and errors
baseAxios.interceptors.response.use(
    function (response) {
        // Handle success responses
        if (response.status === 200) {
            // You can handle a 200 status if needed
        }

        if (response.status === 201) {
            // You can handle a 201 status if needed
        }
        return response.data; // Return the response data directly
    },
    function (error) {
        const errorVal = error?.response?.data?.error;

        if ([401].includes(error?.response?.status)) {
            // Handle unauthorized error (e.g., logout user, redirect to login)
            // logoutUser(); // Uncomment and implement if needed
        }
        return Promise.reject(errorVal); // Return the error message
    }
);

export default baseAxios;
