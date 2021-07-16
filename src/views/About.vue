<template>
    <div class="about">
        <HelloWorld class="mb-2" data-aos="fade-up" msg="Espere ansiosamente" emoji="💕"/>
       
        <h1 data-aos="fade-up" class="texto-fixo">Criado por Matheus Morais Dev fullStack ❤️</h1>
    </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'aguarde',
    components: {
        HelloWorld
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>