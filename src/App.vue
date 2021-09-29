<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.panel {
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
}
h3 {
  margin: 10px 0 10px 0;
  font-size: 14px;
}
img {
  vertical-align: middle;
}
</style>