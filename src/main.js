import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import utils from './utils/utils.js'

axios.interceptors.request.use(
    config => {
        //config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.headers['Accept'] = 'application/json'
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        if(error.response.status == 401 && error.response.data.message == "Token has expired"){
            let retorno = await utils.refresh()
            if(retorno){
                error.config.__isRetryRequest = true
                error.config.headers.Authorization = 'Bearer ' + localStorage.token
                return axios.request(error.config)
            }else{
                return Promise.reject(error)
            }
        }

        if(error.response.status == 500 && error.response.data.message == "Token has expired and can no longer be refreshed"){
            let retorno = await utils.login()
            if(retorno){
                error.config.__isRetryRequest = true
                error.config.headers.Authorization = 'Bearer ' + localStorage.token
                return axios.request(error.config)
            }else{
                return Promise.reject(error)
            }
        }

        if(error.response.status == 500 && error.response.data.message == "The token has been blacklisted"){
            let retorno = await utils.login()
            if(retorno){
                error.config.__isRetryRequest = true
                error.config.headers.Authorization = 'Bearer ' + localStorage.token
                return axios.request(error.config)
            }else{
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
