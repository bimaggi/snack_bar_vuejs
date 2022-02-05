<template>
<div class="menu">
    <router-link to="/" >Make your request</router-link>
    <router-link to="/request">Request</router-link>
</div>
</template>

<script>
export default {
  name: 'MenuSnack',
}
</script>

<style lang="scss">
  @import '@/styles/variables.scss';
.menu {
  padding: 2%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: $background-body;
}
a {
  font-weight: bold;
  color: $color1;
  margin-right: 1%;
  margin-left: 4%;
  text-decoration: none;
  font-size: 1.3rem;

  &.router-link-exact-active {
    color: $color2;
  }
}
@media screen and (max-width: $mobile){
  .menu {
    justify-content:space-between;
    padding: 1rem;
  }
  a{
    font-size: .9rem;
  }
}
</style>
