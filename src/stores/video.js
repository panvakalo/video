export const videoStore = {
  namespaced: true,
  state: {
    videos: [],
    videoExists: false
  },
  mutations: {
    pushToVideoArray (state, video) {
      if (!state.videos.length) {
        video.url += '?autoplay=1'
      }
      state.videos.push(video)
    },
    setVideoExists (state, status) {
      state.videoExists = status
    }
  },
  actions: {
    addVideo ({ state, commit }, payload) {
      // check if video with the same title and artist exists
      if (state.videos.filter(video => video.title === payload.title && video.artist === payload.artist).length > 0) {
        commit('setVideoExists', true)
      } else {
        commit('setVideoExists', false)
        commit('pushToVideoArray', payload)
      }
    }
  }
}
