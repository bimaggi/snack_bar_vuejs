<template>
  <div class="form__select">
      <label for="">Drink</label>
      <div v-for="drink in drinks"
        :key="drink.id"
      >
        <input type="radio"
          name="drink"
          id="item"
          v-model="requestDrinks"
          :value="drink.type"
          class="radio"
          @change="setClick"
        >
        <label for="" class="radio__label">{{drink.type}}</label>
      </div>
    </div>

</template>

<script>
export default {
  name: 'SnackDrink',
  data() {
    return {
      drinks: null,
      requestDrinks: null,
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      this.drinks = data.drinks
    },
    setClick() {
      this.$emit('setDrink', this.requestDrinks)
    },
  },
  mounted() {
    this.getIngredients()
  },
}
</script>
