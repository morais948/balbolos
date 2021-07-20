<template>
  <section id="bolos" style="margin-top: 5%" class="row p-2">
    <h1 style="font-size: 3rem; border: 3px double black"> {{ categoria }} </h1>

    <div class="col-12 d-flex justify-content-center justify-content-md-around align-items-center flex-wrap">
        
        <template v-for="(item, index) in lista" :key="index" >
            <div class="card mt-2 mb-2" style="width: 18rem">
                <img
                    :src="getImgUrl(item.linkImagem)"
                    class="card-img-top"
                    alt="bolo"/>

                <div class="card-body">
                <h5 class="card-title"> {{ item.name }} </h5>
                <p class="card-text">
                    {{ item.descricao }}
                </p>
                <a :href="item.linkCompra" class="btn btn-primary"> comprar </a>
                </div>
            </div>
        </template>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ListaProdutos',
    data(){
        return {
            lista: ''
        }
    },
    methods: {
        getImgUrl(url) {
            return require('../assets/' + url)
        }
    },
    computed: mapState([
        'listaProdutos'
    ]),
    props: [
        'categoria',
        'quantidade'
    ],
    mounted(){
        this.lista = this.listaProdutos.filter(element => element.categoria === this.categoria).slice(0, this.quantidade)
    }
};
</script>

<style>
</style>