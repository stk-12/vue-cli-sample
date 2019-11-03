<template>
  <div id="app">
    <Header></Header>
    <div class="contents">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
