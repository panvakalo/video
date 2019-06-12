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
            @click="togglePage"
          >
            {{ buttonData.text }}
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
    ...mapState('video', ['videos']),
    buttonData () {
      return {
        text: this.$route.name === 'home' ? 'Add Video' : 'Go back',
        routeName: this.$route.name === 'home' ? 'add-video' : 'home'
      }
    }
  },
  methods: {
    togglePage () {
      this.$router.push({ name: this.buttonData.routeName })
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
