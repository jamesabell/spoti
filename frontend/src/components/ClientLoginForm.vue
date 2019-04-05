<template>
  <div class="wait">
    <div class="content">
      <h1>Hang on...</h1>
      <p>After entering and authorizing access of your <b>Client ID</b>, copy the code out of the URL and paste it in to the authorization token input.</p>
      <small>(This will be automated when this can be put on a secure domain)</small>

      <div class="authorize">
        <div class="section client">
          <h2>Client ID</h2>
          <input v-model="clientId">
          <a class="shadow"
            :href="`https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${authScopes}&redirect_uri=http%3A%2F%2Flocalhost:8080%2Fclient-callback`"
          >Authorize</a>
        </div>
        <div class="section secret">
          <h2>Secret</h2>
          <input v-model="secret">
        </div>
      </div>

      <h3>Help! Where's my <b>Client ID</b>?</h3>
      <p>You'll need to sign in to Spotify and create an app to get a <b>Client ID</b>.<br/>
      Follow this link and create one:<br/>
        <a
          target="_blank" rel="noopener noreferrer"
          href="https://developer.spotify.com/dashboard/applications"
        >Get my Client ID</a></p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "no-client-id",
  props: {
    msg: String
  },
  data() {
    return {
      true: false,
      clientId: "55e96abf36b541fdb7dc3ee3694c6b57",
      secret: "13c76690d7224206937acdcb55675591",
      authScopes: [
        "user-read-currently-playing",
        "user-modify-playback-state",
        "user-read-playback-state",
        "playlist-read-collaborative",
        "playlist-modify-public",
        "playlist-read-private",
        "playlist-modify-private"
      ]
    };
  },
  computed: {
    authScopeString() {
      return this.authScopes.join(" ");
    },
    ...mapGetters({
      errorMsg: "client/errorMessage"
    })
  },
  methods: {
    ...mapActions({
      authorizeToken: "client/authorizeToken"
    })
  }
};
</script>

<style scoped lang='scss'>
.no-client-id {
  // This shit is bourbon (being loaded in webpack scss-loader vue.config.js)
  @include margin(null auto);
}
</style>
