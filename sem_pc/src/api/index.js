import axios from "axios";

// axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
// 设置请求路径的公共部分
// 测试链接
// axios.defaults.baseURL = "http://qa02-activity.xuebadev.com";
// 线上链接
// axios.defaults.baseURL = "xxxxxxxxxxxxxx";

export let getSliders = (params) => {
  return axios.post("api/activity/add",params);
};