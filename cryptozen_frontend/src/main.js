import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './assets/pages/home.vue'
import About from './assets/pages/about.vue'
import Service from './assets/pages/service.vue'
import Work from './assets/pages/work.vue'
import Blog from './assets/pages/blog.vue'



Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/about',
        component: About
    }, {
        path: '/work',
        component: Work
    }, {
        path: '/service',
        component: Service
    }, {
        path: '/blog',
        component: Blog
    }]
})


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})