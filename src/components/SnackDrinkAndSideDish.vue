<template>
  <div class="form__select">
      <label for="">{{ titles }}</label>
      <div v-for="i in items"
        :key="i.id"
      >
        <input type="radio"
          :name="i.type"
          id="item"
          v-model="requestItems"
          :value="i"
          class="radio"
          @change="setItems(requestItems)"
        >
        <label for="" class="radio__label">{{i.type}}</label>
      </div>
    </div>

</template>

<script>
export default {
  name: 'SnackDrinkAndSideDish',
  data() {
    return {
      requestItems: null,
    }
  },
  props: {
    items: {
      type: Array,
    },
    titles: {
      type: String,
    },
  },
  methods: {
    setItems(value) {
      this.$emit('setItems', value)
    },
  },
}
</script>
