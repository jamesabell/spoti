<template>
  <div class="no-client-id">
      <p>After entering your client id and authorizing access, copy the code out of the URL and paste it in to the authorization token input.</p>
      <p>This will be automated when this can be put on a secure domain).</p>
        
      <div>We need your Spotify Client ID:  <input v-model="clientId"> <a target='_blank' :href="`https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=user-modify-playback-state&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback`">Authorize</a></div>
      
      <h4>Where's my Client ID?</h4>
      <p>
        You will need to log in and create a spotify app to get a client id. Follow this link and create one: <a target="" href="https://developer.spotify.com/dashboard/applications">Register an App</a>
      </p>

      <div v-show="errorMsg !== ''">{{ errorMsg }}</div>
      <div>Authorization Token: <input v-model="authToken"> <button @click="authorizeToken(authToken)">LET'S GO</button></div>
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
      clientId: "",
      authToken: ""
    };
  },
  computed: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.no-client-id {
  // This shit is bourbon (being loaded in webpack scss-loader vue.config.js)
  @include margin(null auto);
}
</style>
