import axios from "axios"
// import { setHeaderToken, removeHeaderToken } from '../'

// import { resolve } from "core-js/fn/promise"

export function setHeaderToken(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export function removeHeaderToken() {
    delete axios.defaults.headers.common['Authorization']
}

export default {
    state: {
        user: null,
        isLoggedIn: false
    },
    mutations: {
        set_user(state, data) {
            state.user = data
            state.isLoggedIn = true
        },
        reset_user(state) {
            state.user = null
            state.isLoggedIn = false
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        user(state) {
            return state.user
        }
    },
    actions: {
        login({
            dispatch,
            commit
        }, data) {
            return new Promise((resolve, reject) => {
                axios.post('api/login', data)
                    .then(response => {
                        const token = response.data.access_token
                        localStorage.setItem('token', token)
                        setHeaderToken(token)
                        dispatch('get_user')
                        resolve(response)
                    })
                    .catch(err => {
                        commit('reset_user')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        async get_user({
            commit
        }) {
            if (!localStorage.getItem('token')) {
                return
            }
            try {
                let response = await axios.get('api/user')
                commit('set_user', response.data.data)
            } catch (error) {
                commit('reset_user')
                removeHeaderToken()
                localStorage.removeItem('token')
                return error
            }
        }
    }
}