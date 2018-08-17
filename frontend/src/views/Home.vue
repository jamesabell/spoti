<template>
  <div class="home">
    <div v-show="clientIsSignedIn">
      <h3>Someone's got a party going!</h3>
      <button >Join the Party</button>
      <router-link :to="{ name: 'user-home' }">User</router-link>
      
      <!-- Allow people to take over being the client? -->
    </div>

    <div v-show="!clientIsSignedIn">
      <div>
        <h3>It doesn't look like anyone has anything going on</h3>
        <h4>Start your own Spoti Stream, invite your friends, have a party.</h4>
        <router-link :to="{ name: 'client-login' }" tag="button">Start Something</router-link>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

export default {
  components: {},
  watch: {
    clientIsSignedIn() {
      if (this.clientIsSignedIn) {
        //Notify them or something
      }
    }
  },
  computed: {
    ...mapGetters({
      clientIsSignedIn: "client/isSignedIn"
    })
  }
};
</script>
