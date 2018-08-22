<template>
      <client-login-form />
</template>

<script lang="ts">
import ClientLoginForm from "../components/ClientLoginForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ClientLoginForm
  },
  watch: {
    clientIsSignedIn() {
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapGetters({
      clientIsSignedIn: "client/isSignedIn"
    })
  }
};
</script>
