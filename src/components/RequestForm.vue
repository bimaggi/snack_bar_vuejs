<template>
<!--Aqui vão ficar os componentes que devem aparecer na view Request -->
<div class="table">
  <table class="table__form">
    <thead class="table__thead">
      <tr>
        <th class="thead__th">{{message.name}}</th>
        <th class="thead__th">{{message.breads}} </th>
        <th class="thead__th">{{message.meats}}</th>
        <th class="thead__th">{{message.optionals}}</th>
        <th class="thead__th__action">{{message.sideDishes}}</th>
        <th class="thead__th__action">{{message.drinks}}</th>
        <th class="thead__th__action">{{message.status}}</th>
        <th class="thead__th__action">{{message.message}}</th>
        <th class="thead__th__action">{{message.number}}</th>
        <th class="thead__th__action">{{message.action}}</th>
      </tr>
    </thead>
    <tbody class="table__tbody">
      <tr class="tbody__tr" v-for="req in requests" :key="req.id">
        <td class="tbody__td" v-for="r in req" :key="r">{{r}}</td>
        <button class="btn__done">v</button>
        <button class="btn__del">x</button>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script>
import title from '@/enums/title'

const {
  NAME,
  BREADS,
  MEATS,
  OPTIONALS,
  SIDEDISHES,
  DRINKS,
  STATUS,
  MESSAGE,
  NUMBER,
  ACTION,
} = title

export default {
  name: 'RequestForm',
  components: {
  },
  data() {
    return {
      message: {
        name: NAME,
        breads: BREADS,
        meats: MEATS,
        optionals: OPTIONALS,
        sideDishes: SIDEDISHES,
        drinks: DRINKS,
        status: STATUS,
        message: MESSAGE,
        number: NUMBER,
        action: ACTION,
      },
      requests: null,
    }
  },
  methods: {
    async getFields() {
      const req = await fetch('http://localhost:3000/ingredients')
      const data = await req.json()
      this.fields = Object.keys(data)
    },
    async getRequest() {
      const req = await fetch('http://localhost:3000/request')
      const data = await req.json()
      this.requests = data
    },
  },
  mounted() {
    this.getFields()
    this.getRequest()
  },
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
@import '@/styles/mixins.scss';

.table{
  display: flex;
  width: 90%;
  margin: 3% 0 3% 0;
}
.table__form{
  width: 100%;
  text-align: center;
  border: 1px solid $color2;
  border-top:none;
  border-radius: $border-radius;
}
.table__thead{
  background-color: $color1;
}
.thead__th{
  padding: 8px;
}
.thead__th__action{
  width: 12%;
}
.btn__del{
  @include style-btn;
  background-color: $color5;
  border: 1px solid $color3;
  margin-left: 10%;
  margin-top: 5%;
}
.btn__done{
  @include style-btn;
  background-color: $color5;
  border: 1px solid $color2;
}
.tbody__td{
  padding: 1%;
}
</style>
