<template>
    <a id="whats" target="_blank" href="https://api.whatsapp.com/send?phone=5584997031531">
        <i class="fab fa-whatsapp-square"></i>
    </a>
</template>

<script>
export default {

}
</script>

<style>
    #whats{
        font-size: 4rem;
        color: #056162;
        position: fixed;
        right: 5%;
        bottom: 5%;
    }
    #whats{
        transition: ease-in-out 1s;
    }
    #whats i:hover{
        transform: scale(1.10);
    }
    @media only screen and (max-width: 400px) {
        #whats {
            font-size: 3rem;
        }
    }
</style>