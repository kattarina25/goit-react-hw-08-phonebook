const getIsAuthenticated = state => state.users.isAuthenticated;
const getUsername = state => state.users.user.name;
const getError = state => state.users.error;

export default {
  getIsAuthenticated,
  getUsername,
  getError,
};
