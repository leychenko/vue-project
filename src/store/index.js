import { createStore } from 'vuex'
import chefsData from '@/store/module/chefsData.js'
import dishes from '@/store/module/dishes.js';
import auth from '@/store/module/auth'
import cart from '@/store/module/cart'
import users from '@/store/module/users'
import slides from '@/store/module/slides'


export default createStore({
    state: {
        loading: null,
        error: null,
    },
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        startLoading({ commit }) {
            commit('setLoading', true)
            commit('setError', null)
        },
        setError({ commit }, error) {
            commit('setError', error)
        },

        async generalApiOperation({ commit, dispatch }, { operation, successCallback, errorCallBack }) {
            dispatch('startLoading')
            try {
                const res = await operation()
                if (successCallback) successCallback(res)
                return res
            } catch (error) {
                commit('setError', error)
                if (errorCallBack) errorCallBack(error)
            } finally {
                commit('setLoading', false)
            }
        },
    },
    modules: {
        chefsData,
        auth,
        dishes,
        cart,
        users,
        slides,
    },
})
