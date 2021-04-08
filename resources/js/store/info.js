import axios from "axios";

export default {
  state: {
    info: "ru-RU",
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    },
    clearInfo(state) {
      state.info = {};
    },
 },

  actions: {
    async updateInfo({ dispatch, commit, getters }, toUpdate,updateData) {
      try {
         updateData = { ...getters.info, ...toUpdate };
          await axios.put((`http://finance-app/api/category-update/${id}`), {
              updateData
          });
        commit("setInfo", updateData);
      } catch (e) {
        commit("setError", e);
          console.log('1');
        throw e;
      }
    },
      async fetchInfo({ commit, dispatch }) {
          try {
              await axios.get('http://finance-app/api/info').then(response => {
                  this.info = response.data.data
              });
          } catch (e) {
              commit("setError", e);
              throw e;
          }
      },
  },


  getters: {
    info: (state) => state.info,
  },

};
