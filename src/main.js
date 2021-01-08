import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  BootstrapVue,
  BootstrapVueIcons
} from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VuejsDialog from 'vuejs-dialog';

import {
  setHeaderToken
} from './store/auth'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import 'vuejs-dialog/dist/vuejs-dialog.min.css'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueToast);
Vue.use(VuejsDialog);

Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) {
  setHeaderToken(token)
}

store.dispatch('get_user', token)
  .then(() => {

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }).catch((error) => {
    console.error(error)
  })