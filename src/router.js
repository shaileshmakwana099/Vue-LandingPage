import VueRouter from 'vue-router';
// Pages
import Developer from './components/landing-pages/Home';
import Blog from './components/landing-pages/Blog';
import SuccessfulCase from "./components/landing-pages/SuccessfulCase";
import AboutUs from "./components/landing-pages/AboutUs";
import NotFound from "./components/landing-pages/NotFound";

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: Developer },
      { path: '/blog', component: Blog },
      { path: '/successful-case', component: SuccessfulCase },
      { path: '/about-us', component: AboutUs },
        {path: '/404-error', component: NotFound},
        {path: '*', redirect: '404-error' }
    ]
});