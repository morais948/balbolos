<template>
  <header>
  </header>
  <main :style="'margin-top:' + tamanhoMenu " class="container">
    <h1>teste home</h1>
    <button @click="this.digita()">click</button>
    <p id="frase">

    </p>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from 'vuex'

export default {
  name: "Home",
  data(){
    return {
      indice: 0,
      txt: 'MATHEUS MORAIS VIEIRA DUARTE',
      velocidade: 50 //milissegundos
    }
  },
  components: {
    HelloWorld,
  },
  methods: {
    digita() {
      if (this.indice < this.txt.length) {
        frase.innerHTML += this.txt.charAt(this.indice)
        this.indice++
        setTimeout(this.digita, this.velocidade)
      }
    }
  },
  computed: mapState([
    'tamanhoMenu'
  ]),
  updated(){
    
  }
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