import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/cart',
        name: 'Cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Cart" */ '../views/Cart.vue'),
        // meta: {
        //     auth: true
        // },
        children: [{
            path: ":name",
            name: "course",
            component: () =>
                import ('../views/Detail.vue')
        }],
        // // 路由独享的守卫
        // beforeEnter(to, from, next) {
        //     if (window.isLogin) {
        //         next();
        //     } else {
        //         next('/login?redirect=' + to.fullPath);
        //     }
        // },
    },
    {
        path: '/login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        // 会匹配所有路径 
        path: '/:catchAll(.*)',
        component: () =>
            import ('../views/404.vue')

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// 全局守卫修改为：要求用户必须登录，否则只能去登录页
router.beforeEach((to, from, next) => {
    if (window.isLogin) {
        if (to.path === '/login') {
            next('/');
        } else {
            next();
        }
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next('/login?redirect=' + to.fullPath);
        }
    }

});

export default router