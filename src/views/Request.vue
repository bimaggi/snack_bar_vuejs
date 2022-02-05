<template>
  <div class="request">
    <h1>Requests</h1>
    <request-form/>
  </div>
</template>

<script>
import RequestForm from '@/components/RequestForm'

export default {
  name: 'Request',
  components: {
    RequestForm,
  },
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.request{
  @include style-display;
  @include justify();
}
</style>
