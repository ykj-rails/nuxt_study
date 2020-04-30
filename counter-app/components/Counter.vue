<template>
  <section>
    <h2>{{ title }}</h2>
    counter: {{ $store.state.counter.counter }}
    <button @click="$store.commit('counter/countUp')">+1</button>
    <button @click="$store.commit('counter/countReset')">reset</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Counter'
    }
  }
}
</script>
