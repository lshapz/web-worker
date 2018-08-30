<template>
  <div id="app">
    <FibCalc />
  </div>
</template>

<script>
import FibCalc from './components/FibCalc.vue'
import {mapState} from 'vuex'
export default {
  name: 'app',
  components: {
    FibCalc
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

li {
  list-style-type: none;
}
</style>
