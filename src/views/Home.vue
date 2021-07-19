<template>
  <header class="d-flex justify-content-center align-items-center">
    <p id="frase" class="p-4"></p>
  </header>
  <main :style="'margin-top:' + tamanhoMenu " class="container">
    <h1>teste home</h1>

  </main>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: "Home",
  data(){
    return {
      indice: 0,
      txt: 'VENHA CONHECER O MELHOR BOLO DA REGIÃO',
    }
  },
  components: {

  },
  methods: {
    digita() {
      if (this.indice < this.txt.length) {
        frase.innerHTML += this.txt.charAt(this.indice)
        this.indice++
        setTimeout(this.digita, this.gerarNumeroAleatorio(50, 200))
      }
    },
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  computed: mapState([
    'tamanhoMenu'
  ]),
  mounted(){
    this.digita()
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
  #frase{
    z-index: 10; 
    color: white; 
    font-size: 4rem;
    text-shadow: 0.1em 0.1em #333;
    font-weight: bold;
  }
  @media only screen and (max-width: 320px) {
    #frase {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 370px) {
    #frase {
      font-size: 2rem;
    }
  }
</style>