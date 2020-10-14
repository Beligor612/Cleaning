<template>
  <section >
    <h3>{{names.item.firstName + ' '+ names.item.secondName}}</h3>
    <p>Работа выполнена: </p>
    <ul >
      <li v-for="(items, index) in names.item.timer" :key='index'>{{items}}</li>
    </ul>
  </section>
</template>
  
<script>
export default {
  props: {
    names: Object
  },
}
</script>

<style scoped>
  section{
    width: 270px;
    height: 150px;
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .2);
    
  }
  section ul{
    padding: 0px;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  section ul li{
    margin-right: 15px;
  }
</style>