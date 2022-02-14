<template>
  <tr class="tbody__tr" v-for="req in requests" :key="req.id">
    <td class="tbody__td" v-for="r in req" :key="r">{{r}}</td>
    <td class="tbody__select">
      <select
        class="select"
        @change="upDateStatus($event, req.id)"
       >
        <option
          class="select__option"
          :selected="requests.status"
          :value="item.type"
          v-for="item in status"
          :key="item.id"
         >
          {{item.type}}
        </option>
      </select>
      <button
        class="btn"
        @click="delRequest(req.id)"
      >
       Delete
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'RequestItem',
  props: {
    requests: {
      type: Array,
    },
    status: {
      type: Array,
    },
  },
  methods: {
    delRequest(value) {
      this.$emit('delRequest', value)
    },
    upDateStatus(event, value) {
      this.$emit('upDateStatus', event, value)
    },
  },
}
</script>
