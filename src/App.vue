<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">List</router-link> |
      <router-link to="/add">Add New Lady</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav{
  text-align:center;
}

</style>
