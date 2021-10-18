import { get, post } from './http'

//导航请求
export const $httpNavbar = () => get('data/config.js');

// 产品请求
// export const $httpProductData = () => post('navbar');