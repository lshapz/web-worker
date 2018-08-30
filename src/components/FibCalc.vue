<template>
  <div id="fibCalc">

    <p><label name="amount"></label><input name="amount" type="number" v-model.number="amount" />
    </p>
    <button @click="loadBigCount">Calculate Fibonacci Sequence For {{amount}}</button>

    <div id="results" v-if="countLoaded">
      <h2 >Fibonacci Sequence at positon {{amount}} <br />{{fibResult}}</h2>
      

      <details>
        <summary>See full sequence through {{amount}}</summary> 
          <li v-for="(item, index) in fibArray" :key="index"> {{item}}
          </li>
      </details>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'fibCalc',
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
#fibCalc {
  margin-top: 2%;
}


li {
  list-style-type: none;
}
</style>
