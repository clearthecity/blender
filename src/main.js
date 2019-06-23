import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


/*
 To run Python scripts: https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js
https://www.ivarprudnikov.com/nodejs-server-running-python-scripts/

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["path/to/script.py", arg1, arg2, ...]);
*/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
