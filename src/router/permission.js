import router from './index'
import store from '../store'

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        //需要登录
        let token = store.state.loginModule.userInfo.token
        if (token) {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        //无需登录
        next()
    }
})
