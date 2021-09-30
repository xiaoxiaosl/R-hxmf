<template>
  <Header />
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item, index) in bannerItem" :key="index">
      <img :src="item.imgUrl">
    </el-carousel-item>
  </el-carousel>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      bannerItem: [
        {
          imgUrl: require('@/static/banner1.jpg'),
          path: '/about' 
        },
        {
          imgUrl: require('@/static/banner2.jpg'),
          path: '/about' 
        },
        {
          imgUrl: require('@/static/banner3.jpg'),
          path: '/about' 
        },
        {
          imgUrl: require('@/static/banner4.jpg'),
          path: '/about' 
        }
      ]
    }
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
