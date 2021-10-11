<template>
  <ul class="navbar">
    <li v-for="(item ,index) in nav" :key="index">
      <span v-if="item.title == '品牌探索'"
      :class="{'active' : activeIndex == true}" @click="handleSubnav">
      {{item.title}}
      </span>
      <span v-else
        @click="PageJump(item.path)"
        :class="{'active' : activeIndex == '/' + item.path}">
        {{item.title}}
      </span>
      <el-collapse-transition>
        <div class="brand-subnav" v-show="isShow" v-if="item.title == '品牌探索'">
          <div class="panel-layout">
            <span v-for="(item, index) in item.subNavbar" :key="index" @click="PageJump(item.path)">
              {{item.title}}
            </span>
          </div>
        </div>
      </el-collapse-transition>
    </li>
  </ul>
</template>

<script>
export default {
  name:'navbar',
  data() {
    return {
      isShow: false,
      nav: [
        {
          title: '首页',
          path: 'home'
        },{
          title: '品牌探索',
          subNavbar: [
            {
              title: '创始故事',
              path: 'brand/one'
            },
            {
              title: '品牌理念',
              path: 'brand/two'
            },
            {
              title: '天然萃取',
              path: 'brand/three'
            }
          ]
          
        },{
          title: '核心技术',
          path: 'technology',
        }, {
          title: '产品介绍',
          path: 'product'
        }, {
          title: '联系我们',
          path: 'contactUs'
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
        this.$router.push({name: link})
      }
    },
    handleSubnav() {
      this.isShow = !this.isShow
    }
  },
  computed: {
    activeIndex() { 
      let pathName = this.$route.path
      if (pathName.indexOf('brand') == 1) {
        pathName = true
      }
      return pathName
    }
  }
}
</script>

<style scoped lang='scss'>
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
.navbar li > span {
  display: block;
  padding: 25px 27px;
  text-decoration: none;
  transition: .2s;
}
.navbar li > span:hover {
  background-color: #1f70b8;
  color: #fff;
}
.active {
  background-color: #1f70b8;
  color: #fff;
}
.brand-subnav {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  background-color: hsla(0,0%,100%,.86);
  box-shadow: 0 4px 7px rgb(0 0 0 / 10%);
  line-height: 55px;

  .panel-layout{
    padding-left: 124px;
  }

  span {
    margin-left: 20px;
    margin-right: 20px;
    color: #1e2727;
    cursor: pointer;
  }
}
</style>