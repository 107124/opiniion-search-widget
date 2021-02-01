<template>
  <div id="app">
    <FrontEndChallenge msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import FrontEndChallenge from "./components/FrontendChallenge.vue";

export default {
  name: "App",
  components: {
    FrontEndChallenge,
  },
};
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);

html {
  background-color: #1ec5c3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1ec5c3;
  margin: 0px;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
