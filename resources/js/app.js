import Vue from 'vue'
import store from './store'
import router from './router'

window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const app = new Vue({
  store,
  router
}).$mount('#app')
