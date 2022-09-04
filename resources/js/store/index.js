import axios from 'axios';
import { createStore } from 'vuex'
import { useRouter } from 'vue-router'
// import sharedMutations from 'vuex-shared-mutations';
import repository from '../api/repository';
import * as artistModule from './modules/ArtistModule'

const router = useRouter()

export default createStore({
    namespaced: true,
    state() {
        return {
            user: null
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        verified(state) {
            if (state.user) return state.user.email_verified_at
            return null
        },
        id(state) {
            if (state.user) return state.user.id
            return null
        }
    },
    mutations: {

        setUser(state, payload) {
            console.log('set user', payload)
            state.user = payload;
        }

    },

    actions: {

        async login({ dispatch }, payload) {
            try {
                // await axios.get('/sanctum/csrf-cookie');
                await repository.createSession();

                // await axios.post('/api/login', payload).then((res) => {
                await repository.login(payload).then((res) => {
                    return dispatch('getUser');
                }).catch((err) => {
                    throw err.response
                });
                // const res = await axios.post('/api/login', payload);

                // if (res.status != 200) throw res;

                // if (res.data.status_code != 200) throw res.data.message;



            } catch (e) {
                throw e
            }

        },
        async register({ dispatch }, payload) {
            try {
                await repository.registration(payload).then((res) => {
                    return dispatch('login', { 'email': payload.email, 'password': payload.password })
                }).catch((err) => {
                    throw (err.response)
                })
            } catch (e) {
                throw (e)
            }
        },
        async logout({ commit }) {
            await axios.post('/api/logout').then((res) => {
                commit('setUser', null);
            }).catch((err) => {

            })

        },
        async getUser({ commit }) {
            await axios.get('/api/user').then((res) => {
                console.log('res data', res.data)
                commit('setUser', res.data);
            }).catch((err) => {
                throw err.response
            })
        },
        async profile({ commit }, payload) {
            await axios.patch('/api/profile', payload).then((res) => {
                commit('setUser', res.data.user);
            }).catch((err) => {
                throw err.response
            })
        },
        async password({ commit }, payload) {
            await axios.patch('/api/password', payload).then((res) => {

            }).catch((err) => {
                throw err.response
            })
        },

        async verifyResend({ dispatch }, payload) {
            let res = await axios.post('/api/verify-resend', payload)
            if (res.status != 200) throw res
            return res
        },
        async verifyEmail({ dispatch }, payload) {
            let res = await axios.post('/api/verify-email/' + payload.id + '/' + payload.hash)
            if (res.status != 200) throw res
            dispatch('getUser')
            return res

        },


    },
    // plugins: [sharedMutations({ predicate: ['setUser'] })],
    modules: { artistModule }


})
