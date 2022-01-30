<template>
  <div id="app">
    <snack-board/>
  </div>
</template>

<script>
import SnackBoard from './components/SnackBoard'

export default {
  components: {
    SnackBoard,
  },
}
</script>

<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/global.scss';
#app{
  background-color: $color5;
}
</style>
