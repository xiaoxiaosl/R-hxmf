import { get, post } from './http'

//导航请求
export const $httpNavbar = () => get('./data/config.json');

// 产品请求
export const $httpPost = () => post('data/config.json')