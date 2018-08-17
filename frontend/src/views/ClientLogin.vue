<template>
      <client-login-form />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ClientLoginForm from "../components/ClientLoginForm.vue";
import { mapGetters } from "vuex";

@Component({
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
})
export default class ClientLogin extends Vue {}
</script>
