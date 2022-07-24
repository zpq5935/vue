import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import diaryAdd from '@/components/diary/diaryAdd'
import calendar from '@/components/diary/calendar'

Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
// Date对象转json，时间一致
function dateFormat(date, fmt) {
  if (null == date || undefined == date) return '';
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

Date.prototype.toJSON = function () { return dateFormat(this,'yyyy-MM-dd')}

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
      path: '/diaryAdd',
      name: 'diaryAdd',
      component: diaryAdd
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    }
  ]
})
