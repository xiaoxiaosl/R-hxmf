<template>
  <Header />
  <div class="picture">
    <img :src="bannerImg.imgUrl" alt="bannerImg.label">
  </div>
  <div class="contact-panel">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="(item, index) in tabs" 
    :key="index" 
    :label="item.label"
    :name="item.tabIndex">
      <div class="contact-panel_title">{{item.label}}</div>
      <h4>{{item.describe}}</h4>
      <productList :product-data="productData" :styleHide="styleHide"/>
    </el-tab-pane>
  </el-tabs>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import productList from '@/components/productList'

const productData = [
            {
              imgUrl: require("@/static/2.jpg"),
              label: '婴儿桂花',
              title: '婴儿桂花多效修护霜  50g',
              detail: '专为湿痒肌肤设计,高效补水保湿',
              id: '0',
            },
            {
              imgUrl: require("@/static/2.jpg"),
              label: '婴儿桂花',
              title: '婴儿桂花多效修护霜  50g',
              detail: '专为湿痒肌肤设计,高效补水保湿',
              id: '0',
            },
            {
              imgUrl: require("@/static/3.jpg"),
              label: '婴儿桂花',
              title: '婴儿桂花多效修护霜  50g',
              detail: '专为湿痒肌肤设计,高效补水保湿',
              id: '1',
            },
            {
              imgUrl: require("@/static/4.jpg"),
              label: '婴儿桂花',
              title: '婴儿桂花多效修护霜  50g',
              detail: '专为湿痒肌肤设计,高效补水保湿',
              id: 'https://www.baidu.com',
            },
            {
            imgUrl: require("@/static/4.jpg"),
            label: '婴儿桂花',
            title: '婴儿桂花多效修护霜  50g',
            detail: '专为湿痒肌肤设计,高效补水保湿',
            id: 1,
          }
        ]
// 传参后的模拟数据
const productData2 = [  
          {
            imgUrl: require("@/static/5.jpg"),
            label: '婴儿桂花',
            title: '婴儿桂花多效修护霜  50g',
            detail: '专为湿痒肌肤设计,高效补水保湿',
            id: '1',
          }
        ]
export default {
  name: 'product',
  components: {
    Header,
    Footer,
    productList
  },
  data() {
    return {
      activeName: '0',
      styleHide: '',
      bannerImg: {
        imgUrl: require('@/static/product.png'),
        label: '产品介绍'
      },
      tabs: [
        {
          label: 'Phm华西玛法',
          tabIndex: '0',
          describe: '专业修护线'
        },
        {
          label: '小桂花',
          tabIndex: '1',
          describe: '日常护理线'
        }
      ],
      productData: ''
    }
  },
  methods: {
    setSwiperStyle() {
      let len = this.productData.length;
      let lenMo = len/4;
      if (lenMo<=1){
        this.styleHide = {
          'display': 'none'
        }
      } else {
        this.styleHide = {
          'display': 'block'
        }
      }
    },
    handleClick(tab) {
      if (tab.paneName == 2) {
        this.productData = productData2
        this.setSwiperStyle()
      } else {
        this.productData = productData
        this.setSwiperStyle()
      }
    },
  },
  mounted() { 
    this.productData = productData
    this.setSwiperStyle();
  }
}
</script>

<style scoped lang="scss">
.product {
  text-align: center;
}
</style>
