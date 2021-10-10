<template>
  <div class="product-panel">
    <div class="panel-layout" style="position: relative">
      <swiper
        :slides-per-view="slidePerViews"
        :space-between="spaceBetween"
        :navigation="navigation"
        :observer="observer"
        :observeParents="true"
        :isHide='false'
      >
        <swiper-slide v-for="(item, index) in productList" :key="index" @click="PageJump(item.path)">
          <img :src="item.imgUrl" :alt="item.label" />
          <h5>{{ item.title }}</h5>
          <p>{{ item.detail }}</p>
          <span>了解详情</span>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" :style="styleHide"></div>
      <div class="swiper-button-next" :style="styleHide"></div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation]);
export default {
  props: ["productList", 'styleHide'],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slidePerViews: 4,
      spaceBetween: 50,
      observer: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
  },
  methods: {
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

<style lang='scss'>
.product-panel {
  overflow: hidden;
  margin-bottom: 140px;
  text-align: center;

  img {
    width: 100%;
  }

  h5 {
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: normal;
  }

  p {
    margin-bottom: 15px;
    margin-top: 10px;
  }

  span {
    background-color: #282828;
    color: #fff;
    display: inline-block;
    padding: 10px 25px;
  }
}

// swiper
.swiper-slide {
  cursor: pointer;
}
.swiper-button-next,
.swiper-button-prev {
  width: 40px !important;
  height: 40px !important;
  text-indent: -999em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAY1BMVEUAAADH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+zH2+yrZ2BYAAAAIHRSTlMACrpD7Bu1+jYEmK+U44dR3dPIwnhmE1eIWRT01IZzcf0VifQAAAEpSURBVDjLjZXploIwFIOrlpalVFZFZ/ve/ykHzxGni3O4+QeEpgm3QUWoyqnptbW6b6ayUv+h8C0BWl+8pV2cZUVn3LI407HCukvOu2pgnIvX8vMI6GtCq2rAlPHN0gB1tNWDAX3OZc4azCFYr4GheOtvgOZvzRqOwXuR1hHqlw8YNl7OHOD2zEWjA91MfX1834RDH7mjp3hhMfGT03e8EYN9KHpI8vtIrJXg12haxkTLpCGMtNWDPmeRJMz5ITpBoXaYBUyqoVNqj9nRqB6jdpmGXmncNpCnAOc2ZDq0svjn1ScpfjbiF1ZMFEuLzYjjEQcu/oTioZCPmXxwlRMcBenhukiPq7QAxJUiLSlp7cmK9JbL3Outmr3fqrm+v09sict+Cf2Jfx+/E9soUQD7bmoAAAAASUVORK5CYII=)
    no-repeat;
}
.swiper-button-prev {
  left: -100px !important;
  transform: rotate(180deg);
}
.swiper-button-next {
  right: -100px !important;
  // transform: rotate(180deg);
}
.my-button-hidden {
  display: none;
}
</style>