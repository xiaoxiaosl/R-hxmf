import { get, post } from './http'

//导航请求
export const $httpGet = () => get('./data/config.json');

// 产品请求
export const $httpPost = (params) => post('data/config.json', params)