 import axios from 'axios';

export default {
 actions: {
    async categoriesAddArr({ commit, dispatch }) {
        try {
             await axios.get('http://finance-app/api/category').then(response => {
                this.categories = response.data.data
            });
        } catch (e) {
            commit("setError", e);
            throw e;
        }
     },

           async updateCategories({ commit, dispatch }, { name, category_limit,id}) {
             try {
                await axios.post((`http://finance-app/api/category-update/${id}`), {
                     name,
                     category_limit
                });
             } catch (e) {
               commit("setError", e);
               throw e;
             }
           },


}
};
