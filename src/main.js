import Vue from 'vue'
import VueRouter from 'vue-router';
import { BootstrapVue } from 'bootstrap-vue';
import VueFeather from 'vue-feather';
import vWow from 'v-wow';
import VueCarousel from 'vue-carousel';
import Toasted from 'vue-toasted';

//Vuesax component framework
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; // Vuesax

//Vue-Swal
import VueSwal from 'vue-swal';

import App from './App.vue'
import './assets/style/custom.scss';
import { router } from './router';
import store from './store/store';

import i18n from './i18n/1i8n';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueFeather);
Vue.use(VueRouter);
Vue.use(vWow);
Vue.use(VueCarousel);
Vue.use(Toasted)
Vue.use(Vuesax);
Vue.use(VueSwal)

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
