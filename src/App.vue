<template>
  <div id="app">
    <Box />
    <FibCalc />
  </div>
</template>

<script>

import Box from './components/Box.vue'
import FibCalc from './components/FibCalc.vue'
import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    FibCalc,
    Box
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

</style>
