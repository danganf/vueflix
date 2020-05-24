require('./bootstrap');

import Vue from 'vue'

window.Vue = Vue;

import App from './App'
import Snotify from 'vue-snotify';
import VueSwal from 'vue-swal';

Vue.use(Snotify, {toast: {showProgressBar: false}});
Vue.use(VueSwal);

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app');