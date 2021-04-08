import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: "/login",
        name: "Login",
        meta: { layout: "empty" },
        component: () => import("../components/LoginRegister/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        meta: { layout: "empty"},
        component: () => import("../components/LoginRegister/Register.vue"),
    },
    {
        path: "/",
        name: "Home",
        meta: { layout: "main"},
        component: () => import("../components/Home/Home.vue"),
    },
    {
      path: "/categories",
      name: "Categories",
      meta: { layout: "main" },
      component: () => import("../components/Categories/Categories.vue"),
    },
    {
      path: "/detail-record/:id",
      name: "DetailRecord",
      meta: { layout: "main"},
      component: () => import("../components/DetailRecord/DetailRecord.vue"),
    },
    {
      path: "/history",
      name: "History",
      meta: { layout: "main" },
      component: () => import("../components/History/History.vue"),
    },
    {
      path: "/planning",
      name: "Planning",
      meta: { layout: "main" },
      component: () => import("../components/Planning/Planning.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      meta: { layout: "main" },
      component: () => import("../components/Profile/Profile.vue"),
    },
    {
      path: "/record",
      name: "Record",
      meta: { layout: "main" },
      component: () => import("../components/Record/Record.vue"),
    },
];

const router = createRouter({
    history: createWebHistory('finance-app'),
    routes: routes,
    linkActiveClass: 'active',
});
//
// router.beforeEach((to, from, next) => {
//     //const currentUser = firebase.auth().currentUser;
//     const requireAuth = to.matched.some((record) => record.meta.auth);
//     if (requireAuth) {
//         next("/login");
//     } else {
//         next();
//     }
// });

export default router;
