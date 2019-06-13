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
      // check if video with the same title and artist exists
      if (state.videos.filter(video => video.title === payload.title && video.artist === payload.artist).length > 0) {
        commit('setVideoExists', true)
      } else {
        commit('setVideoExists', false)
        // add player options
        payload.options = {
          muted: true,
          techOrder: ['youtube'],
          sources: [{
            type: 'video/youtube',
            src: payload.url
          }],
          autoplay: true,
          poster: './assets/images/logo.png'
        }
        commit('pushToVideoArray', payload)
      }
    }
  }
}
