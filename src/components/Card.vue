<template>
    <div class="card mt-2 mb-2" :class="{ 'borda' : this.borda }" :data-aos="animacao" style="width: 18rem">
        <slot name="top"></slot>

        <div class="card-body" style="font-size: 1.4rem">
            <h5 class="card-title">
                <slot name="titulo"></slot>
            </h5>
            <p class="card-text">
                <slot name="texto"></slot>
            </p>
 
            <slot name="btn"></slot>      
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: [
        'animacao',
        'bordaSim'
    ],
    data(){
        return {
            borda: this.bordaSim === "s" ? true : false
        }
    },
    mounted(){
    }
}
</script>

<style>
    .borda{
        border: 1px solid rgba(0,0,0,.125) !important;
        padding: 2%;
    }
</style>