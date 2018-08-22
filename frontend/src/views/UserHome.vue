<template>
    <div>
      <div v-if="playerInfo.item !== undefined">
        <div class='song-name'>
          <h4> Song </h4>
          {{ playerInfo.item.name }}
        </div>
        <div class='artists'>
          <h4>Artists</h4>
          <ul>
            <li v-for="artist in playerInfo.item.artists" :key='artist.id' >
              {{ artist.name}}
            </li>
          </ul>
        </div>
        <button @click='veto()'>VETO ({{ vetoCount }}/{{ userCount }})</button>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  watch: {
    clientIsSignedIn() {
      if (this.clientIsSignedIn === false) {
        this.$router.push({ name: "home" });
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
      userCount: "user/count"
    })
  }
};
</script>
