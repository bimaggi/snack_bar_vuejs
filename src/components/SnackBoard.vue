<template>
<!--Aqui vão ficar os componentes que devem aparecer tanto na view Request, quanto na SnackBar -->
  <div class="board">
    <snack-menu/>
    <router-view/>
    <app-footer/>
  </div>
</template>
<script>
import SnackMenu from '@/components/SnackMenu'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'SnackBoard',
  components: {
    SnackMenu,
    AppFooter,
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
