<template>
  <div class="message">
    <div class="message__title">{{msg}}</div>
    <div class="message__x">x</div>
  </div>
</template>

<script>
export default {
  name: 'SnackMessage',
  props: {
    msg: {
      type: String,
    },
  },
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
.message {
  border: 2px solid $color2;
  border-radius: 5px;
  width: 30%;
  padding: 10px;
  display: flex;
  margin-bottom: 2%;
  justify-content: flex-end;
    @media screen and (max-width: $mobile){
    width: 75%;
    font-size: .8rem;
  }
 }
 .message__title{
   text-align: center;
   width: 90%;

 }
 .message__x{
  font-size: .8rem;
  width: 6%;
  height: 1%;
  text-align: center;
  background-color: rgba(128, 128, 128, 0.212);
  border-radius: $border-radius;
 }
</style>
