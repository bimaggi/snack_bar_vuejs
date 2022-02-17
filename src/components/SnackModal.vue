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
            <label>{{message[0].msg1}}</label>
            <input
              class="select"
              v-model="card"
              v-mask="'#### #### #### ####'"
            >
          </div>
          <div class="form__select">
            <label>{{message[1].msg2}}</label>
            <input
              class="select"
              v-model="name"
            >
          </div>
          <div class="form__select">
            <label>{{message[2].msg3}}</label>
            <input
              class="select"
              v-model="date"
              v-mask="'##/##'"
            >
          </div>
          <div class="form__select">
            <label>{{message[3].msg4}}</label>
            <input
              class="select"
              v-model="securityCode"
              v-mask="'###'"
            >
          </div>
           <div class="form__select">
            <label>{{message[4].msg5}}</label>
            <input
              class="select"
              :value="`U$ ${vlrAmount}`"
              :disabled="vlrAmount"
            >
          </div>
          <button
            class="button"
            @click.prevent="confirm"
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
import title from '@/enums/title'
import { isAfter } from 'date-fns'

const {
  MSG1,
  MSG2,
  MSG3,
  MSG4,
  MSG5,
} = title

export default {
  directives: { mask },
  props: {
    vlrAmount: {
      type: String,
    },
  },
  data() {
    return {
      date: null,
      message: [
        { msg1: MSG1 },
        { msg2: MSG2 },
        { msg3: MSG3 },
        { msg4: MSG4 },
        { msg5: MSG5 },
      ],
    }
  },
  methods: {
    confirm() {
      const newDate = this.getCardDate()
      const isDateValid = isAfter(new Date(newDate), new Date())
      console.log('aqui o result', newDate, isDateValid)
    },
    getCardDate() {
      const [month, year] = this.date.split('/')
      if (+month <= 0 || +month > 12) {
        return null
      }
      const day = new Date().getDate()
      return new Date(`20${year}`, +month - 1, day)
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
