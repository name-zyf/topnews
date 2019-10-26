import Vue from 'vue'
import App from './App.vue'
// 全局导入UI插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false // 生产提示为ture则提示会少一些
/**
 * 使用插件【注意】这个操作相当于全局安装了UI，
 * 换句话说，就不用额外的再在Vue实例上的components:{}上再注册了，可以直接使用了
 */
Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
/**
 *  main.js文件职责
 *  1.创建根实例
 *  2.赋值全局范围的依赖导入
 */
