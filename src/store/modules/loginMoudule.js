export default {
    namespaced:true,
    state:{
        userInfo:{
            username:'',
            token:false
        }
    },
    mutations:{
        setLogin(state,obj){
            state.userInfo={
                username:obj.username,
                token:obj.token
            }
        },
        setLoginOut(state){
            state.userInfo = {
                username:'',
                token:false
            }
        }
    }
}