<template>
     <div class="form__select">
      <label for="">Choose the bread</label>
      <select
        :key="index"
        v-model="requestBread"
        class="select"
        @change="onChange"
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
</template>

<script>
export default {
  name: 'SnackBread',
  data() {
    return {
      breads: null,
      requestBread: null,
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      this.breads = data.breads
    },
    onChange() {
      this.$emit('setBread', this.requestBread)
    },
  },
  mounted() {
    this.getIngredients()
  },
}
</script>
