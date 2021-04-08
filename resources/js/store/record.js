// export default {
//     actions: {
//         async createRecord({dispatch, commit}, record) {
//             try {
//                 return record = axios.post(('http://finance-app/api/record'), {
//                     category_id,
//                     amount,
//                     description,
//                     type
//                 });
//             } catch (e) {
//                 commit("setError", e);
//                 throw e;
//             }
//         },
//
//         async fetchRecords({dispatch, commit}) {
//             try {
//                 await axios.get('http://finance-app/api/record').then(response => {
//                     this.records = response.data.data
//                 })
//             } catch (e) {
//                 commit("setError", e);
//                 throw e;
//             }
//         },
//     }
//
//     async fetchRecordsId({dispatch, commit}, id) {
//         try {
//             const record = await axios.get('http://finance-app/api/record/${id}').then(response => {
//                 this.record = response.data.data
//             })
//             return {...record, id};
//
//         } catch (e) {
//             commit("setError", e);
//             throw e;
//         }
//     },
// }
//   // async datesAddArr({ commit, dispatch }) {
//   //   try {
//   //     const uid = await dispatch("getIdUser");
//   //    const record = await dispatch("fetchRecordsId");
//   //     const dates =
//   //         (
//   //             await firebase
//   //                 .database()
//   //                 .ref(`/users/${uid}/records/${record}/date`)
//   //                 .child(id)
//   //                 .once("value")
//   //         ).val() || {};
//   //     return Object.keys(dates).map((key) => ({
//   //       ...dates[key],
//   //       id: key,
//   //     }));
//   //   } catch (e) {
//   //     commit("setError", e);
//   //     throw e;
//   //   }
//   // },
//   // async deleteRecord({dispatch,commit}){
//   //   try {
//   //     const uid = await dispatch("getIdUser");
//   //     const recordId = await dispatch("fetchRecordsId");
//   //     return  await firebase.database().ref(`/users/${uid}/records/${recordId}/`).remove();
//   //   }catch (e){
//   //     commit("setError",e);
//   //     throw e;
//   //   }
//   // }
// },



