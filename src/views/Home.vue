<template>
  <div class="home">
    <HelloWorld
      msg="Eai tia da ração! Matheus me enviou para te informar que teu site ficará aqui (em dev)"
      msg-op="espero que goste"
      emoji="🐱"
    />
  
  </div>
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
<style>
  HelloWorld{
    color: white;
  }
</style>