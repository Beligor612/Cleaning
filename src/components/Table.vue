<template>
  <article class="table">
    <template v-for="item in NamesOfLadys">
        <TableItem :names={item} :key='item.id' ></TableItem>
    </template>
  </article>
</template>

<script>
import TableItem from './TableItem'
export default {
  components:{
    TableItem
  },
  data(){
    return{
      NamesOfLadys: []
    }
  },

  mounted(){
    if(localStorage.Store){
      const local = JSON.parse(localStorage.getItem('Store'))
      this.NamesOfLadys = local
    }
  }
}
</script>

<style scoped>
.table{
  padding: 25px;
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

}
</style>