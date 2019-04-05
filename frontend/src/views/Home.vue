<template>
  <div class="home">
    <div v-show="clientIsSignedIn">
      <h3 class="dat-header">
        <span class="base">Someone's got a</span>
        <span class="pop">party</span>
        <span class="base">going!</span>
      </h3>
      <router-link
        :to="{ name: 'user-home' }"
        @click="$router.push({ name: 'user-home'})"
        class="call-to-action"
      >
        Join
        <img src="../assets/logo.png" alt="spoti">
      </router-link>
    </div>

    <div v-show="!clientIsSignedIn">
      <div>
        <h3 class="dat-header base">It doesn't look like anyone is having any fun.</h3>
        <h4 class="dat-header base">
          Invite your friends, have a
          <span class="pop">party!</span>
        </h4>
        <router-link :to="{ name: 'client-login' }" class="call-to-action">
          Start <img src="../assets/logo.png" alt="spoti">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {},
  computed: {
    auth() {
      return this.$router.app.auth;
    },
    ...mapGetters({
      clientIsSignedIn: "client/isSignedIn"
    })
  }
};
</script>
