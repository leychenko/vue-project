import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('cartListData')

export default {
    namespaced: true,
    state: () => ({
        currentCart: [],
    }),
    getters: {
        getCurrentCartList: (state) => state.currentCart,
        getFavoriteListCompleted: (state, getters, rootState, rootGetters) => {
            if (state.currentCart.length) {
                let orderDishes = []
                state.currentCart.forEach((id) => orderDishes.push(rootGetters['dishes/getDishesById'](id)))
                console.log(orderDishes)
                return orderDishes
            } else return []
        },
    },
    mutations: {
        setCurrentCart(state, itemsList) {
            state.currentCart = itemsList
        },
        setItemsList(state, itemsList) {
            state.cartList = itemsList
        },
    },
    actions: {
        setCurrentCart({ commit }, itemsList) {
            commit('setCurrentCart', itemsList)
        },
        loadCartList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setItemsList', list)
                    commit('setCurrentCart', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        loadUserList({ commit }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .loadItemsList()
                .then((list) => {
                    commit('setCurrentCart', list)
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        addItemToCartList({ commit, dispatch }, { id, arrayProperty, value }) {
            commit('setError', null)
            commit('setLoading', true)
            collectionDB
                .addItemToArray({ id, arrayProperty, value })
                .then(() => {
                    console.log({ id, arrayProperty, value })
                    dispatch('loadUserList')
                })
                .catch((error) => {
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        },
        toggleIsFavorite({ dispatch, getters }, { userId, dishId }) {
            const isIncludedInFavorList = getters.getCurrentCartList.find((id) => id == dishId)
            if (!isIncludedInFavorList) {
                dispatch('users/addUserFavoriteDishes', { userId, dishId }, { root: true })
            }
        },
    },
}
