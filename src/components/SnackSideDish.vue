<template>
  <div class="form__select">
      <label for="">Side Dish</label>
      <div v-for="sideDish in sideDishes"
        :key="sideDish.id"
      >
        <input type="radio"
          name="sideDish"
          id="item"
          v-model="requestSideDishes"
          :value="sideDish.type"
          class="radio"
          @change="setClick"
        >
        <label for="" class="radio__label">{{sideDish.type}}</label>
      </div>
    </div>

</template>

<script>
export default {
  name: 'SnackSideDish',
  data() {
    return {
      sideDishes: null,
      requestSideDishes: null,
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      this.sideDishes = data.sideDishes
    },
    setClick() {
      // console.log(this.requestSideDishes)
      this.$emit('setSideDish', this.requestSideDishes)
    },
  },
  mounted() {
    this.getIngredients()
  },
}
</script>
