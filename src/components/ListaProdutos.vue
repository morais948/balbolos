<template>
  <section :id="categoria" style="margin-top: 5%; padding-bottom: 15%" class="row">
    <h1 style="font-size: 4rem;"> {{ categoria }} </h1>
    <hr class="mt-2">

    <div class="col-12 d-flex justify-content-center justify-content-md-around align-items-center flex-wrap">
        <template v-for="(item, index) in listaProdutos.data" :key="index">
            <Card :animacao="(index % 2 == 0) ? 'fade-up' : 'fade-down'">
                <template v-slot:top>
                    <img :src="urlBase + '/' + item.imagem" class="card-img-top" alt="bolo"/>
                </template>
                <template v-slot:titulo>
                    {{ item.nome }}
                </template>
                <template v-slot:texto>
                    {{ item.descricao }}
                </template>
                <template v-slot:btn>
                    <a style="font-size: 1.4rem;" :href="item.linkCompra" class="btn btn-outline-secondary"> comprar </a>
                </template>
            </Card>
        </template>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/components/Card.vue';

export default {
    name: 'ListaProdutos',
    components: {
        Card
    },
    data(){
        return {
            urlBase: process.env.VUE_APP_URL_API_BASE,
        }
    },
    methods: {
        getImgUrl(url) {
            return require('../assets/' + url)
        },
    },
    computed: mapState([
        'listaProdutos'
    ]),
    props: [
        'nomeSecao',
        'categoria',
    ],
    mounted(){
        this.$store.dispatch('carregaProdutos', this.categoria)
    }
};
</script>

<style>
.btn-outline-secondary{
    border: 1px solid rgba(0,0,0,.125);
    transition: ease-in-out 200ms;
}
.btn-outline-secondary:hover{
    background-color: white;
    color: black;
    transform: scale(1.05);
}
.card{
    border: none;
}
</style>