<template>
  <div id="app">
    <b-card
      img-src="https://c.tenor.com/_EYOsX_1CUkAAAAC/pixel-night.gif"
      img-alt="Image"
      img-top
      style="max-width: 50rem"
      border-variant="dark"
      header="Ł Ø Ġ ļ Ń"
      header-bg-variant="dark"
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
      <b-button variant="success">Ĵ Ø ļ Ń</b-button>
      <br />
      <p class="mt-3">
        Don't you have an account? Please
        <router-link to="signup"> sign up </router-link>
      </p>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
<style lang=""></style>
