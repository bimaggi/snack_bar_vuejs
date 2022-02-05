<template>
  <snack-modal v-if="modal === true"/>
  <form v-else class="form">
    <div class="form__select">
      <label for="">Whats your name?</label>
      <input type="text"
        class="form__name"
        v-model="name">
    </div>
    <snack-items-of-burger
      :items="breads"
      @setItems="setBread"
      :message="message.breads"
    />
     <snack-items-of-burger
      :items="meats"
      @setItems="setBread"
      :message="message.meats"
    />
     <snack-items-of-burger
      :items="optionals"
      @setItems="setOptional"
      :message="message.optionals"
    />

    <snack-drink-and-side-dish
     :items="sideDishes"
     @setItems="setSideDish"
     :message="message.sideDishes"
    />
    <snack-drink-and-side-dish
     :items="drinks"
     @setItems="setDrink"
     :message="message.drinks"
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
import SnackModal from '@/components/SnackModal'
import SnackItemsOfBurger from '@/components/SnackItemsOfBurger'
import SnackDrinkAndSideDish from '@/components/SnackDrinkAndSideDish'
import title from '@/enums/title'

const {
  BREADS,
  MEATS,
  OPTIONALS,
  SIDEDISHES,
  DRINKS,
} = title

export default {
  name: 'SnackForm',
  components: {
    SnackModal,
    SnackItemsOfBurger,
    SnackDrinkAndSideDish,
  },
  data() {
    return {
      name: null,
      breads: null,
      optionals: null,
      sideDishes: null,
      drinks: null,
      requestBread: null,
      requestMeat: null,
      requestOptional: null,
      requestSideDish: null,
      requestDrink: null,
      modal: false,
      message: {
        breads: BREADS,
        meats: MEATS,
        optionals: OPTIONALS,
        sideDishes: SIDEDISHES,
        drinks: DRINKS,
      },
    }
  },
  mounted() {
    this.getIngredients()
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      this.breads = data.breads
      this.meats = data.meats
      this.optionals = data.optionals
      this.sideDishes = data.sideDishes
      this.drinks = data.drinks
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
