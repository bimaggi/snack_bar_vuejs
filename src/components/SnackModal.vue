<template>
    <transition name="modal--fade">
      <div
        class="modal__backdrop"
        @click.self="close"
      >
      <article class="modal_container">
      <header>
        <h1 class="modal__title">Fill in the fields</h1>
      </header>
      <main>
        <form  class="form">
            <div class="form__select">
              <label>Card number</label>
              <input v-mask="'#### #### #### ####'" class="select">
            </div>
            <div class="form__select">
              <label>Name of the owner</label>
              <input type="text" class="select">
            </div>
            <div class="form__select">
              <label for="long">Expiration date</label>
              <input v-mask="'##/##'" class="select">
            </div>
            <div class="form__select">
              <label>Security code</label>
              <input v-mask="'###'" class="select">
            </div>
            <div class="form__select">
              <label>Amount</label>
              <input type="text" class="select">
            </div>
            <button
              class="button"
              @click="close"
            >
              Confirm
            </button>

        </form>
      </main>
      </article>
      </div>
    </transition>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  components: {

  },
  directives: { mask },
  data() {
    return {
    }
  },
  methods: {
    close() {
      // this.$emit('close')
      console.log('vai fechar')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.modal__backdrop {
  position: absolute;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.74);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal_container {
  border-radius:$border-radius ;
  border: 2px solid $color1;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  position: relative;
}
.modal__title{
  margin-top:5% ;
}
.form__select {
  width: 100%;
}
.button {
  margin-top: 10%;
  width: 50%;
}
</style>
