const login = {
  state: {
    showUser: false
  },
  mutations: {
    showLogin(state) {
      state.showUser = !state.showUser;
    }
  }
};
export default login;
