import Vue from 'vue'
import Vuex from 'vuex'
import worker from 'workerize-loader!./WebWorker'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		fibResult: 0,
		fibArray: [0]
	},
	mutations: {
		returnFib(state, payload){
			state.fibResult = payload
		},
		returnFibArray(state, payload){
			state.fibArray = payload
		}
	},
	actions: {
		findFib: async function(context, payload){
			let instance = worker()	
			let result = await instance.fibonacci(payload)
			context.commit('returnFib', result[0])
			context.commit('returnFibArray', result[1])
		}
	}
})
