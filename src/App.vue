<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/UI/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.container {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
