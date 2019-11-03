import Vue from 'vue';
import Router from 'vue-router';
import Top from '../components/pages/top/Top.vue';
import About from '../components/pages/about/About.vue';
import Blog from '../components/pages/blog/Blog.vue';
import BlogDetail from '../components/pages/blog/BlogDetail.vue';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      name: "top",
      path: "/",
      component: Top
    },
    {
      name: "about",
      path: "/about",
      component: About
    },
    {
      name: "blog",
      path: "/blog",
      component: Blog
    },
    {
      name: "blog-detail",
      path: "/blog/:id",
      component: BlogDetail,
      props: true
    }
  ]
});