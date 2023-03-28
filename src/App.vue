<template>
  <router-view />
</template>
<script>
export default {
  name: 'App',
  created() {
    if (this.$router.path !== '/homeOfStatistical') {
      this.$router.replace('/homeOfStatistical')
    }
  }
}
</script>
<style lang="scss" scoped>
@import './src/assets/styles/css/home.css';
</style>
