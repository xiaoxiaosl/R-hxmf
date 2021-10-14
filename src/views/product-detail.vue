<template>
  <Header />
  <div class="product-detail panel-layout">
    <div class="crumbs">产品介绍<em>婴儿桂花多效修护霜</em></div>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    let id = this.$route.query
    console.log(id)
  }
}
</script>

<style lang="scss" scoped>
.crumbs {

  em {
    color: #1f70b8;
    font-style: normal;
    &:after {
      border-bottom: 4px solid transparent;
      border-left: 6px solid #a5a5a5;
      border-top: 4px solid transparent;
      color: #989494;
      content: "";
      height: 0;
      position: absolute;
      right: 0;
      top: 7px;
      width: 0;
    }
  }
}
</style>