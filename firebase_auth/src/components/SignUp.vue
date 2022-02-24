<template>
  <div id="app">
    <b-card
      img-src="https://78.media.tumblr.com/50d43db43843a7dc2fbb93c660a1d0dc/tumblr_ozar2dfRQI1rh3rypo1_1280.gif"
      img-alt="Image"
      img-top
      style="max-width: 50rem"
      border-variant="primary"
      header="Ş ļ Ġ Ń  - Ũ ₱"
      header-bg-variant="primary"
      header-text-variant="white"
      align="center"
      class="mx-auto mt-3"
    >
      <b-form>
        <b-form-group id="input-group-1" label="ļ Ð" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            placeholder="Ęnter Ŷour ļD"
            required
            v-model="email"
          ></b-form-input>
        </b-form-group>
        <br />
        <b-form-group
          id="input-group-2"
          label="₱ Ä Ş Ş Ŵ Ø Ŗ Ð"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            type="password"
            placeholder="Ęnter Ŷour ₱assword"
            required
            v-model="password"
          ></b-form-input>
        </b-form-group>
      </b-form>
      <br />
      <b-button variant="success" @click="signUp">Ĵ Ø ļ Ń</b-button>
      <p class="mt-3">
        If you have an account,
        <router-link to="login"> Login </router-link>
      </p>
    </b-card>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert("완료");
          console.log(user);
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
<style lang=""></style>
