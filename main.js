import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import request from '@/utils/request.js'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
Vue.use(request)
const app = new Vue({
    ...App
})
app.$mount()
