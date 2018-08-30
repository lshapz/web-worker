<template>
  <div id="app">
    <h1>{{count}}</h1>
    <input type="number" v-model.number="amount" />
    <button @click="loadBigCount">Add Amount To The Count</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data(){
    return {
      amount: 0
    }
  },
  components: {
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    loadBigCount(){
      this.$store.dispatch('createBigCount', this.amount)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
