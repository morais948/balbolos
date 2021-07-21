import { createStore } from 'vuex'
import { useWindowSize } from 'vue-window-size';

export default createStore({
  state: {
    larguraPagina: '',
    alturaPagina: '',
    tamanhoMenu: '',
    listaProdutos: '',
    informacoes: '',
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
    },
    carregaInformacoes(state, info){
      state.informacoes = info
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
    carregaInformacoes({ commit }){
      let info = [
        {
          bordaSim: 's',
          animacao: 'fade-up',
          top: '<i style="font-size: 3rem; color: black;" class="far fa-clock"></i>',
          titulo: '<b>Horario de funcionamento</b>',
          texto: '<i>Das 8h às 18h</i>'
        },
        {
          bordaSim: 's',
          animacao: 'fade-down',
          top: '<i style="font-size: 3rem; color: black;" class="fas fa-map-marker-alt"></i>',
          titulo: '<b>Localização</b>',
          texto: '<i>Rua São Martis N°10</i>'
        },
        {
          bordaSim: 's',
          animacao: 'fade-up',
          top: '<i style="font-size: 3rem; color: black;" class="fas fa-phone-square"></i>',
          titulo: '<b>Cell</b>',
          texto: '<i>(84)9 - 9703-1531</i>'
        },
      ]

      commit('carregaInformacoes', info)
    },
    carregaProdutos({ commit }){
      let produtos = [
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo de chocolate',
          categoria: 'bolos',
          preco: '20.50',
          descricao: 'bolo de chocolate delicioso',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Coxinha',
          categoria: 'salgados',
          preco: '3.50',
          descricao: 'salgado quentinho',
          linkCompra: '',
          linkImagem: 'imgs/salgado-teste.png'
        },
        {
          name: 'Pastel',
          categoria: 'salgados',
          preco: '3.50',
          descricao: 'salgado quentinho',
          linkCompra: '',
          linkImagem: 'imgs/salgado-teste.png'
        },
        {
          name: 'Pastel de Forno',
          categoria: 'salgados',
          preco: '2.50',
          descricao: 'salgado de forno quentinho',
          linkCompra: '',
          linkImagem: 'imgs/salgado-teste.png'
        },
        {
          name: 'Pão de queijo',
          categoria: 'salgados',
          preco: '25.50',
          descricao: 'pão de queijo delicioso',
          linkCompra: '',
          linkImagem: 'imgs/salgado-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        },
        {
          name: 'Bolo Branco',
          categoria: 'bolos',
          preco: '25.50',
          descricao: 'bolo branco feito massa belga',
          linkCompra: '',
          linkImagem: 'imgs/bolo-teste.png'
        }
      ]
      commit('carregaProdutos', produtos)
    }
  },
  modules: {
  }
})
