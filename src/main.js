import Vue from 'vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTyperPlugin from 'vue-typer'
//import axios from 'axios'
import store from './store';
import LetItSnow from 'vue-let-it-snow';


import App from './App.vue'


// Global
Vue.use(VueTyperPlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//Get it snowy
Vue.use(LetItSnow);


require('@/store/subscriber');

Vue.config.productionTip = false

//axios.defaults.baseURL='http://localhost:8000/api/';

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => { //on attend la réponse avant de charger la page, cela évite le changment de menu juste après la requete
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

});

