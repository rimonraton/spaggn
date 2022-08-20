import repository from "../../api/repository"
export const namespaced = true
export const state = {
    artist: 'Artist from store'
}
export const getters = {

}
export const mutations = {
}
export const actions = {
    async createArtistProfile({ commit }, payload) {
        try {
            const {data} = await repository.createArtistProfile(payload)
            console.log(data)
        } catch (e) {
            throw e
        }

    },
}