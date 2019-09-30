<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <NavBar />
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
    <Blogs />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar";
import AllFriends from "./components/AllFriends";
import OnlineFriends from "./components/OnlineFriends";
import Blogs from "./Blogs";
import RouterView from "./router/index";

export default {
  name: "app",
  components: {
    HelloWorld,
    NavBar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data() {
    return {
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Toad", online: true },
        { name: "Bowser", online: false }
      ]
    };
  },
  methods: {
    deleteFriend(payload) {
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
