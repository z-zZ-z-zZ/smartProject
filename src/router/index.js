import Vue from 'vue';
import Router from 'vue-router';

/* 一级路由 */
import loginHtml from '../components/pages/login';
import registerHtml from '../components/pages/register';
import goodsClassHtml from '../components/pages/goodsClass';
import detailHtml from '../components/pages/detail';
import Home from '../components/pages/home';

/* 二级路由 */
import indexHtml from '../components/pages/index';
import searchHtml from '../components/views/searchClass';
import orderHtml from '../components/views/order';
import mineHtml from '../components/views/mine';
import shopCar from '../components/views/shopcar';


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: loginHtml
    },
    {
      path: '/register',
      component: registerHtml
    },
    {
      path: '/goodsClass',
      component: goodsClassHtml
    },
    {
      path: '/detail',
      component: detailHtml
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/index',
          component: indexHtml,
        },
        {
          path: '/search',
          component: searchHtml
        },
        {
          path: '/order',
          component: orderHtml
        },
        {
          path: '/mine',
          component: mineHtml
        },
        {
          path: '/shopcar',
          component: shopCar
        },
        {
          path: '',
          redirect: '/index'
        }

      ]
    },
    {
      path: '*',
      redirect: '/home'
    }

  ]
})
