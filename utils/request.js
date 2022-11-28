/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */

function callRequest() {
    // 请求域名
    axios.defaults.baseURL = env.baseURL;

    // 请求超时时间
    axios.defaults.timeout = 10000;
    
    // post请求头
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    
    // 请求拦截器
    axios.interceptors.request.use(    
        config => {
            // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
            // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
            const token = auth.getToken();
            token && (config.headers.Token = token);
            return config;
        },
        err => {
            return Promise.error(err);
        })
    
    // 响应拦截器
    axios.interceptors.response.use(    
        response => {        
            if (response.status === 200) {            
                return Promise.resolve(response);        
            } else {            
                return Promise.reject(response);        
            }    
        },
        // 服务器状态码不是200的情况    
        error => {        
            if (error.response.status) {            
                switch (error.response.status) {                
                    // 401: 未登录                
                    // 未登录则跳转登录页面，并携带当前页面的路径                
                    // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                    case 401:
                        vant.Toast('未登录');      
                        // router.replace({                        
                        //     path: '/login',                        
                        //     query: { redirect: router.currentRoute.fullPath } 
                        // });
                        break;
                    // 403 token过期                
                    // 登录过期对用户进行提示                
                    // 清除本地token和清空vuex中token对象                
                    // 跳转登录页面      
                    case 403:
                        vant.Toast('登录过期，请重新登录');
                        // 清除token
                        auth.removeToken();                
                        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                        setTimeout(() => {
                            router.replace({
                                path: '/login',
                                query: { 
                                    redirect: router.currentRoute.fullPath 
                                }
                            });
                        }, 1000);
                        break; 
                    // 404请求不存在
                    case 404:
                        vant.Toast('网络请求不存在');
                    break;                
                    // 其他错误，直接抛出错误提示 
                    default:
                        vant.Toast(error.response.data.message);
                }
                return Promise.reject(error.response);        
            }       
        }
    );


    return {
        /** 
         * get方法，对应get请求 
         * @param {String} url [请求的url地址] 
         * @param {Object} params [请求时携带的参数] 
         */
        get: (url, params) => {
            return new Promise((resolve, reject) => {
                axios.get(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
            });
        },
        /** 
         * post方法，对应post请求 
         * @param {String} url [请求的url地址] 
         * @param {Object} params [请求时携带的参数] 
         */
        post: (url, params, config) => {
            return new Promise((resolve, reject) => {
                // 使用Qs.stringify(params)可以将json格式数据转换成表单格式数据，已引入Qs库，可直接使用
                axios.post(url, params, config)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err.data)
                })
            });
        }
    }
}
const request = callRequest();
