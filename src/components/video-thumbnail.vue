<template>
  <div
    class="video-thumbnail pointer mb-m pr-l pl-l pt-m pb-m bg__gray border-radius__small overflow-hidden vertical-middle xs12"
    :class="{'active': thumbIndex === vidIndex }"
    @click="setVideo(thumbIndex)"
  >
    <span class="video-thumbnail__avatar vertical-middle__inner xs2">
      <i class="material-icons">movie</i>
    </span>
    <span class="video-thumbnail__data overflow-hidden vertical-middle__inner ml-m">
      <div class="video-thumbnail__title">
        <span>Title: {{ video.title }}</span>
      </div>
      <div class="video-thumbnail__artist">
        <span class="">Artist: {{ video.artist }}</span>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'video-thumbnail',
  props: {
    video: {
      type: Object,
      required: true
    },
    thumbIndex: {
      type: Number,
      required: true
    },
    vidIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    setVideo (index) {
      this.$emit('clicked', index)
    }
  }
}
</script>

<style scoped>

</style>
