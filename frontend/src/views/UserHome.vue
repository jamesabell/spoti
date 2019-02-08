<template>
  <div>
    <div v-if="'item' in playerInfo" class="player-container">
      <div class="gradient gradient-feature"></div>
      <div class="gradient gradient-base"></div>
      <div class="player-content">
        <div class="album-cover">
          <img v-bind:src="albumCover" alt>
        </div>
        <div class="song">
          <h1>{{ playerInfo.item.name }}</h1>
          <ul>
            <li v-for="artist in playerInfo.item.artists" :key="artist.id">{{ artist.name}}</li>
          </ul>
        </div>
        <button @click="veto()">
          Vote to Skip
          <span class="count">({{ vetoCount }}/{{ userCount }})</span>
        </button>
      </div>
    </div>
    <p>Brought to you by</p>
    <img src="../assets/logo-white.png" alt="spoti" class="footer-logo">
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  watch: {
    clientIsSignedIn() {
      if (this.clientIsSignedIn === false) {
        // this.$router.push({ name: "home" });
      }
    }
  },
  mounted() {
    this.updateData();
  },
  methods: {
    ...mapActions({
      veto: "song/veto",
      updateData: "updateData"
    })
  },
  computed: {
    ...mapGetters({
      playerInfo: "song/playerInfo",
      clientIsSignedIn: "client/isSignedIn",
      vetoCount: "song/vetos",
      userCount: "user/count",
      albumCover: "song/albumUrl"
    })
  }
};
</script>
