import {createStore} from "vuex";

import auth from "./auth.js";
import info from "./info.js";
import category from "./category.js";
import record from "./record.js";
import axios from "axios";
import {mapGetters, mapActions} from "vuex";

export default createStore({
    state: {error: null},
    mutations: {
        //error mutation
        setError(state, error) {
            state.error = error;
        },
        clearError(state) {
            state.error = null;
        },
        //info mutation
        setInfo(state, info) {
            state.info = info;
        },
        clearInfo(state) {
            state.info = {};
        },
    },
    getters: {
        error: (state) => state.error,
        info: (state) => state.info,
    },
    actions: {
        async fetchFixer() {
            const fetchApi = await fetch(
                `https://api.exchangerate-api.com/v4/latest/USD`
            );
            return await fetchApi.json();
        },
        //infoAction
        async updateInfo({dispatch, commit, getters}, toUpdate, updatedData, id) {
            try {
                const updateData = {...getters.info, ...toUpdate};
                console.log(updateData);
                await axios.put((`http://finance-app/api/info-update/${id}`), {
                    updateData
                });
                commit("setInfo", updateData);
            } catch (e) {
                commit("setError", e);
                throw e;
            }
        },
    },
    modules: {auth, info: {namespaced: true, ...info}, category, record},
});
