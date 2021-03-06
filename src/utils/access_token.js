const setAccessToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const getAccessToken = () => localStorage.getItem('accessToken');

export { setAccessToken, getAccessToken };
