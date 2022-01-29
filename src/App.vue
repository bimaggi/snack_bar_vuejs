<template>
  <div id="app">
  </div>
  <snack-board/>
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

</style>
