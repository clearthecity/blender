import Vue from "vue"
import App from "./App.vue"
import router from "./router"
//import store from "./store" //Vuex

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const VueUploadComponent = require('vue-upload-component')
Vue.component('file-upload', VueUploadComponent)

//import 'node-markovify'
//import 'fs' //Node file sys.


Vue.config.productionTip = false;

new Vue({
  router,
  //store,
  render: h => h(App)
}).$mount("#app");
