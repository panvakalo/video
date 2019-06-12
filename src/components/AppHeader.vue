<template>
  <section class="full__width header-wrapper bg__gray-light vertical-middle">
    <div class="vertical-middle__inner">
      <div class="wrapper">
        <section class="logo float-left">
          <img src="../assets/images/logo.png" alt="Page logo" class="float-left">
        </section>
        <section class="float-right">
          <button
            class="display-inline"
            @click="goToAddVideo"
          >
            Add Video
          </button>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppHeader',
  computed: {
    ...mapState('video', ['videos'])
  },
  methods: {
    goToAddVideo () {
      this.$router.push({ name: 'add-video' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    &-wrapper {
      height: 60px;

      .logo img {
        height: 40px;
      }
    }
  }
</style>
