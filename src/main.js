import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter({routes,mode:'history'});
router.beforeEach((to,from,next)=>{
  next();
});
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
