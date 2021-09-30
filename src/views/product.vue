<template>
  <Header />
  <div class="product">
    <div class="picture">
      <img src="@/static/product.png" alt="产品介绍">
    </div>
    <div class="panel-layout">
      <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabs" 
      :key="index" 
      :label="item.label"
      :name="item.tabIndex">
        <div class="contact-panel">
          <div class="contact-panel_title">{{item.label}}</div>
          <h4>{{item.describe}}</h4>
        </div>
      </el-tab-pane>
    </el-tabs>
    
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'product',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeName: '1',
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
      ]
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab)
    },
  }
}
</script>

<style scoped>
.product {
  text-align: center;
}
</style>
