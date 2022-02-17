<template>
<!--Aqui vão ficar os componentes que devem aparecer na view Request -->
<div class="table">
  <table class="table__form">
    <thead class="table__thead">
      <tr>
        <th class="thead__th" v-for="title in titles" :key="title">{{title}}</th>
      </tr>
    </thead>
    <tbody class="table__tbody">
      <request-item
        :requests="requests"
        :status="status"
        @delRequest="delRequest"
        @upDateStatus="upDateStatus"
      />
    </tbody>
  </table>
</div>
</template>
<script>
import RequestItem from '@/components/RequestItem'

import title from '@/enums/title'

const {
  NAME,
  BREADS,
  MEATS,
  OPTIONALS,
  SIDEDISHES,
  DRINKS,
  NUMBER,
  STATUS,
  ACTION,
} = title

export default {
  name: 'RequestForm',
  components: {
    RequestItem,
  },
  data() {
    return {
      titles: {
        name: NAME,
        breads: BREADS,
        meats: MEATS,
        optionals: OPTIONALS,
        sideDishes: SIDEDISHES,
        drinks: DRINKS,
        status: STATUS,
        number: NUMBER,
        action: ACTION,
      },
      requests: null,
      status: null,
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
    async getStatus() {
      const req = await fetch('http://localhost:3000/status')
      const data = await req.json()
      this.status = data
    },
    async delRequest(value) {
      const req = await fetch(`http://localhost:3000/request/${value}`, {
        method: 'DELETE',
      })
      const res = await req.json()
      console.log(res)
      this.getRequest()
    },
    async upDateStatus(event, value) {
      const option = event.target.value
      const actualStatus = JSON.stringify({ status: option })
      const req = await fetch(`http://localhost:3000/request/${value}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: actualStatus,
      })
      const res = await req.json()
      console.log(res)
      this.getRequest()
    },
  },
  mounted() {
    this.getFields()
    this.getRequest()
    this.getStatus()
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
  @media screen and (max-width: $mobile){
    font-size: .7rem;
    overflow: scroll;
  }
}
.table__form{
  width: 100%;
  text-align: center;
  border-top:none;
  border-radius: $border-radius;
  @media screen and (max-width: $mobile){
     border: none;
  }
}
tr:nth-child(even) {
  background:$color6;
}
.table__thead{
  background-color: $color1;
}
.thead__th{
  padding: 8px;
  @media screen and (max-width: $mobile){
    padding-top: 4px;
    padding-bottom: 4px;
  }
}
.tbody__td{
  padding: 1%;
}
.tbody__select{
  display: flex;
  justify-content: space-around;
  font-size: .8rem;
  padding-top: 3%;
}
.select{
  border-radius:$border-radius ;
  width: 48%;
}
.btn{
  width: 48%;
  border-radius:$border-radius ;
  background-color: $color5;
  border: 1px solid $color3;
  padding: 0 2px 0 2px;

}
</style>
