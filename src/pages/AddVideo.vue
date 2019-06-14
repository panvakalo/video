<template>
  <layout-default>
    <div class="wrapper pt-xl">
      <form class="videoForm" @submit.prevent="add">
        <input
          v-model="videoForm.artist"
          type="text"
          name="artist"
          required
          class="xs12 text-color__black"
          placeholder="Artist"
        >
        <input
          v-model="videoForm.title"
          type="text"
          name="title"
          required
          class="xs12 text-color__black"
          placeholder="Title"
        >
        <input
          v-model="videoForm.url"
          type="text"
          name="url"
          required
          class="xs12 text-color__black"
          placeholder="Video url"
        >
        <button
          type="submit"
        >
          Add Video
        </button>
        <div
          v-if="videoExists"
          class="text__red mt-m"
        >
          A video with this artist and this title already exists!
        </div>
      </form>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AddVideo',
  components: {
    LayoutDefault
  },
  data () {
    return {
      videoForm: {
        artist: '',
        title: '',
        url: ''
      }
    }
  },
  computed: {
    ...mapState('video', ['videoExists'])
  },
  methods: {
    ...mapActions('video', ['addVideo']),
    add () {
      // here I handle only youtube case
      // in real world example there should be a handler
      // for all type of online video services
      this.videoForm.url = this.formatYouTubeUrl(this.videoForm.url)
      this.addVideo(this.videoForm)
      !this.videoExists && this.resetForm()
    },
    resetForm () {
      this.videoForm = {
        artist: '',
        title: '',
        url: ''
      }
    },
    formatYouTubeUrl (url) {
      if (url.includes('embed')) {
        return url
      }
      const videoID = url.split('v=')[1]
      return 'https://www.youtube.com/embed/' + videoID
    }
  }
}
</script>

<style scoped>

</style>
