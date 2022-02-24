import Vue from "vue";
import App from "./App";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBuUOyuccDCgIrY_CzttPvHbkSHlqYqhdM",
  authDomain: "rd-party-login-authentication.firebaseapp.com",
  projectId: "rd-party-login-authentication",
  storageBucket: "rd-party-login-authentication.appspot.com",
  messagingSenderId: "103569221139",
  appId: "1:103569221139:web:986fd732692f09c22201e6"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
