import repository from "../../api/repository"
export const namespaced = true
export const state = {
    blog: 'Blog Posts from store',
    blogAsset: {},
}
export const getters = {

}
export const mutations = {
    setAsset(state, payload) {
        state.blogAsset = payload
    }
}
export const actions = {
    async getPosts({ commit }, payload) {
        try {
            const { data } = await repository.getPosts(payload)
            // commit('setAsset', data);
            return data
        } catch (e) {
            throw e
        }

    },
    async getPost({ commit }, payload) {
        try {
            const { data } = await repository.getPost(payload)
            return data
        } catch (e) {
            throw e
        }

    },
}
