import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './routers.map';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    // if (to.meta.auth && !store.state.auth.authenticated) {
    //     return router.push({name: 'auth'})
    // }

    // if ( to.matched.some(record => record.meta.auth) &&  !store.state.auth.authenticated) {
    //     return router.push({name: 'auth'})
    // }
    next()
})

export default router