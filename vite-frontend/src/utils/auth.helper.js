// import baseAxios from "../plugins/axios";

// export const setAuthorizationHeader = (token)=>{
//     if(token){
//         baseAxios.defaults.headers.common.Authorization = 'bearer ' + token;
//     }
// }


// export const logout = ()=>{
//     delete baseAxios.defaults.headers.common.Authorization;
//     localStorage.clear();
//     window.location.reload();
// }

// auth.helper.js

import baseAxios from "../plugins/axios";

/**
 * Sets the Authorization header for Axios requests.
 * @param {string} token - The authentication token to set.
 */
export const setAuthorizationHeader = (token) => {
    if (token) {
        baseAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};

/**
 * Logs out the user by clearing the Authorization header and local storage token.
 * It then reloads the window to ensure changes take effect.
 */
export const logout = () => {
    delete baseAxios.defaults.headers.common['Authorization'];
    localStorage.clear();
    window.location.reload();
};
