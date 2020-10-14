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
      console.log(this.NamesOfLadys)
    }
  }
}
</script>

<style scoped>
.table{
  border: 1px solid black;
  border-radius: 10px;
  padding: 25px;
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  
}
</style>