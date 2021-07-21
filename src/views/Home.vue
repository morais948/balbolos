<template>
  <header id="home" class="d-flex justify-content-center align-items-center">
    <p id="frase" class="p-4"></p>
  </header>
  <main class="container">
    <!--codificar fancybox-->
    <ListaProdutos nome-secao="bolos" categoria="bolos" quantidade=3 />
    <ListaProdutos nome-secao="salgados" categoria="salgados" quantidade=3 />

    <section id="info" class="row d-flex flex-wrap p-5" style="margin-top: 5%">
      <h1 style="font-size: 4rem;"> Informações </h1>
      <hr class="mt-2">
      <div class="col-12 d-none d-lg-flex justify-content-center justify-content-md-around align-items-center flex-wrap">
        <template v-for="(item, index) in informacoes" :key="index">
       
          <Card :id="index === 0 ? 'horario' : index === 2 ? 'cell' : 'paiDoMapa' " :animacao="item.animacao" bordaSim="s">
            <template v-slot:top>
              <div v-html="item.top"></div>
            </template>
            <template v-slot:titulo>
              <div v-html="item.titulo"></div>
            </template>
            <template v-slot:texto>
              <div v-html="item.texto"></div>
            </template>
          </Card>
      
        </template>
      </div>
      <div class="col-12 d-lg-none d-flex flex-column align-items-center">
        <template v-for="(item, index) in informacoes" :key="index">
          <Card :data-bs-toggle="index === 1 ? 'modal' : ''" :data-bs-target="index === 1 ? '#mapaMobile' : ''" :animacao="item.animacao" bordaSim="s">
            <template v-slot:top>
              <div v-html="item.top"></div>
            </template>
            <template v-slot:titulo>
              <div v-html="item.titulo"></div>
            </template>
            <template v-slot:texto>
              <div v-html="item.texto"></div>
            </template>
          </Card>
        </template>
      </div>

  

      <!-- Modal Mobile -->
      <div class="modal fade" id="mapaMobile" tabindex="-1" aria-labelledby="mapaMobile" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3085301591746!2d-35.230890684633074!3d-5.812030658941373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2554f79cb2bb3%3A0x8c5e8b0e169c50b6!2sR.%20Santo%20Ap%C3%B3lo%2C%20221%20-%20Dix-Sept%20Rosado%2C%20Natal%20-%20RN%2C%2059054-130!5e0!3m2!1spt-BR!2sbr!4v1626899162262!5m2!1spt-BR!2sbr" height="500" style="width: 100%; border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <!-- Fim Modal Mobile -->
    </section>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
        <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
    <p>
      What is Lorem Ipsum?
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import ListaProdutos from '@/components/ListaProdutos.vue';
import Card from '@/components/Card.vue';

export default {
  name: "Home",
  data(){
    return {
      indice: 0,
      txt: 'VENHA CONHECER O MELHOR BOLO DA REGIÃO',
    }
  },
  components: {
    ListaProdutos,
    Card,
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
    },
    getImgUrl(url) {
        return require('../assets/' + url)
    },
    verificaElemento(idSecao, idLink) {
      document.addEventListener('scroll', () => {
        let param = document.getElementById(idSecao).getBoundingClientRect()
        const div = document.getElementById(idLink).parentElement.querySelector('div')
        
        if(param.top < param.height && param.top > 0 && this.larguraPagina > 991){
          div.style.display = 'block'
        }else{
          div.style.display = 'none'
        }
      })
    },
    animateMap(){
      let map = $("#map")
      map.mouseenter(function(){
        $('#map').animate({left: '10px'}, 100)
        $('#map').animate({left: '-10px'}, 100)
        $('#map').animate({left: '10px'}, 100)
        $('#map').animate({left: '-10px'}, 100)
        $('#map').animate({left: '0px'}, 100)

        $("#horario").css({
          display: 'none'
        })
        $("#cell").css({
          display: 'none'
        })
        $("#paiDoMapa").css({

          width: '200rem',
        })
        $("#mapa").animate({
          height: 'toggle'
        })
      })
      map.mouseleave(function(){
        $("#mapa").animate({
          height: 'toggle'
        })
        setTimeout(() => {
          $("#horario").css({
            display: 'flex'
          })
          $("#cell").css({
            display: 'flex'
          })
          $("#paiDoMapa").css({
    
            width: '18rem',
          })
        }, 500)
      })
      //div.animate({height: '300px', opacity: '0.4'}, "slow");
    },
    getImgUrl(url) {  
      return require('../assets/' + url)
    },
  },
  computed: mapState([
    'tamanhoMenu',
    'larguraPagina',
    'informacoes'
  ]),
  mounted(){
    this.digita()
    this.verificaElemento('bolos', 'linkBolos')
    this.verificaElemento('salgados', 'linkSalgados')
    this.verificaElemento('info', 'linkInformacoes')
    this.animateMap()
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
  #map{
    cursor: pointer;
    position: relative;
  }
  #mapa{
    height: 400px;
    width: 800px;
    box-shadow: 1px 1px 4px gray;
    display: none;
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
  @media only screen and (max-width: 991px) {
    #frase {
      font-size: 2rem;
    }
  }
</style>