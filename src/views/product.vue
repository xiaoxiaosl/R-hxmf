<template>
  <Header />
  <div class="product">
    <div class="picture">
      <img :src="bannerImg.imgUrl" alt="bannerImg.label">
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) in tabs" 
    :key="index" 
    :label="item.label"
    :name="item.tabIndex">
      <div class="contact-panel">
        <div class="contact-panel_title">{{item.label}}</div>
        <h4>{{item.describe}}</h4>
        <productList :product-list="productList" :styleHide="styleHide"/>
      </div>
    </el-tab-pane>
  </el-tabs>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import productList from '@/components/productList'

export default {
  name: 'product',
  components: {
    Header,
    Footer,
    productList
  },
  data() {
    return {
      activeName: '1',
      styleHide: '',
      getSlidePerViews: '',
      bannerImg: {
        imgUrl: require('@/static/product.png'),
        label: '产品介绍'
      },
      tabs: [
        {
          label: 'Phm华西玛法',
          tabIndex: '1',
          describe: '专业修护线'
        },
        {
          label: '小桂花',
          tabIndex: '2',
          describe: '日常护理线'
        }
      ],
      productList: [
        {
          imgUrl: require("@/static/2.jpg"),
          label: '婴儿桂花',
          title: '婴儿桂花多效修护霜  50g',
          detail: '专为湿痒肌肤设计,高效补水保湿',
          path: "/contactUs",
        },
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
          detail: '专为湿痒肌肤设计,高效补水保湿'
        },
        {
          imgUrl: require("@/static/4.jpg"),
          label: '婴儿桂花',
          title: '婴儿桂花多效修护霜  50g',
          detail: '专为湿痒肌肤设计,高效补水保湿'
        }
      ]
    }
  },
  methods: {
    setSwiperStyle() {
      let len = this.productList.length;
      let lenMo = len/4;
      if (lenMo<=1){
        this.styleHide = {
          'display': 'none'
        }
        console.log(this.styleHide)
      } else {
        this.styleHide = {
          'display': 'block'
        }
      }
    },
    
    handleClick(tab) {
      if (tab.paneName == 2) {
        this.productList = [  
          {
            imgUrl: require("@/static/5.jpg"),
            label: '婴儿桂花',
            title: '婴儿桂花多效修护霜  50g',
            detail: '专为湿痒肌肤设计,高效补水保湿',
            path: "/contactUs",
          }
        ]
        this.setSwiperStyle()
      } else {
        this.productList = [
            {
              imgUrl: require("@/static/2.jpg"),
              label: '婴儿桂花',
              title: '婴儿桂花多效修护霜  50g',
              detail: '专为湿痒肌肤设计,高效补水保湿',
              path: "/contactUs",
            },
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
              imgUrl: require("@/static/4.jpg"),
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
          }
        ]
        this.setSwiperStyle()
      }
    },
  },
  mounted() {
    this.setSwiperStyle();
  }
}
</script>

<style scoped lang="scss">
.product {
  text-align: center;

  img {
    width: 100%;
  }
}
</style>
