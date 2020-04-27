import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        message: 'Hello Vuex!'
      }
    }
  })
}

export default createStore
