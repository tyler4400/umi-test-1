import axios from "axios";
import router from "umi/router";

const userinfo = JSON.parse(localStorage.getItem("userinfo")) || {
    token: "",
    role: "",
    username: "",
    balance: 0
};

function login(payload){
    console.log(payload);
    return axios.post("api/login", payload).then(({data: {code, data: userinfo}}) => ({code, userinfo}) )
}

export default {
    namespace: "user",
    state: userinfo,
    effects: {
        * login({payload}, {call, put}){
            try {
                const {code, userinfo} = yield call(login, payload);
                if (code === 0) {
                    localStorage.setItem('userinfo', JSON.stringify(userinfo));
                    yield put({type: 'init', payload: userinfo});
                    router.push('/');
                } else {
                    alert("用户名密码错误")
                }
            } catch (e) {
                // alert("登录失败");
            }
        }
    },
    reducers: {
        init(state, action){
            return action.payload;
        }
    }
}
