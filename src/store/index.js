import { createStore } from 'vuex'
import { useWindowSize } from 'vue-window-size';

export default createStore({
  state: {
    larguraPagina: '',
    alturaPagina: '',
    tamanhoMenu: '',
    listaProdutos: '',
  },
  mutations: {
    carregaLarguraAlturaPAgina(state, larguraAltura){
      state.larguraPagina = larguraAltura.width
      state.alturaPagina = larguraAltura.height
    },
    carregaMargem(state, tamanhoMenu){
      state.tamanhoMenu = tamanhoMenu
    },
    carregaProdutos(state, produtos){
      state.listaProdutos = produtos
    }
  },
  actions: {
    carregaLarguraAlturaPagina({ commit }){
      const { width, height } = useWindowSize();
      let larguraAltura = {
        width,
        height
      }
      commit('carregaLarguraAlturaPAgina', larguraAltura)
    },
    carregaMargem({ commit }){
      let tamanhoMenu = menu.offsetHeight + 'px'
      commit('carregaMargem', tamanhoMenu)
    },
    carregaProdutos({ commit }){
      let produtos = [
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo de chocolate',
          categoria: 'bolos',
          preco: '20.50',
          descricao: 'bolo de chocolate delicioso',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Coxinha',
          categoria: 'salgados',
          preco: '3.50',
          descricao: 'salgado quentinho',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Pastel',
          categoria: 'salgados',
          preco: '3.50',
          descricao: 'salgado quentinho',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Pastel de Forno',
          categoria: 'salgados',
          preco: '2.50',
          descricao: 'salgado de forno quentinho',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Pão de queijo',
          categoria: 'salgados',
          preco: '25.50',
          descricao: 'pão de queijo delicioso',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.jpg'
        }
      ]
      commit('carregaProdutos', produtos)
    }
  },
  modules: {
  }
})
