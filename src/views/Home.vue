<template>
  <div class="home">
    <HelloWorld
      data-aos="fade-up"
      msg="Eai tia da ração! Matheus me enviou para te informar que teu site ficará aqui"
      msg-op="espero que goste"
      emoji="🐱"
    />
    <img
      height="400"
      width="400"
      class="img-fluid img-cat mb-2 rounded"
      data-aos="fade-down"
      alt="simba um gatinho simpatico"
      src="../assets/imgs/simba.jpg"
    />
  </div>
  <h1 data-aos="fade-up" class="texto-fixo">Criado por Matheus Morais Dev fullStack ❤️</h1>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
