import axios from 'axios';
import { createStore } from 'vuex'
import { useRouter } from 'vue-router'
// import sharedMutations from 'vuex-shared-mutations';
import repository from '../api/repository';
import * as artistModule from './modules/ArtistModule'
import * as charityModule from './modules/CharityModule'
import * as adminModule from './modules/AdminModule'

const router = useRouter()

export default createStore({
    namespaced: true,
    state() {
        return {
            user: null,
            loginError: null,
            organizations: null
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        authenticated(state) {
            return state.user ? true : false;
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
            // console.log('set user', payload)
            state.user = payload;
        },
        setOrganizations(state, payload){
            state.organizations = payload
        }

    },

    actions: {

        async login({ dispatch, state }, payload) {
            try {
                // await axios.get('/sanctum/csrf-cookie');
                await repository.createSession();

                // await axios.post('/api/login', payload).then((res) => {
                await repository.login(payload).then((res) => {
                    state.loginError = null
                    return dispatch('getUser');
                }).catch((error) => {
                    if (error.response) {
                        // Request made and server responded
                        const { message } = error.response.data
                        state.loginError = message
                        // console.log('message...', message);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                      } else if (error.request) {
                        // The request was made but no response was received
                        console.log(error.request);
                      } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                      }
                      return
                    // throw error.response
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
                // console.log('res data', res.data)
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
        async getOrganisations({ commit }) {
            try {
                const { data } = await repository.getOrganizations()
                // console.log(data)
                commit('setOrganizations', data);
                // return data
            } catch (e) {
                throw e
            }
    
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
    modules: { artistModule, charityModule, adminModule }


})
