import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('users')
export default {
    namespaced: true,
    state: () => ({
        permissions: {},
        currentUser: {},
        role: null,
        error: null,
    }),
    getters: {
        userRole: (state) => state.role,
        hasError: (state) => state.error,
        userPermissions: (state) => state.permissions,
        getUserByEmail: (state) => (email) => state.users?.find((user) => user.email === email),
    },
    mutations: {
        setPermissions(state, permissions) {
            state.permissions = permissions
        },
        setUserRole(state, role) {
            state.role = role
        },
        setError(state, error) {
            state.error = error
            //  console.log('error: ', error)
        },
    },
    actions: {
        setError({ commit }, error) {
            commit('setError', error)
        },
        async loadUserById({ dispatch }, userId) {
            if (userId) {
                this.currentUser = await dispatch(
                    'generalApiOperation',
                    {
                        operation: () => collectionDB.getItemById(userId),
                    },
                    { root: true }
                )
                return this.currentUser
            }
        },
        loadUserRole({ commit }, userId) {
            collectionDB.getItemById(userId).then((role) => {
                commit('setUserRole', role)
            })
        },
        clearUserRole({ commit }) {
            commit('setUserRole', null)
        },
        async addUser({ dispatch }, userData) {
            this.currentUser = await dispatch(
                'generalApiOperation',
                {
                    operation: () => collectionDB.addItem(userData),
                },
                { root: true }
            )
        },
        async addUserWithCustomId({ dispatch }, { id, data }) {
            const userObj = await dispatch('loadUserById', id)
            // console.log("after loading", userObj)
            if (!userObj?.email) {
                this.currentUser = await dispatch(
                    'generalApiOperation',
                    {
                        operation: () => collectionDB.addItemWithCustomId(id, data),
                    },
                    { root: true }
                )
            }
        },
        loadUserPermissions({ commit, rootGetters }, userId) {
            userId ??= rootGetters['bar/someGetter'].getUser.uid
            collectionDB.getItemById(userId).then((permissions) => {
                commit('setPermissions', permissions)
            })
        },
        clearPermissions({ commit }) {
            commit('setPermissions', {})
        },
        async loadUserFavoriteDishes({ dispatch }, userId) {
            const userObj = await dispatch('loadUserById', userId)
            if (userObj?.favoriteDishes?.length) {
                dispatch('cart/setCurrentCart', userObj.favoriteDishes, { root: true })
            } else {
                dispatch('cart/setCurrentCart', [], { root: true })
            }
        },
        async addUserFavoriteDishes({ dispatch, commit }, { userId, dishId }) {
            try {
                const result = await dispatch(
                    'generalApiOperation',
                    {
                        operation: () => collectionDB.addItemToArray(userId, 'favoriteDishes', dishId),
                    },
                    { root: true }
                )
                if (result) {
                    await dispatch('loadUserFavoriteDishes', userId)
                }
            } catch (error) {
                commit('setError', error, { root: true })
            }
        },
        async removeUserFavoriteDish({ dispatch, commit }, { userId, dishId }) {
            try {
                const result = await dispatch(
                    'generalApiOperation',
                    {
                        operation: () => collectionDB.removeItemFromArray(userId, 'favoriteDishes', dishId),
                    },
                    { root: true }
                )
                if (result) {
                    await dispatch('loadUserFavoriteDishes', userId)
                }
            } catch (error) {
                commit('setError', error, { root: true })
            }
        },
    },
}
