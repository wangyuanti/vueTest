import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './css/public.css';
import echarts from 'echarts'
// import md5 from 'js-md5';

Vue.prototype.$echarts = echarts
Vue.use(iView);
Vue.config.productionTip = false;
// Vue.prototype.$md5 = md5;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
