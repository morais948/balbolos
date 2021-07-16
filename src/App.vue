<template>
  <header>
    <div class="row" style="max-height: 500px;">
        <div class="col-2 d-none d-lg-block p-4">
            <img style="border-radius: 5%; margin-right: 5%" class="img-fluid rounded-circle" src="./assets/imgs/logo.png" alt="">
        </div>
        <div class="col-10 col-md-12 p-2 d-flex justify-content-lg-around align-items-center">
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
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link to="/">Home</router-link> |
                            </li>
                            <li class="nav-item">
                                <router-link to="/aguarde">Aguarde</router-link>
                            </li>
                        </ul>
                        <form class="d-flex">
                    
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                            <input type="search" class="form-control me-2" placeholder="o que você procura?" aria-label="Search" aria-describedby="basic-addon1">
                        </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <router-view />
  </header>

</template>

<style>
header {
  background-image: url("./assets/imgs/bg-top.jpg"); /* The image used */
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 100vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
#app {
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: yellow;
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
