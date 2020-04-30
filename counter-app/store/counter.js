export const state = () => ({
  counter: 0
})

export const mutations = {
  countUp(state) {
    state.counter++
  },
  countReset(state) {
    state.counter = 0
  }
}
