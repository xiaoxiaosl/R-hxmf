<template>
  <ul class="navbar" ref="refNav">
    <li v-for="(item, index) in navData" :key="index">
      <span
        v-if="item.title == '品牌探索'"
        :class="{ active: activeIndex == item.path }"
        @click="handleSubnav"
      >
        {{ item.title }}
      </span>
      <span
        v-else
        @click="PageJump(item.path)"
        :class="{ active: activeIndex == item.path }"
      >
        {{ item.title }}
      </span>
      <el-collapse-transition>
        <div
          class="brand-subnav"
          v-show="isShow"
          v-if="item.title == '品牌探索'"
        >
          <div class="panel-layout">
            <span
              v-for="(item, index) in item.subNavbar"
              :key="index"
              @click="insurance(item.id)"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </el-collapse-transition>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['navData'],
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    PageJump(link) {
      if (link.indexOf("https") != "-1") {
        window.location.href = link;
      } else {
        this.$router.push(link);
        this.isShow = false;
      }
    },
    insurance(id) {
      this.$router.push({
        path: `/brand`,
        query: { id },
      });
      this.isShow = !this.isShow;
    },
    handleSubnav() {
      this.isShow = !this.isShow;
    },
    setRouterClass() {
      let navliElment = this.$refs.refNav.children;
      let path = this.$route.path;
      if (path == "/product-detail") {
        navliElment[3].children[0].className = "active";
      } else if (path == "/news-detail") {
        navliElment[4].children[0].className = "active";
      }
    },
  },
  computed: {
    activeIndex() {
      return this.$route.path;
    },
  },
  mounted() {
    this.setRouterClass();
  },
};
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
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
.navbar li > span {
  display: block;
  padding: 25px 27px;
  text-decoration: none;
  transition: 0.2s;
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
  background-color: hsla(0, 0%, 100%, 0.86);
  box-shadow: 0 4px 7px rgb(0 0 0 / 10%);
  line-height: 55px;

  .panel-layout {
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