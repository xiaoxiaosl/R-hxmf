<template>
  <div class="product panel-layout">
    <el-carousel :height="bannerHeight + 'px'" :interval="50000" :autoplay="flase" arrow="always" indicator-position="none">
      <el-carousel-item :key="index" pause-on-hover="true">
          <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
          </ul>
      </el-carousel-item>
      <el-carousel-item :key="index" pause-on-hover="true">
          <ul>
              <li>5</li>
              <li>6</li>
              <li>7</li>
       
          </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerItem: [
        {
          imgUrl: require("@/static/banner1.jpg"),
          path: "/about",
        },
        {
          imgUrl: require("@/static/banner2.jpg"),
          path: "/about",
        },
        {
          imgUrl: require("@/static/banner3.jpg"),
          path: "/about",
        },
        {
          imgUrl: require("@/static/banner4.jpg"),
          path: "/about",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

ul {
    width: 1350px;
}
ul li { 
    float: left;
    width: 375px;
    height: 375px;
}

.product .el-carousel__item {
    width: 375px;
}
</style>