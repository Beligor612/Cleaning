<template>
  <form class="form">
    <label for="firstName">First name: </label>
    <input type="text" 
          placeholder="input first name" 
          id="firstName"
          v-model='firstName'>
    <label for="secondName">Second name: </label>
    <input type="text"
            placeholder="input second name" 
            id="secondName"
            v-model='secondName'>
    <div class="checkboxes">
      <template v-for='(time, index) in time'>
      <input type="checkbox" 
            :key="index" 
            class="checkboxes_item" 
            :value='time' 
            v-model='timeForClean'>{{time}}
    </template>
    </div>
    <input type="button" value="Add" @click="Submit" class="btn">
  </form>
</template>

<script>
export default {
  data: ()=>({
    firstName: '',
    secondName: '',
    timeForClean: [],
    time: [],
  }),
  mounted() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes()
  const array = [];
    for (let i = 8; i <= hour && i <= 17; i++) {
      if(i!=hour && i!=17){
        for (let n = 0; n < 60; n += 15) {
        array.push(`${i}:${n == 0 ? "00" : n}`);
        }
      } else if(i >= 17){
        array.push(`17:00`);
      }
      else if(i==hour && i!=17){
        console.log(i)
        for (let k = 0; k < minute; k += 15) {
        array.push(`${i}:${k == 0 ? "00" : k}`);
        }
      } 
  } 
  this.time = array
},
  methods: {
    Submit: function(){
      const obj = [{
        firstName: this.firstName,
        secondName: this.secondName,
        timer: this.timeForClean,
      }]
      if(localStorage.Store){
        const local = JSON.parse(localStorage.getItem('Store'))
        obj.unshift(...local)
      }
      localStorage.setItem('Store', JSON.stringify(obj))
      this.resetForm()
    },
    resetForm: function(){
      this.firstName = ''
      this.secondName = ''
      this.timeForClean = []
    }
  
  }
}
</script>

<style scoped>
.form{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 500px;
  height: 200px;
  margin: 25px auto;
  padding: 15px;
}
.form label{
  margin-top: 10px;
}
.form input[placeholder]{
  margin-bottom: 10px;
  width: 25em;
  height: 50px;
}
.form .checkboxes { 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0px;
}
.form .checkboxes .checkboxes_item{
  margin-right: 5px;
  margin-top: 5px;
}
.btn{
  width: 10em;
  margin: 10px auto;
}
</style>