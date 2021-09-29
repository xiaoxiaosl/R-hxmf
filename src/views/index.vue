<template>
  <Header />
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Footer />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Header,
    Footer,
  }
}
</script>

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
</style>
