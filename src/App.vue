<template>
      <div id="menu" class="row position-fixed p-0 m-0" style="background-color: rgba(0, 0, 0, .5); width: 100%; font-size: 1.5rem">
        <div data-aos="fade-right" class="col-2 d-none d-lg-block d-flex justify-content-center align-items-center position-relative">
          <a style="text-decoration: none;" @click.prevent="carregaSecao('home')" href>
            <img style="max-height: 200px; border: solid 1px white" class="img-fluid rounded-circle position-absolute top-100 start-100 translate-middle" src="./assets/imgs/logo.gif" alt="logo">
          </a>
        </div>
        <div class="col-12 col-lg-10 p-2 d-flex justify-content-lg-around align-items-center">
            <nav id="nav" style="width: 100%" class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button
                    class="navbar-toggler"
                    type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse d-lg-flex justify-content-lg-around align-items-lg-center" id="navbarSupportedContent">
                        <ul data-aos="fade-left" class="navbar-nav">
                            <li class="nav-item mb-2 d-lg-none">
                                <a style="margin-left: 15px; margin-right: 15px; text-decoration: none;" href @click.prevent="carregaSecao('home')">Inicio</a>
                            </li>
                            <li class="nav-item mb-2">
                                <a id="linkBolos" style="margin-left: 15px; margin-right: 15px; text-decoration: none;"  href @click.prevent="carregaSecao('bolos')">Bolos</a>
                                <div class="sublinhado mt-1"></div>
                            </li>
                            <li class="nav-item mb-2">
                                <a id="linkSalgados" style="margin-left: 15px; margin-right: 15px; text-decoration: none;"  href @click.prevent="carregaSecao('salgados')">Salgados</a>
                                <div class="sublinhado mt-1"></div>
                            </li>
                            <li class="nav-item mb-2">
                                <a id="linkInformacoes" style="margin-left: 15px; margin-right: 15px; text-decoration: none;"  href @click.prevent="carregaSecao('info')">Informações</a>
                                <div class="sublinhado mt-1"></div>
                            </li>
                             <li class="nav-item mb-2">
                                <a id="linkContato" style="margin-left: 15px; margin-right: 15px; text-decoration: none;"  href @click.prevent="carregaSecao('contato')">Contato</a>
                                <div class="sublinhado mt-1"></div>
                            </li>
                            <!--
                            <li class="nav-item mb-2">
                                <router-link style="margin-left: 15px; margin-right: 15px; text-decoration: none;" to="/aguarde">Aguarde</router-link>
                            </li>
                            -->
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <router-view />
    <WhatsApp />
</template>
<script>

import { mapState } from 'vuex'
import WhatsApp from "@/components/Whats.vue"
import utils from './utils/utils.js'

export default {
  data(){
    return {
        inicioSecao: false,
    }
  },
  methods: {
    carregaSecao(id){
        this.inicioSecao = this.larguraPagina < 991 ? true : false
        document.getElementById(id).scrollIntoView(this.inicioSecao)
    },
  },
  computed: mapState([
    'larguraPagina',
  ]),
  components: {
    WhatsApp,
  },
  mounted(){
    this.$store.dispatch('carregaLarguraAlturaPagina')
    this.$store.dispatch('carregaMargem')
    this.$store.dispatch('carregaProdutos')
    this.$store.dispatch('carregaInformacoes')

    if(!localStorage.token){
      utils.login()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Bad Script', cursive;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
#menu{
  z-index: 15; 
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  /*color: #a19d96;*/
  color: #FBE5BE;
}
.navbar-nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.texto-fixo {
  font-size: 1rem;
  position: fixed;
  top: 80%;
  opacity: 0.8 !important;
  right: 5%;
  background-color: gray;
  color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 10px 10px 8px #888888;
  border: solid 1px goldenrod;
  margin-left: 5%;
}
.img-cat {
  border-radius: 10%;
  border: 1px solid goldenrod;
}
.navbar-toggler{
    color: white !important;
    font-size: 2rem;
}
.sublinhado{
    height: 2px; 
    display: none;
    animation-name: example;
    animation-duration: 1s;
    width: 100%;
    background-color: white;
}
.instagram{
  color: #c62d98;
  transition: ease-in-out 200ms;
}
.instagram:hover{
  color: #c62d98;
  transform: scale(1.10);
  cursor: pointer;
}
.footer{
  overflow: hidden; 
  font-family: Arial, Helvetica, sans-serif; 
  font-size: 1.2rem; 
  color: white;
  background-image: linear-gradient(to right, #FCE8C3,#947058);
}
@keyframes example {
  from{width: 0%;}
  to{width: 100%;}
}
</style>
