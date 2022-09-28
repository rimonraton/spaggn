import repository from "../../api/repository"
export const namespaced = true
export const state = {
    artist: 'Artist from store',
    artistAsset: {}
}
export const getters = {

}
export const mutations = {
    setAsset(state, payload) {
        state.artistAsset = payload
    }
}
export const actions = {
    async createArtistProfile({ commit }, payload) {
        try {
            const { data } = await repository.createArtistProfile(payload)
            // console.log(data)
        } catch (e) {
            throw e
        }

    },
    async createArtistAsset({ commit }, payload) {
        try {
            const { data } = await repository.createArtistAsset(payload)
            // console.log('data..', data)
            commit('setAsset', data);
        } catch (e) {
            throw e
        }

    },
    async getArtistProfile({ commit }, payload) {
        try {
            const { data } = await repository.getArtistProfile()
            // console.log(data)
            return data
        } catch (e) {
            throw e
        }

    },
    async getArtistAssets({ commit }, payload) {
        try {
            const { data } = await repository.getArtistAssets(payload)
            // console.log(data)
            commit('setAsset', data);
            return data
        } catch (e) {
            throw e
        }

    },
    async imageRemove({ commit }, payload) {
        try {
            const { data } = await repository.imageRemove(payload)
            console.log(data)
            // commit('setAsset', data);
            return data
        } catch (e) {
            throw e
        }

    }
}