<template>
     <div class="form__select">
      <label for="">Choose the meat</label>
      <select
        :key="index"
        v-model="requestMeat"
        class="select"
        @change="onChange"
        >
        <option
          v-for=" meat in meats"
          :key="meat.id"
          :value="meat.type"
        >
          {{meat.type}}
        </option>
      </select>
    </div>
</template>

<script>
export default {
  name: 'SnackMeat',
  data() {
    return {
      meats: null,
      requestMeat: null,
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      this.meats = data.meats
    },
    onChange() {
      this.$emit('setMeat', this.requestMeat)
    },
  },
  mounted() {
    this.getIngredients()
  },
}
</script>
