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
    baseAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

/**
 * Logs out the user by clearing the Authorization header and local storage token.
 * It then reloads the window to ensure changes take effect.
 */
// src/utils/auth.helper.js
export const logout = () => {
  // 1. Delete the default Authorization header for future requests
  delete baseAxios.defaults.headers.common["Authorization"];

  // 2. Clear local storage/session storage
  // NOTE: If you only store auth data in localStorage, clearing everything is fine.
  // If you store other user data, consider using localStorage.removeItem('tokenKey')
  localStorage.clear();

  // ❌ REMOVED: window.location.reload();
};
// export const logout = () => {
//     delete baseAxios.defaults.headers.common['Authorization'];
//     localStorage.clear();
//     window.location.reload();
// };
