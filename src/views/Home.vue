<template>
  <div class="home">
    <HelloWorld
      data-aos="fade-up"
      msg="Eai tia da ração! Matheus me enviou para te informar que teu site ficará aqui (em dev)"
      msg-op="espero que goste"
      emoji="🐱"
    />
  
  </div>
  <h1 data-aos="fade-up" class="texto-fixo">
    Criado por Matheus Morais Dev fullStack ❤️
  </h1>
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
