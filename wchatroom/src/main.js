
import Vue from  'vue' 
//导入 vue-router 包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource' //请求
Vue.use(VueResource)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import swiper from 'swiper'
import "swiper/dist/css/swiper.min.css";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue'
import  'font-awesome/css/font-awesome.css'

//导入组件
import App from './App.vue'
//导入自定义路由模块 从main.js 抽离路由出来 自定义模块
import router from './router.js'



var vm = new Vue({
      el: '#app',
      render:function(cteateElements){  //render  会把所有 el指定的容器中 所有的内容都会被清空
            return cteateElements(App)
      },
      router   //将路由对象挂载到vue实例上
})


