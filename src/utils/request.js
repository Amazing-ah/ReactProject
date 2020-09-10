import axios from 'axios'
import qs from 'qs'


axios.interceptors.response.use(res => {
    console.group("=======请求地址：" + res.config.url + "=============")
    console.log(res);
    console.groupEnd()
    return res;
})

/* 会员登录 */
export const reqLogin = (form) => {
    return axios({
        url: "/api/login",
        method: "post",
        data: qs.stringify(form)
    })
}
/* 会员注册 */
export const reqLogon = (form) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(form)
    })
}

/* 轮播图 */
export const reqBanner = () => {
    return axios({
        url: "/api/getbanner",
        method: "get"
    })
}

/* 首页商品信息 */
export const reqIndexList = () => {
    return axios({
        url: "/api/getindexgoods",
        method: 'get'
    })
}
