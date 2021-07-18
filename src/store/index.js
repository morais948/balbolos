import { createStore } from 'vuex'
import { useWindowSize } from 'vue-window-size';

export default createStore({
  state: {
    larguraPagina: '',
    alturaPagina: '',
    tamanhoMenu: '',
  },
  mutations: {
    carregaLarguraAlturaPAgina(state, larguraAltura){
      state.larguraPagina = larguraAltura.width
      state.alturaPagina = larguraAltura.height
    },
    carregaMargem(state, tamanhoMenu){
      state.tamanhoMenu = tamanhoMenu
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
    }
  },
  modules: {
  }
})
