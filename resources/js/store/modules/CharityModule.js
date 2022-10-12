import repository from "../../api/repository"
export const namespaced = true
export const state = {
  
}
export const getters = {

}
export const mutations = {
    
}
export const actions = {
    async createCharityProfile({ commit }, payload) {
        try {
            const { data } = await repository.createCharityProfile(payload)
            // console.log(data)
            return data
        } catch (e) {
            throw e
        }

    },
    async getCharityProfile({ commit }, payload) {
        try {
            const { data } = await repository.getCharityProfile()
            console.log(data)
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