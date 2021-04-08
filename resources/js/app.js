import { createApp } from 'vue';
import "../registerServiceWorker";
import store from './store';
import router from './router'
require('./bootstrap');
import App from "./components/App";
import Loader from "./components/Loader";
import Filters from "./components/utils/Filters.js";
import 'materialize-css/dist/js/materialize.min'
import axios from 'axios'
import VueAxios from 'vue-axios'




createApp(App)
    .component('Loader',Loader)
    .component('App',App)
    .use(Filters)
    .use(store)
    .use(VueAxios, axios)
    .use(router)
    .mount("#app")


