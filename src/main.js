import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false // 生产提示为ture则提示会少一些

new Vue({
  render: h => h(App)
}).$mount('#app')
