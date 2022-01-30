<template>
     <div class="form__select">
      <label for="">Choose the optional</label>
      <select
        :key="index"
        v-model="requestOptional"
        class="select"
        @change="onChange"
        >
        <option
          v-for=" optional in optionals"
          :key="optional.id"
          :value="optional.type"
        >
          {{optional.type}}
        </option>
      </select>
    </div>
</template>

<script>
export default {
  name: 'SnackOptional',
  data() {
    return {
      optionals: null,
      requestOptional: null,
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      this.optionals = data.optionals
    },
    onChange() {
      this.$emit('setOptional', this.requestOptional)
    },
  },
  mounted() {
    this.getIngredients()
  },
}
</script>
