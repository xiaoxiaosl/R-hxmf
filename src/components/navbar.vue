<template>
  <ul class="navbar panel">
    <li v-for="(item ,index) in nav" :key="index">
      <span 
      @click="PageJump(item.path)"
      :class="{'active' : activeIndex == item.path}">
      {{item.title}}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name:'navbar',
  data() {
    return {
      nav: [
        {
          title: '首页',
          path: '/'
        },{
          title: '品牌探索',
          path: '/brand'
        },{
          title: '核心技术',
          path: '/technology',
        }, {
          title: '产品介绍',
          path: '/product'
        }, {
          title: '联系我们',
          path: '/contactUs'
        }, {
          title: '官方店铺',
          path: 'https://phmmy.tmall.com/index.htm?spm=a1z10.3-b-s.w5002-22307990129.2.25fc2497aTCac5'
        }
      ]
    }
  },
  methods: {
    PageJump(link) {
      if(link.indexOf('https') != '-1') {
        window.location.href = link
      }else {
        this.$router.push(link)
      }
    }
  },
  computed: {
    activeIndex() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex: 1;
  margin-left: -15px;
  align-items: flex-start;
  font-size: 16px;
}
.navbar li {
  margin-left: 15px;
  margin-right: 15px;
}
.navbar li span {
  display: block;
  padding: 25px 27px;
  text-decoration: none;
  transition: .2s;
}
span:hover {
  background-color: #1f70b8;
  color: #fff;
}
.active {
  background-color: #1f70b8;
  color: #fff;
}
</style>