<template>
  <Header />
  <div class="contact-panel">
    <div class="panel-layout">
      <div class="crumbs">
        <em @click="$router.back(-1)">产品介绍</em>{{ProductData.alt}}
      </div>
      <div class="product-detail">
        <div class="Thumbnail">
          <img
            :class="{ active: activeIndex == index }"
            v-for="(item, index) in ProductData.Thumbnail"
            :key="index"
            :src="item"
            :alt="ProductData.alt"
            @click="activeIndex = index"
          />
        </div>
        <div class="product-detail-panel">
          <div class="product-detail-pic">
            <img
              :src="item"
              v-for="(item, index) in ProductData.picture"
              :key="index"
              v-show="activeIndex == index"
            />
          </div>
          <div class="product-detail-describe">
            <h4>{{ ProductData.title }}</h4>
            <h6>{{ ProductData.smallTitle }}</h6>
            <div
              class="product-detail-txt"
              v-html="ProductData.describeCot"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

const ProductData = [
  {
    // 缩略图
    Thumbnail: [
      require("@/static/q1.png"),
      require("@/static/q2.png"),
      require("@/static/q3.png"),
    ],
    picture: [
      require("@/static/q1.png"),
      require("@/static/q2.png"),
      require("@/static/q3.png"),
    ],
    alt: "婴儿桂花多效修护霜",
    title: "华西珐玛 婴儿桂花多效修护霜",
    smallTitle: "专为湿痒肌肤设计，高效补水保湿",
    describeCot: `
    <p>专利桂花成分Osthin™，深入修护宝宝肌肤</p>
    <p>蕴含天然甘油及角鲨烷精华，高效补水、锁水</p>
    <p>创新技术，为宝宝肌肤形成保护屏障，提升肌肤自愈力</p>
  `,
  },
  {
    // 缩略图
    Thumbnail: [
      require("@/static/y1.png"),
      require("@/static/y2.png"),
      require("@/static/y3.png"),
    ],
    picture: [
      require("@/static/y1.png"),
      require("@/static/y2.png"),
      require("@/static/y3.png"),
    ],
    alt: "婴幼儿桂花清凉祛痱凝露",
    title: "华西珐玛 婴幼儿桂花清凉祛痱凝露 ",
    smallTitle: "快速抚平热痱，清凉舒爽不刺激",
    describeCot: `
    <p>清爽凝露质地，小分子，易吸收；</p>
    <p>快速抚平因热痱引起的肌肤刺痒等不适，天然清凉舒爽</p>
    <p>温和不刺激，小巧随行，妈妈必备。</p>
  `,
  }
];
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      ProductData: "",
      activeIndex: 0,
      detailImg: require("@/static/1.jpg"),
    };
  },
  mounted() {
    let id = this.$route.query;
    this.ProductData = ProductData[id.id];
  },
};
</script>

<style lang="scss" scoped>

.product-detail {
  display: flex;
  margin-top: 25px;
  margin-bottom: 160px;
  text-align: left;
}
.Thumbnail {
  width: 78px;
  img {
    width: 78px;
    height: 78px;
    margin-bottom: 8px;
    border: 1px solid #d7dadc;
  }
  .active {
    border: 1px solid #1f70b8;
  }
}
.product-detail-panel {
  flex: 1;
  margin-left: 15px;
}
.product-detail-pic {
  overflow: hidden;
  float: left;
  width: 568px;
  height: 405px;
  margin-right: 35px;
}
.product-detail-describe {
  float: left;

  h4 {
    text-align: left;
    margin-bottom: 10px;
    font-weight: 400;
  }
  h6 {
    color: #7d949e;
    font-size: 18px;
    font-weight: 400;
  }
}
.product-detail-txt {
  width: 390px;
  padding: 10px;
  margin-top: 18px;
  background-color: #eaeef1;
  line-height: 35px;
  p {
    position: relative;
    padding-left: 15px;
    font-size: 16px;

    &:after {
      content: "·";
      position: absolute;
      top: -2px;
      left: 0;
      font-size: 36px;
    }
  }
}
// ::-webkit-scrollbar{display:none}
</style>