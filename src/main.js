import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueFire)
var config = {
  apiKey: "AIzaSyDcS0gaBnnGotQa41xiVWANpQszcW4vYRE",
  authDomain: "chatwithvue.firebaseapp.com",
  databaseURL: "https://chatwithvue.firebaseio.com",
  projectId: "chatwithvue",
  storageBucket: "chatwithvue.appspot.com",
  messagingSenderId: "11958014385"
};
firebase.initializeApp(config);

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
