<template>
  <main :style="'margin-top:' + tamanhoMenu " class="container">
    <h1>teste home</h1>
    <br>
    <br>
        <br>
    <br>
        <br>
    <br>
        <br>
    <br>
    <p>
      {{  }}
    </p>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from 'vuex'

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: mapState([
    'tamanhoMenu'
  ])
};
</script>
<style>
  HelloWorld{
    color: white;
  }
  header {
    background-image: url("../assets/imgs/bg-top.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    height: 100vh; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    color: black;
  }
</style>