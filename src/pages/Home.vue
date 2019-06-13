<template>
  <layout-default>
    <div class="pt-l">
      <div class="xs12 m6 wrapper float-left">
        <video-player
          v-if="videos.length"
          class="video-player-box full__width mb-xl"
          :options="videos[index].options"
          :playsinline="true"
          @ended="onPlayerEnded(index)"
        />
      </div>
      <div class="xs12 m6 wrapper float-left">
        <div
          v-for="(video, i) in videos"
          :key="`${video.title}-${video.artist}`"
          class="video-thumbnail pointer mb-m pr-l pl-l pt-m pb-m bg__gray border-radius__small overflow-hidden"
          :class="{'bg__blue-gray text__white': i === index }"
          @click="setVideo(i)"
        >
          <div class="video-thumbnail__title full__width">
            <span>Title: {{ video.title }}</span>
          </div>
          <hr>
          <div class="video-thumbnail__artist vertical-middle full__width">
            <span class="vertical-middle__inner">Artist: {{ video.artist }}</span>
          </div>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    LayoutDefault
  },
  data () {
    return {
      index: 0
    }
  },
  computed: {
    ...mapState('video', ['videos'])
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

  .video-thumbnail {
    &.bg__blue-gray {
      .video-thumbnail__data {
        border-right: 1px solid white !important;
      }
    }

    &__data {
      border-right: 1px solid black;
    }
    &__title, &__artist {
      i, span {
        line-height: 25px;
      }
    }
  }
</style>
