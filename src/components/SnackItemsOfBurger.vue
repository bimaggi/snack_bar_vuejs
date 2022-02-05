<template>
     <div class="form__select">
      <label for="">{{message}}</label>
      <select
        :key="index"
        v-model="requestItems"
        class="select"
        @change="setItems(requestItems)"
        >
        <option
          v-for=" i in items"
          :key="i.id"
          :value="i.type"
        >
          {{i.type}}
        </option>
      </select>
    </div>
</template>

<script>
export default {
  name: 'SnackItemsOfBurger',
  data() {
    return {
      requestItems: null,
    }
  },
  props: {
    items: {
      type: Array,
    },
    message: {
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
