import axios from 'axios'

function login() {
    const data = new FormData()
    data.append('email', process.env.VUE_APP_EMAIL)
    data.append('password', process.env.VUE_APP_PASSWORD)

    let config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    axios.post(`${process.env.VUE_APP_URL_API}/login`, data, config).then(
        resposta => {
          localStorage.token = resposta.data.token
          console.log('fiz o login')
        }
    ).catch(err => {
        console.log(err)
    })
}

function refresh(request) {

    let config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token
        }
    }
    let url = `${process.env.VUE_APP_URL_API}/refresh`
    /*
    axios.post(url, {}, config)
        .then(res => {
            localStorage.token = res.data.token
            console.log('fiz o refresh')
        }).catch(err => {
            console.log(err.response)
        })
    */
    
}

export default {
    login,
    refresh
}