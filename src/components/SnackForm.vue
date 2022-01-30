<template>
  <form class="form">
    <div class="form__select">
      <label for="">Whats your name?</label>
      <input type="text" class="form__name">
    </div>

    <div class="form__select">
      <label for="">Choose the bread</label>
      <select
        :key="index"
        v-model="value"
        class="select"
        >
        <option
          v-for=" bread in breads"
          :key="bread.id"
          :value="bread.type"
        >
          {{bread.type}}
        </option>
      </select>
    </div>

    <div class="form__select">
      <label for="">Choose the meat</label>
      <select
        :key="index"
        v-model="value"
        class="select"
      >
        <option
          v-for="meat in meats"
          :key="meat.id"
          :value="meat.type"
        >
          {{meat.type}}
        </option>
      </select>
    </div>

    <div class="form__select">
      <label for="">Choose the optional</label>
      <select
        :key="index"
        v-model="value"
        class="select"
      >
        <option
          v-for="optional in optionals"
          :key="optional.id"
          :value="optional.type"
        >
          {{optional.type}}
        </option>
      </select>
    </div>

    <div class="form__select">
      <label for="">Side Dish</label>
      <div v-for="sideDish in sideDishes"
        :key="sideDish.id"
      >
        <input type="radio"
          name="sideDish"
          id="item"
          :value="sideDish.type"
          class="radio"
        >
        <label for="" class="radio__label">{{sideDish.type}}</label>
      </div>
    </div>

    <div class="form__select">
      <label for="">Drink</label>
      <div v-for="drink in drinks"
        :key="drink.id"
      >
        <input type="radio"
          name="drinks"
          id="item"
          :value="drink.type"
          class="radio"
        >
        <label for="" class="radio__label">{{drink.type}}</label>
      </div>
    </div>
    <div class="form__select">
      <button
        type="submit"
        class="button"
      >
        Save
      </button>
    </div>
  </form>
</template>
<script>

export default {
  name: 'SnackForm',
  components: {
  },
  data() {
    return {
      breads: null,
      meats: null,
      optionals: null,
      sideDishes: null,
      drinks: null,
      requestBread: null,
      requestMeat: null,
      requestOptional: null,
      requestSideDishe: null,
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
      this.breads = data.breads
      this.meats = data.meats
      this.optionals = data.optionals
      this.sideDishes = data.sideDishes
      this.drinks = data.drinks
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
