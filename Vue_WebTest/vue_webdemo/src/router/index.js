import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import Demo01 from '@/components/demoHtml/Demo01'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // {
    //   path: '/',
    //   name: 'Demo',
    //   component: Demo
    // }
    {
      path: '/',
      name: 'Demo01',
      component: Demo01
    }
  ]
})
