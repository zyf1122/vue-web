import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Hun from "@/pages/Hun"
import Category from "@/pages/Category"
import Cart from "@/pages/Cart"
import Mine from "@/pages/Mine"
import T from "@/test/T"
import jq from "@/test/jq"
import Banner from "@/test/Banner"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home      
    },
    {
      path:'/hun',
      component:Hun
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/t',
      component:T
    },
    {
      path:'/jq',
      component:jq
    },
    {
      path:'/b',
      component:Banner
    }
  ]
})
