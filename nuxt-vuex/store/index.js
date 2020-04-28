import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        message: 'Hello Vuex!'
      }
    },
    // mutations: {
    //   updateMessage(state) {
    //     state.message = 'Updated'
    //   }
    // }
    mutations: {
      updateMessage(state, payload) {
        state.message = payload
      }
    },
    actions: {
      updateMessageAction(context, payload) {
        context.commit('updateMessage', payload)
      }
    }
  })
}

export default createStore
