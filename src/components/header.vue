<template>
  <div class="logo">
    <!-- <img :srcset="imgUrl" alt="华西玛法logo"/> -->
    <img src="@/assets/logo.jpg" alt="华西玛法logo" />
  </div>
  <header class="panel-layout">
    <section>
      <keep-alive>
        <Navbar :nav-data="navData" />
      </keep-alive>
      <div class="search">
        <input type="text" class="a" placeholder="请输入您想要了解的内容" />
        <input type="button" />
      </div>
    </section>
  </header>
</template>

<script>
import Navbar from "./navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      navData: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "品牌探索",
          path: "/brand",
          subNavbar: [
            {
              title: "创始故事",
              id: "0",
            },
            {
              title: "品牌理念",
              id: "1",
            },
            {
              title: "天然萃取",
              id: "2",
            },
          ],
        },
        {
          title: "核心技术",
          path: "/technology",
        },
        {
          title: "产品介绍",
          path: "/product",
        },
        {
          title: "新闻资讯",
          path: "/news",
        },
        {
          title: "联系我们",
          path: "/contactUs",
        },
        {
          title: "官方店铺",
          path: "https://phmmy.tmall.com/index.htm?spm=a1z10.3-b-s.w5002-22307990129.2.25fc2497aTCac5",
        },
      ],
    };
  },
};
</script> 

<style scoped>
.logo {
  margin-top: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
}
section {
  display: flex;
  justify-content: space-between;
}
.search {
  overflow: hidden;
  float: right;
  height: 34px;
  margin-top: 17px;
  background-color: #1f70b8;
}
input[type="text"] {
  width: 245px;
  height: 34px;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-right: 0;
  text-indent: 1em;
  outline: none;
}
input[type="button"] {
  width: 35px;
  height: 34px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAALHRSTlMA+9355GtMEQoF635kWhf99fDGv7idj3l1Vc6bknZwXkQl09GxrqqIhkUyKQOEw0sAAACpSURBVBjTbY5XDsQgDETBkAYhvdft9f73W5koIWgzH6Pxk8cyQUVNnsaiCH1i5CS8Uu+5TLm7sYGNgQ7eEIfrHjuZDl1ylDTEqARdqnmwgxHTZ7OK7FX06EJZ8JWh630jeUUHx4J9gX6/WRBq9Jadd8yly9Tl5icPyiV804e/fpnBGj8cFGZvEpy2W6liSZdfqJCBpMrcauVzdHG9pjP5V0PDAzrFR9SBH8VHB8jLLbEAAAAAAElFTkSuQmCC)
    50% no-repeat;
  border: none;
  cursor: pointer;
  text-indent: -999em;
  vertical-align: middle;
}
</style>