<template>
  <div class="snackbar">
    <snack-banner/>
    <snack-form/>
  </div>
</template>

<script>
import SnackBanner from '@/components/SnackBanner'
import SnackForm from '@/components/SnackForm'

export default {
  name: 'Home',
  components: {
    SnackBanner,
    SnackForm,
  },
}
</script>
