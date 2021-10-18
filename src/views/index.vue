<template>
  <Header />
  <el-carousel :height="bannerHeight + 'px'" :interval="5000">
    <el-carousel-item
      v-for="(item, index) in bannerItem"
      :key="index"
      pause-on-hover="true"
    >
      <img :src="item.imgUrl" @click="PageJump(item.path)" />
    </el-carousel-item>
  </el-carousel>
  <div class="product-title">产品展示<small>PRODUCT DISPLAY</small></div>
  <Product :product-data="productData" />
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
  <Footer :service-data="serviceData"/>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import Product from "@/components/productList";
import { $httpNavbar } from "@/api/index.js";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    Product,
  },
  data() {
    return {
      bannerHeight: "",
      detailImg: require("@/static/1.jpg"),
      details: "",
      productTxt: "",
      bannerItem: [
        {
          imgUrl: "./static/banner1.jpg",
          path: "/contactUs",
        }
      ],
      // 产品展示
      productData: "",
      serviceData: ""
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
    getHttpData() {
      $httpNavbar().then((response) => {
        let resData = response.data;
        this.bannerItem = resData.bannerItem;
        this.productData = resData.productData;
        this.productTxt = resData.productTxt;
        this.details = resData.details;
        this.serviceData = resData.serviceData;
      });
    },
  },
  mounted() {
    this.getHttpData();
    this.screenWidth = window.innerWidth;
    this.setSize();
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize();
    };
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
