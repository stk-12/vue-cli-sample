import Vue from 'vue';
import App from './App.vue';
import Header from './components/modules/Header.vue';
import Footer from './components/modules/Footer.vue';
import router from './router/router';

Vue.config.productionTip = false

Vue.component('Header', Header);
Vue.component("Footer", Footer);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
