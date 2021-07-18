<template>
    <main :style="'margin-top:' + tamanhoMenu " class="container">
      <h1>teste 2</h1>
      
    </main>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'aguarde',
  components: {
      HelloWorld
  },
  data(){
    return {

    }
  },
  methods: {

  },
  computed: mapState([
    'tamanhoMenu'
  ]),
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