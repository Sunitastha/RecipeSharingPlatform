export const setTokenToLocalStorage = (token) => {
  localStorage.setItem("token", token);
  // localStorage.setItem('token', res.data.token);
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

export const setUserToLocalStorage = (user) => {
  localStorage.setItem("user", user);
};

export const getUserFromLocalStorage = () => {
  return localStorage.getItem("user");
};
