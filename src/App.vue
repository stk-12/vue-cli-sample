<template>
  <div id="app">
    <Header></Header>
    <div class="contents">
      <transition name="fade" mode="out-in" @before-enter="beforeEnter">
        <router-view></router-view>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll'); //this.$root ルートのVueインスタンス
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s;
}
</style>
