<template>
  <div class="banner">
    <h1 class="banner__title">Mount your Burger</h1>
    <img class="banner__img" src="http://www.jrlanches.com.br/imagens/lanche.jpg" alt="banner">
  </div>
</template>

<script>
export default {
  name: 'SnackBanner',
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.banner {
  max-width: 100%;
  background-color: $color1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  padding: 2% 0 4% 0;
}
.banner__img{
  width: 500px;
  border-radius: $border-radius;
}
@media screen and (max-width: $mobile){
  .banner{
    flex-direction: column;
    text-align: center;
    padding-bottom: 10%;
  }
  .banner__img{
    width: 80%;
  }
  .banner__title{
    font-size: 1.3rem;
    margin: 3% 0 3% 0;
  }
}
</style>
