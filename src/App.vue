<template>
      <div id="menu" class="row position-fixed p-0 m-0" style="background-color: rgba(0, 0, 0, .5); width: 100%">
        <div data-aos="fade-right" class="col-2 d-none d-lg-block d-flex justify-content-center align-items-center position-relative">
          <router-link style="text-decoration: none;" to="/">
            <img style="max-height: 200px; border: solid 1px white" class="img-fluid rounded-circle position-absolute top-100 start-100 translate-middle" src="./assets/imgs/logo.gif" alt="logo">
          </router-link>
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
                            <li class="nav-item mb-2">
                                <router-link style="margin-left: 15px; text-decoration: none;" to="/">Home</router-link>
                            </li>
                            <li class="nav-item mb-2">
                                <router-link style="margin-left: 15px; text-decoration: none;" to="/aguarde">Aguarde</router-link>
                            </li>
                        </ul>
                        <form :style="this.larguraPagina >= 992 ? 'width: 30%' : 'width: 100%'" class="d-flex justify-content-around align-items-center mt-2">
                    
                        <div data-aos="fade-right" class="input-group d-flex justify-content-around align-items-center">
                            <span class="input-group-text" style="display: block" id="basic-addon1"><i class="fas fa-search"></i></span>
                            <input type="search" class="form-control me-2" placeholder="o que você procura?" aria-label="Search" aria-describedby="basic-addon1">
                        </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <router-view />
</template>
<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {

    }
  },
  methods: {
   
  },
  computed: mapState([
    'larguraPagina'
  ]),
  mounted(){
    this.$store.dispatch('carregaLarguraAlturaPagina')
    this.$store.dispatch('carregaMargem')
  }
}
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  overflow-x: hidden;
  scroll-behavior: smooth;
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
</style>
