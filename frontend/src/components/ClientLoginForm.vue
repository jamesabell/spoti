<template>
  <div class="no-client-id">
      <p>After entering your client id and authorizing access, copy the code out of the URL and paste it in to the authorization token input.</p>
      <p>This will be automated when this can be put on a secure domain).</p>
        
      <div>We need your Spotify Client ID:  <input v-model="clientId"> <a :href="`https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${authScopes}&redirect_uri=http%3A%2F%2Flocalhost:8081%2Fclient-callback`">Authorize</a></div>
      
      <h4>Where's my Client ID?</h4>
      <p>
        You will need to log in and create a spotify app to get a client id. Follow this link and create one: <a target="" href="https://developer.spotify.com/dashboard/applications">Register an App</a>
      </p>
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
      clientId: "e9d5017163e647b7bde7fcd6f1ee9da4",
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
