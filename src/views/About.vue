<template>
    <div class="about">
        <HelloWorld class="mb-2" msg="Espere ansiosamente" emoji="💕"/>
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