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
    error => {
        if(error.response.status == 401 && error.response.data.message == "Token has expired"){
            utils.refresh(error.request)
        }
        return Promise.reject(error)
    }
)

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')
