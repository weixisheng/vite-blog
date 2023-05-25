# Vue优化
## 请求优化
Vue项目中使用```axios```做请求库，封装有利于管理项目。
[axios](https://github.com/axios/axios)

基本目录如下

```bash
- http
  > config.js // 域名配置
  > index.js  // axios拦截
  > api.js   // 封装的api，这里也可以考虑分模块
```
- config.js
```js
export const BASE_URL = 'https://www/example.com/api/'
```
- index.js
```js
import axios from 'axios'
import Vue from 'vue'
import { BASE_URL } from './config'
import router from '@/router/index'
import { Notification } from 'element-ui' // 可选

// axios 配置
axios.defaults.timeout = 60000
axios.defaults.baseURL = BASE_URL
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8'
// 登录失效重新请求次数
// 也可以使用cancel token
let errorCount = 0

// http request 拦截器
axios.interceptors.request.use(
  config => {
    /* 请求头验证，可选 */
    var token = localStorage.getItem('token')
    config.headers['AuthToken'] = token

    return config
  },
  error => {
    return Promise.reject(error.response)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  res => {
    if (res && (res.status === 200 || res.status === 304)) {
      if (res.data) {
       /* 授权失败逻辑，根据项目修改 */
        if (res.data.return_code === "10001") {
          errorCount++
          if (errorCount > 1) return res.data
          Notification.warning({
            message: `${res.data.return_msg}, 2秒后跳转到登录页`
          })
          setTimeout(() => {
            errorCount = 0
            router.replace('/login')
          }, 2000)
        }

        return res.data
      }
    }
  },
  error => {
    errorCount = 0
    Notification.closeAll()
    Notification.error({
      message: error.message.indexOf('timeout') !== -1 ? '请求超时' : '请求错误' 
    })
    return Promise.reject(error)
  }
)

// 可以参考文档扩展其他参数
export function doPost = (url, data) => axios({url, method: 'POST', data})

export function doGet = (url, params) => axios({url, method: 'GET', params})
```
- api.js
```js
import { doPost } from './index'
export const login = param => doPost('login/index', param)
```
后续在页面直接引入相关接口即可，例如：
```vue
<script>
import { login } from '@/http/api'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      login(this.form).then(res => {})
    }
  }
}
</script>
```
- 跨域设置

在 ```vue.config.js```里设置```proxy```即可。
```js
// 结合axios，设置baseURL为‘/mock’之后，接口会走跨域设置，真正请求target设置的地址
// axios.defaults.baseURL = '/mock'
// 并且实际中把mock这个替换掉，调试看到https://localhost:8080/mock/order/list
// 实际请求https://www.example.com/api/order/list
devServer: {
    proxy: {
      '/mock': {
        target: 'https://www.example.com/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': ''
        }
      }
    }
  }
```

## 路由优化

[路由分模块管理，并自动注册](./auto.html#自动注册路由模块)
## 构建优化
[vue-cli构建配置](https://github.com/staven630/vue-cli4-config)