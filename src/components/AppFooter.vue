<template>
  <footer class="footer">
    <a href="https://www.linkedin.com/in/marcia-b-oliveira/"
        class="footer__link"
        target="_blank">
        <strong>
          Created and powered by Marcia Bimaggi - 2022
        </strong>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss">
 @import '@/styles/variables.scss';
  .footer {
    text-align: center;
    background: $background-body;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer__link {
    letter-spacing: 1px;
    text-decoration: none;
    color: $color1;
  }
@media screen and (max-width: $mobile){
  .footer__link{
    font-size: .7rem;
  }
}
</style>
