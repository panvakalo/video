<template>
  <layout-default>
    <div class="wrapper pt-xl">
      <form @submit.prevent="add">
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
      this.addVideo(this.videoForm)
      !this.videoExists && this.resetForm()
    },
    resetForm () {
      this.videoForm = {
        artist: '',
        title: '',
        url: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
