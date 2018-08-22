<template>
  <div class="callback">Authenticating</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "callback",
  mounted() {
    this.$auth.handleAuthentication().then(() => {
      this.loggedIn();
      this.$router.push({ name: "home" });
    });
  },
  methods: {
    ...mapActions({
      loggedIn: "user/loggedIn"
    })
  }
};
</script>
