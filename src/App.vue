<template>
  <Header />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
