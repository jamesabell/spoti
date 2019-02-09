<template>
    <div>
        <div v-if="playerInfo.item" class="player-container">
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
                    <span class="count">({{ vetoUserIds.length }}/{{ userCount }})</span>
                </button>
            </div>
        </div>
        <div v-if="!playerInfo.item">Client needs to start the damn music.</div>
        <p>Brought to you by</p>
        <img src="../assets/logo-white.png" alt="spoti" class="footer-logo">
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";

    export default {
        watch: {
            vetoUserIds(newValue, oldValue) {
                const newUserIds = newValue.filter((newVal) => !oldValue.includes(newVal));
                const newUsers = this.users.filter((user) => newUserIds.includes(user.sub));
                if (newUsers.length) {
                    newUsers.forEach(user => this.$toasted.show(`Song was vetoed by ${user.name}`, {duration: 2000}))
                }
            },
            users() {
                // User logged in out
            },
            clientIsSignedIn() {
                if (this.clientIsSignedIn === false) {
                    this.$router.push({name: "home"});
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
                vetoUserIds: "song/vetoUserIds",
                users: "user/list",
                userCount: "user/count",
                albumCover: "song/albumUrl"
            })
        }
    };
</script>
