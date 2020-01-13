
import './styles/reset.css';
import './styles/color.css';
import './styles/flex.css';
import './styles/offset.css';
import './styles/text.css';

import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index';
import store from '@/store/index';
import SvgIcon from './components/SvgIcon';
import "babel-polyfill"
import cssModule from './plugins/css-module';
// import vueLife from './plugins/vue-life';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.component('svg-icon', SvgIcon);

Vue.use(cssModule());
// Vue.use(vueLife());
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
