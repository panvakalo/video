<template>
  <layout-default>
    <div
      v-for="video in videos"
      :key="`${video.title}-${video.artist}`"
    >
      <video :src="video.url" controls>
      </video>
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
  computed: {
    ...mapState('video', ['videos'])
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
