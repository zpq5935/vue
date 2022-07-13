import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import diaryIndex from '@/components/diary/diaryIndex'
import calendar from '@/components/diary/calendar'

Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/diaryIndex',
      name: 'diaryIndex',
      component: diaryIndex
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    }
  ]
})
