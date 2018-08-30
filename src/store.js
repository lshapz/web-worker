import Vue from 'vue'
import Vuex from 'vuex'
import worker from 'workerize-loader!./WebWorker'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		setCount(state, payload){
			state.count += payload
		}
	},
	actions: {
		createBigCount: async function(context, payload){
			// context.commit('setCount', payload)
			let instance = worker()	
			let newCount = await instance.expensive(payload)
			context.commit('setCount', newCount)
		}
	}
})
