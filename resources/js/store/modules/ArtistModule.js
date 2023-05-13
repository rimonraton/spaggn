import repository from "../../api/repository"
export const namespaced = true
export const state = {
    artist: 'Artist from store',
    artistAsset: {},
    artistProfileData: null
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
    async getArtistProfile({ commit, state }, payload) {
        try {
            const { data } = await repository.getArtistProfile()
            state.artistProfileData = data
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

    },
    async removeArtistAssets({ commit }, payload) {
        try {
            const { data } = await repository.removeArtistAssets(payload)
            console.log(data)
            commit('setAsset', data);
            // commit('setAsset', data);
            return data
        } catch (e) {
            throw e
        }

    },
    async updateArtistAssets({ commit }, payload) {
        try {
            const { data } = await repository.updateArtistAssets(payload)
            console.log(data)
            commit('setAsset', data);
            // commit('setAsset', data);
            return data
        } catch (e) {
            throw e
        }

    },
    async getArtists({ commit }, payload) {
        try {
            const { data } = await repository.getArtists(payload)
            // commit('setAsset', data);
            return data
        } catch (e) {
            throw e
        }

    },
    async getArtistDetails({ commit }, payload) {
        try {
            const { data } = await repository.getArtistDetails(payload)
            // commit('setAsset', data);
            return data
        } catch (e) {
            throw e
        }

    }
}