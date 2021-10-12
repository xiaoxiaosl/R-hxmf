<template>
  <Header />
  <el-carousel :height="bannerHeight + 'px'" :interval="50000">
    <el-carousel-item
      v-for="(item, index) in bannerItem"
      :key="index"
      pause-on-hover="true"
    >
      <img :src="item.imgUrl" @click="PageJump(item.path)" />
    </el-carousel-item>
  </el-carousel>
  <div class="product-title">产品展示<small>PRODUCT DISPLAY</small></div>
  <Product :product-list = "productList"/>
  <div class="product-details">
    <h2 class="detail-title">{{ productTxt }}</h2>
    <div class="detail-layout">
      <div class="detail-img"><img :src="detailImg" /></div>
      <div class="detail-body">
        <div v-for="(item, index) in details" :key="index">
          <h5>{{ item.title }}</h5>
          <p v-html="item.content"></p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import Product from '@/components/productList';

export default {
  name: "home",
  components: {
    Header,
    Footer,
    Product
  },
  data() {
    return {
      bannerHeight: "",
      detailImg: require("@/static/1.jpg"),
      details: [
        {
          title: "以桂花为本，专业修复肌肤问题",
          content:
            "10年桂花系统研究,至简配方模式<br/>为更多人特别是婴幼儿、孕妈妈等特殊群体<br/>带来天然更有效的肌肤修护体验",
        },
        {
          title: "专利止痒修护成分：桂花Osthin™",
          content:
            "源自新鲜天然桂花萃取，能有效舒缓、呵护脆弱肌肤，<br/> 提升肌肤自愈力。<br/> 每1000g新鲜桂花仅能萃取0.02g Osthin™<br />  仅需一点，即刻修护",
        },
      ],
      productTxt: "以桂花为本，专业修复肌肤问题",
      bannerItem: [
        {
          imgUrl: require("@/static/banner1.jpg"),
          path: "/contactUs",
        },
        {
          imgUrl: require("@/static/banner2.jpg"),
          path: "/contactUs",
        },
        {
          imgUrl: require("@/static/banner3.jpg"),
          path: "/contactUs",
        },
        {
          imgUrl: require("@/static/banner4.jpg"),
          path: "/contactUs",
        },
      ],
      // 产品展示
      productList: [
        {
          imgUrl: require("@/static/2.jpg"),
          label: '婴儿桂花',
          title: '婴儿桂花多效修护霜  50g',
          detail: '专为湿痒肌肤设计,高效补水保湿',
          path: "/contactUs",
        },
        {
          imgUrl: require("@/static/3.jpg"),
          label: '婴儿桂花',
          title: '婴儿桂花多效修护霜  50g',
          detail: '专为湿痒肌肤设计,高效补水保湿',
          path: "/contactUs",
        },
        {
          imgUrl: require("@/static/3.jpg"),
          label: '婴儿桂花',
          title: '婴儿桂花多效修护霜  50g',
          detail: '专为湿痒肌肤设计,高效补水保湿',
          path: "/contactUs",
        },
        {
          imgUrl: require("@/static/4.jpg"),
          label: '婴儿桂花',
          title: '婴儿桂花多效修护霜  50g',
          detail: '专为湿痒肌肤设计,高效补水保湿',
          path: "/contactUs",
        },
        {
          imgUrl: require("@/static/5.jpg"),
          label: '婴儿桂花',
          title: '婴儿桂花多效修护霜  50g',
          detail: '专为湿痒肌肤设计,高效补水保湿',
          path: "/contactUs",
        }
      ]
    };
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    this.setSize();
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
  },
  methods: {
    setSize() {
      this.bannerHeight = (575 / 1841) * this.screenWidth;
    },
    PageJump(link) {
      if (link.indexOf("https") != "-1") {
        window.location.href = link;
      } else {
        this.$router.push(link);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  overflow: hidden;
  background-color: #f1f6f9;
  margin-top: 115px;
  padding-top: 80px;
}
.detail-title {
  font-size: 36px;
  font-weight: 100;
  position: relative;
  text-align: center;
  white-space: nowrap;

  &:after {
    background-color: #007acd;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -50px;
    overflow: hidden;
    position: absolute;
    top: 65px;
    width: 100px;
  }
}
.detail-layout {
  position: relative;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  height: 606px;
  margin-top: 72px;
  padding-bottom: 50px;
  padding-top: 50px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
.detail-img {
  position: absolute;
  left: -308px;
}
.detail-body {
  float: right;
  margin-right: 80px;

  h5 {
    color: #1e6fb9;
    font-size: 18px;
    font-weight: 500;
    margin-top: 65px;
    margin-bottom: 18px;
  }

  p {
    line-height: 1.9;
    font-size: 16px;
  }
}
.product-title {
    color: #333;
    font-size: 36px;
    font-weight: 100;
    margin-bottom: 110px;
    margin-top: 100px;
    text-align: center;
}
.product-title small {
    color: #939393;
    display: block;
    font-weight: 100;
    margin-top: 15px;
    position: relative;

    &::after {
      content: "";
      overflow: hidden;
      position: absolute;
      top: 50px;
      left: 50%;
      width: 100px;
      height: 2px;
      margin-left: -50px;
      background-color: #007acd;
    }
}
</style>
