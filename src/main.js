import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { DropDownListComponent, DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';

Vue.config.productionTip = false

new Vue({
  DropDownListComponent, DropDownListPlugin,
  render: h => h(App),
}).$mount('#app')
