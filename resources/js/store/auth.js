import axios from "axios";


export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
          await axios.post((`http://finance-app/api/user/login`), {
              email,
              password
          });
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async register({ dispatch, commit }, { email, password, name }) {
      try {
          await axios.post((`http://finance-app/api/register`), {
              name,
              email,
              password
          });

      } catch (e) {
        console.log(e);
        commit("setError", e);
        throw e;
      }
    },
    // getIdUser() {
    //   const uid = firebase.auth().currentUser;
    //   return uid ? uid.uid : null;
    // },
  },
};
