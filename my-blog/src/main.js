// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
// import router from './router'

Vue.config.productionTip = false
Vue.use(VueResource)

// 全局自定义指令
// Vue.directive('rainbow', {
//   bind (el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).substring(2, 8)
//   }
// })

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1500px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '500px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#' + Math.random().toString(16).substring(2, 8)
      el.style.padding = '20px'
    }
  }
})

// 自定义过滤器 全局
// Vue.filter('to-uppercase', value => {
//   return value.toUpperCase()
// })

Vue.filter('snippet', function (value) {
  return value.slice(0, 120) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
