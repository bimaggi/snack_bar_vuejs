<template>
  <div class="board">
    <snack-menu/>
    <router-view/>
  </div>
</template>
<script>
import SnackMenu from '@/components/SnackMenu'

export default {
  name: 'SnackBoard',
  components: {
    SnackMenu,
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="scss">
.board {
  margin-top: 0;

}

</style>
