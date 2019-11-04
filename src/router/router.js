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
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {

    return new Promise(resolve => {
      this.app.$root.$on('triggerScroll', ()=>{ //this.app rooterの挿入されているVueインスタンス
        let position = { x: 0, y: 0 }
        if (savedPosition) {
          position = savedPosition;
        }
        if (to.hash) {
          position = {
            selector: to.hash
          };
        }
        resolve(position);
      }) 
    })

    // if(savedPosition){ //ブラウザバック時
    //   return savedPosition;
    // }
    // if(to.hash) { //hashがあったら
    //   return {
    //     selector: to.hash
    //   }
    // }

  }
});