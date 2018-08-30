<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  mounted() {
    this.updateUserLoggedIn();
    this.updateData();
    this.interval = setInterval(
      function() {
        this.updateData();
      }.bind(this),
      1000
    );
  },
  methods: {
    ...mapActions({
      updateUserLoggedIn: "user/loggedIn",
      updateData: "updateData"
    })
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
