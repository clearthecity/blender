import Vue from "vue"
import App from "./App.vue"
import router from "./router"

import 'bootstrap/dist/css/bootstrap.min.css'

const MarkovChain = require('markovchain')
Object.defineProperty(Vue.prototype, '$markovchain', { value: MarkovChain })


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
