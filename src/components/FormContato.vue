<template>
    <div class="row mb-3 d-flex justify-content-center align-items-center flex-column flex-lg-row" style="font-size: 2rem">
        <div data-aos="fade-right" class="col-12 col-lg-6 mb-0 mb-3 mb-lg-0">
            <label for="nome" class="form-label">Nome</label>
            <input v-model="nome" type="text" class="form-control" id="nome" placeholder="Fabio Dantas">
        </div>
        <div data-aos="fade-left" class="col-12 col-lg-6">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="nome@exemplo.com">
        </div>
    </div>
    <div class="row mb-5" style="font-size: 2rem">
        <div data-aos="fade-up" class="col-12">
            <label for="texto" class="form-label">Texto Livre</label>
            <textarea v-model="texto" class="form-control" id="texto" rows="10"></textarea>
            <div class="d-flex justify-content-start">
                <button @click="enviar" class="btn btn-outline-secondary mt-2 fs-3" type="button">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FormContato",
    data(){
        return {
            nome: '',
            email: '',
            texto: '',
        }
    },
    methods: {
        enviar(){
            let token = localStorage.token
            let form = new FormData()
            let url = 'http://localhost:8000/api/v1/produto?categoria=bolos'

            form.append('nome', this.nome)
            form.append('email', this.email)
            form.append('texto', this.texto)
       
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
            
            this.axios.get(url, config)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    //console.log(err.response)//verificar pq ta vindo undefined
                })

        }
    },
    mounted() {
        
    },
}
</script>

<style>

</style>