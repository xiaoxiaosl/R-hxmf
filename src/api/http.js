import axios from 'axios'

const dev = 'http://192.168.0.114:8080/';
const prop = 'http://192.168.0.114:8080/';
const baseURL = process.env.NODE_ENV == 'production' ? prop : dev;

const instance = axios.create({
    baseURL: baseURL,
    timeout: 60000,
});

//get请求
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        instance
            .get(url, {
                params: params,
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

//post请求
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}