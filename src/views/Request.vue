<template>
  <div class="request">
    <h1 class="request__title" >Requests</h1>
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
  @media screen and (max-width: $mobile){
    margin-top: 5%;
    margin-bottom: 5%;
  }
}
.request__title{
  @media screen and (max-width: $mobile){
    font-size: 1rem;
    margin-bottom: 3%;
  }
}
</style>
