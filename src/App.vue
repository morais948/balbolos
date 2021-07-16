<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/aguarde">Aguarde</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: 'Lato', sans-serif;;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: goldenrod;
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
.img-cat{
    border-radius: 10%;
    border: 1px solid goldenrod;
}
</style>
