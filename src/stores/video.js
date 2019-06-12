export const videoStore = {
  namespaced: true,
  state: {
    videos: [],
    videoExists: false
  },
  mutations: {
    pushToVideoArray (state, video) {
      state.videos.push(video)
    },
    setVideoExists (state, status) {
      state.videoExists = status
    }
  },
  actions: {
    addVideo ({ state, commit }, payload) {
      if (state.videos.filter(video => video.title === payload.title && video.artist === payload.artist).length > 0) {
        commit('setVideoExists', true)
      } else {
        commit('setVideoExists', false)
        commit('pushToVideoArray', payload)
      }
    }
  }
}
