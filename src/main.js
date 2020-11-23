// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 全局引入样式重置和公共样式 */
import './assets/css/reset.css';
import './assets/css/public.css';

import './assets/js/remScale'

/* 引入封装好的全局组件 */
import publicComponents from './publicComponents/index';
for(let i in publicComponents){
  Vue.component(i,publicComponents[i])
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
