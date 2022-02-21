<template>
<div class="container">
  <snack-message
    :msg="msg" v-show="msg"
  />
  <snack-modal v-if="modal === true"
    :priceAmount="priceAmount"
    @close="close"
  />
  <form v-else class="form">
    <div class="form__select">
      <label for="">Whats your name?</label>
      <input type="text"
        class="form__name"
        v-model="name"
      >
    </div>
    <snack-items-of-burger
      :items="breads"
      @setItems="setBread"
      :titles="titles.breads"
    />
     <snack-items-of-burger
      :items="meats"
      @setItems="setMeat"
      :titles="titles.meats"
    />
     <snack-items-of-burger
      :items="optionals"
      @setItems="setOptional"
      :titles="titles.optionals"
    />
    <snack-drink-and-side-dish
     :items="sideDishes"
     @setItems="setSideDish"
     :titles="titles.sideDishes"
    />
    <snack-drink-and-side-dish
     :items="drinks"
     @setItems="setDrink"
     :titles="titles.drinks"
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
  </div>
</template>
<script>
import SnackModal from '@/components/SnackModal'
import SnackItemsOfBurger from '@/components/SnackItemsOfBurger'
import SnackDrinkAndSideDish from '@/components/SnackDrinkAndSideDish'
import SnackMessage from '@/components/SnackMessage'
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
    SnackMessage,
  },
  data() {
    return {
      name: null,
      breads: null,
      optionals: null,
      sideDishes: null,
      drinks: null,
      msg: null,
      requestBread: null,
      requestMeat: null,
      requestOptional: null,
      requestSideDish: null,
      requestDrink: null,
      modal: false,
      priceAmount: null,
      price: {
        bread: null,
        meat: null,
        optional: null,
        sideDish: null,
        drink: null,
      },
      titles: {
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
      this.requestBread = value.type
      this.price.bread = value.price
    },
    setMeat(value) {
      this.requestMeat = value.type
      this.price.meat = value.price
    },
    setOptional(value) {
      this.requestOptional = value.type
      this.price.optional = value.price
    },
    setSideDish(value) {
      this.requestSideDish = value.type
      this.price.sideDish = value.price
    },
    setDrink(value) {
      this.requestDrink = value.type
      this.price.drink = value.price
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
      }
      if (!this.name || !this.requestBread || !this.requestMeat) {
        this.msg = `Fill in the fields * Name, *${this.titles.breads}, *${this.titles.meats}`
        setTimeout(() => {
          this.msg = ''
        }, 5000)
      } else {
        const requestJson = JSON.stringify(request)
        const req = await fetch('http://localhost:3000/request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: requestJson,
        })
        const res = await req.json()
        this.msg = `Request Nº ${res.id} has been done successfully.`
        const amount = [
          this.price.bread,
          this.price.meat,
          this.price.optional,
          this.price.sideDish,
          this.price.drink,
        ]
        this.priceAmount = amount.map((item) => item).reduce((prev, curr) => prev + curr, 0)
        console.log(res, this.priceAmount)
        setTimeout(() => {
          this.msg = ''
          this.modal = true
          this.name = ''
        }, 3000)
      }
    },
    close(closeModal) {
      setTimeout(() => {
        this.modal = closeModal
      }, 4000)
    },
  },
}
</script>

<style lang="scss">
  @import '@/styles/variables.scss';
  @import '@/styles/mixins.scss';

.container{
   @include style-form;
   @include justify;
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
