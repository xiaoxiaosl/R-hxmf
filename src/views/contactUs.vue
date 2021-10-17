<template>
  <Header />
  <div class="picture">
    <img src="@/static/about-banner.png" alt="联系我们">
  </div>
  <div class="contact-panel">
    <div class="contact-panel_title">联系我们</div>
    <ul>
      <li v-for="(item, index) in contact" :key="index">
        <img :src="item.imgUrl" :alt="item.title">
        <p>{{item.title}}</p>
        <p>{{item.describe}}</p>
      </li>
    </ul>
  </div>
  <div class="picture">
    <img src="@/static/about-map.png" alt="联系我们">
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'home',
  data() {
    return {
      contact: [
        {
          title: '官方微博',
          imgUrl: require('@/static/weibo.png'),
          describe: '@PhM华西珐玛',
        },
        {
          title: '官方微信',
          imgUrl: require('@/static/weixin.png'),
          describe: 'phm-cd525',
        },
        {
          title: '客服电话',
          imgUrl: require('@/static/telphone.png'),
          describe: '028-65232887'
        }
      ]
    }
  },
  components: {
    Header,
    Footer,
  }
}
</script>
<style scoped lang="scss">
.picture {
  text-align: center;

  img {
    width: 100%;
    vertical-align: middle;
  }
}

ul {
  text-align: center;
  li {
    min-width: 177px;
    display: inline-block;
    margin-bottom: 65px;
    margin-left: 47px;
    margin-right: 47px;
    padding: 30px 0;
    border: 1px solid #1f70b8;
  }
}
p {
  padding: 0;
  margin-bottom: 0;
  font-size: 16px;
}

</style>