<template>
  <div class="container">
    <div>
      <!-- <p>{{ $store.state.message }}</p> -->
      <p>{{ $store.state.hello.message }}</p>
      <!-- <button @click="$store.commit('updateMessage')">Update</button> -->
      <!-- <button @click="$store.commit('updateMessage', 'WTF?!')">Update</button> -->
      <!-- <button @click="$store.dispatch('updateMessageAction')">Dispatch</button> -->
      <!-- <button
        @click="$store.dispatch('updateMessageAction', 'Goodな1日にしよう')"
      >
        Dispatch
      </button> -->
      <button
        @click="
          $store.dispatch('hello/updateMessageAction', 'Goodな1日にしよう')
        "
      >
        Dispatch
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
