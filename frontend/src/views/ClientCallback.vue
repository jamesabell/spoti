<template>
  <div class="callback">Authorizing Client... Please wait</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "callback",
  props: {
    authToken: String
  },
  mounted() {
    this.setClientAuthToken(this.authToken);
  },
  computed: {
    ...mapGetters({
      clientIsSignedIn: "client/isSignedIn"
    })
  },
  watch: {
    clientIsSignedIn() {
      if (this.clientIsSignedIn) {
        this.$router.push({ name: "user-home" });
      }
    }
  },
  methods: {
    ...mapActions({
      setClientAuthToken: "client/setAuthToken"
    })
  }
};
</script>
