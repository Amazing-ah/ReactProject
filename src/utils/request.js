import axios from "axios";
import qs from "qs";

//请求拦截
axios.interceptors.request.use((config) => {
  //从本地仓库取出token
  const token = sessionStorage.getItem("token");
  //如果去的是login和register不需要携带请求头直接return
  if (
    config.url === "http://localhost:3000/api/login" &&
    config.url === "http://localhost:3000/api/register"
  ) {
    return config;
  }
  //去的是其他页面则携带请求头
  config.headers.authorization = token;
  return config;
});

axios.interceptors.response.use((res) => {
  console.group("=======请求地址：" + res.config.url + "=============");
  console.log(res);
  console.groupEnd();
  return res;
});

/* 会员登录 */
export const reqLogin = (form) => {
  return axios({
    url: "/api/login",
    method: "post",
    data: qs.stringify(form),
  });
};
/* 会员注册 */
export const reqLogon = (form) => {
  return axios({
    url: "/api/register",
    method: "post",
    data: qs.stringify(form),
  });
};

/* 轮播图 */
export const reqBanner = () => {
  return axios({
    url: "/api/getbanner",
    method: "get",
  });
};

/* 首页商品信息 */
export const reqIndexList = () => {
  return axios({
    url: "/api/getindexgoods",
    method: "get",
  });
};

/* 商品详情 */
export const reqGoodsInfo = (params) => {
  return axios({
    url: "/api/getgoodsinfo",
    method: "get",
    params: params,
  });
};

/* 购物车添加 */
export const reqCarAdd = (form) => {
  return axios({
    url: "/api/cartadd",
    method: "post",
    data: qs.stringify(form),
  });
};
/* 分类树形结构 */
export const reqCateTree = () => {
  return axios({
    url: "/api/getcatetree",
    method: "get",
  });
};

/* 获取分类商品 */
export const reqGetGoods = (fid) => {
  return axios({
    url: "/api/getgoods",
    method: "get",
    params: fid,
  });
};

/* 购物车列表 */
export const reqShopCarList = (uid) => {
  return axios({
    url: "/api/cartlist",
    method: "get",
    params: uid,
  });
};

/* 购物车修改 */
export const reqShopCarChange = (form) => {
  return axios({
    url: "/api/cartedit",
    method: "post",
    data: qs.stringify(form),
  });
};

/* 购物车删除 */
export const reqShopCarDel = (id) => {
  return axios({
    url: "/api/cartdelete",
    method: "post",
    data: qs.stringify(id),
  });
};
