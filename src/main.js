import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


/*
  https://vuejs.org/v2/guide/components-registration.html
*/
const requireComponent = require.context(
  './components', true, /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)
  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
});
