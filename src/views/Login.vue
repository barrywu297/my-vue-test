<template>
    <div> 
        <button @click="login" v-if="!isLogin">登录</button> 
        <button @click="logout" v-else>登出</button> 
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            window.isLogin = true;
            this.$router.addRoute({
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/About.vue')
            });
            const redirect = this.$route.query.redirect || "/";
            this.$router.push(redirect);
        },
        logon() {
            window.isLogin = false;
        }
    },
    computed: {
        isLogin() {
            return window.isLogin;
        }
    },
}

</script>

<style lang="scss" scoped>

</style>