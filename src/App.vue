<template>
  <div id="app">

    <p><label name="amount"></label><input name="amount" type="number" v-model.number="amount" />
    </p>
    <button @click="loadBigCount">Calculate Fibonacci Sequence For {{amount}}</button>

    <div id="results" v-if="countLoaded">
      <h2 >Fibonacci Sequence at positon {{amount}} <br />{{fibResult}}</h2>
      

      <details>
        <summary>See full sequence through {{amount}}</summary> 
          <li v-for="(item, index) in fibArray" :key="index">{{item}}
        </li>
      </details>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'
export default {
  name: 'app',
  data(){
    return {
      amount: 0,
      countLoaded: false
    }
  },
  components: {
  },
  computed: {
    ...mapState(['fibResult', 'fibArray'])
  },
  methods: {
    loadBigCount(){
      console.log('amount', this.amount)
      this.$store.dispatch('findFib', this.amount)
    }
  },
  watch: {
    fibResult(data){
      this.countLoaded = true
    },
    amount(data, oldData){
      if (data !== oldData) {
        this.countLoaded = false
      }
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
li {
  list-style-type: none;
}
</style>
