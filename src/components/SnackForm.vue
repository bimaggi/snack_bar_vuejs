<template>
  <form class="form">
    <div class="form__select">
      <label for="">Whats your name?</label>
      <input type="text"
        class="form__name"
        v-model="name"
      >
    </div>
    <snack-bread
      @setBread="setBread"
    />
    <snack-meat
      @setMeat="setMeat"
    />
    <snack-optional
      @setOptional="setOptional"
    />
    <snack-side-dish
      @setSideDish="setSideDish"
    />
    <snack-drink
      @setDrink="setDrink"
    />
    <div class="form__select">
      <button
        type="submit"
        class="button"
        @click.prevent="saveMyRequest"
      >
        Save
      </button>
    </div>
  </form>
</template>
<script>
import SnackBread from '@/components/SnackBread'
import SnackMeat from '@/components/SnackMeat'
import SnackOptional from '@/components/SnackOptional'
import SnackSideDish from '@/components/SnackSideDish'
import SnackDrink from '@/components/SnackDrink'

export default {
  name: 'SnackForm',
  components: {
    SnackBread,
    SnackMeat,
    SnackOptional,
    SnackSideDish,
    SnackDrink,
  },
  data() {
    return {
      name: null,
      requestBread: null,
      requestMeat: null,
      requestOptional: null,
      requestSideDish: null,
      requestDrink: null,
    }
  },
  mounted() {
    this.getIngredients()
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      console.log(data)
    },
    setBread(value) {
      this.requestBread = value
    },
    setMeat(value) {
      this.requestMeat = value
    },
    setOptional(value) {
      this.requestOptional = value
    },
    setSideDish(value) {
      this.requestSideDish = value
    },
    setDrink(value) {
      this.requestDrink = value
    },
    async saveMyRequest() {
      const request = {
        name: this.name,
        bread: this.requestBread,
        meat: this.requestMeat,
        optional: this.requestOptional,
        sideDish: this.requestSideDish,
        drink: this.requestDrink,
        status: 'Requested',
        msg: null,
      }
      const requestJson = JSON.stringify(request)
      const req = await fetch('http://localhost:3000/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestJson,
      })
      const res = await req.json()
      console.log(res)
      this.name = ''
      this.requestBread = ''
      this.requestMeat = ''
      this.requestOptional = ''
      this.requestSideDish = ''
      this.requestDrink = ''
    },
  },
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.form{
  @include style-form
}
.form__name{
  @include style-name
}
.form__select{
   @include style-form-select
}
.select{
  @include style-select
}
label{
  @include style-label
}
.radio__label{
  border: none;
}
.button{
  width: 100%;
  border: 2px solid $color2;
  background-color: $color5;
  border-radius: $border-radius;
  padding: 2%;
  margin-top: 2%;
  margin-bottom: 10%;
}
</style>
