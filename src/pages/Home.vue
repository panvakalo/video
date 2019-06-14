<template>
  <layout-default>
    <div class="pt-l homepage-content wrapper">
      <div
        v-if="isPlaylistEmpty"
        class="alert alert__warning"
      >
        There are no videos in your playlist.
      </div>
      <div class="xs12 m6 float-left">
        <video-player
          v-if="!isPlaylistEmpty"
          class="video-player-box full__width mb-xl"
          :options="videos[index].options"
          :playsinline="true"
          @ended="onPlayerEnded(index)"
        />
      </div>
      <div class="xs12 m6 float-left">
        <div class="pl-m">
          <video-thumbnail
            v-for="(video, i) in videos"
            :key="`${video.title}-${video.artist}`"
            :video="video"
            :thumb-index="i"
            :vid-index="index"
            @clicked="setVideo"
          />
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import { mapState } from 'vuex'
import VideoThumbnail from '../components/video-thumbnail'

export default {
  name: 'Home',
  components: {
    VideoThumbnail,
    LayoutDefault
  },
  data () {
    return {
      index: 0
    }
  },
  computed: {
    ...mapState('video', ['videos']),
    isPlaylistEmpty () {
      return !this.videos.length
    }
  },
  methods: {
    onPlayerEnded () {
      this.changeVideo()
    },
    changeVideo () {
      this.index !== this.videos.length - 1 ? this.index++ : this.index = 0
    },
    setVideo (index) {
      this.index = index
    }
  }
}
</script>

<style lang="scss">
  .video-js {
    width: 100% !important;
    min-height: 300px;
  }
</style>
