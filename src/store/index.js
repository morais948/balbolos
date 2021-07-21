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
          top: '<i style="font-size: 3rem; color: black;" id="map" class="far fa-map"><div id="mapa" style="display: none"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.3085301591746!2d-35.230890684633074!3d-5.812030658941373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2554f79cb2bb3%3A0x8c5e8b0e169c50b6!2sR.%20Santo%20Ap%C3%B3lo%2C%20221%20-%20Dix-Sept%20Rosado%2C%20Natal%20-%20RN%2C%2059054-130!5e0!3m2!1spt-BR!2sbr!4v1626899162262!5m2!1spt-BR!2sbr" style="width: 100%; height: 100%; border:0;" allowfullscreen="" loading="lazy"></iframe></div></i>',
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
