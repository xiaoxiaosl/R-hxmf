<template>
  <Header />
  <div class="about">
    <div class="picture">
      <img src="@/static/about-banner.png" alt="联系我们">
    </div>
    <div class="contact-panel">
      <div class="contact-panel_title">联系我们</div>
      <ul>
        <li>
          <img src="@/static/weibo.png" alt="微博">
          <p>官方微博</p>
          <p>@PhM华西珐玛</p>
        </li>
      </ul>
    </div>
    <div class="picture">
      <img src="@/static/about-map.png" alt="联系我们">
    </div>
  </div>
  <div class=""></div>
  <Footer />
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
  }
}
</script>
<style lang="scss">
.picture {
  text-align: center;

  img {
    width: 100%;
    vertical-align: middle;
  }
}
.contact-panel_title {
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 85px;
  margin-top: 65px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  &:before,
  &:after {
    content: "";
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 65px;
  }
  &::before {
    background-color: #f2f1f0;
    height: 1px;
    margin-left: -210px;
    width: 420px;
  }
  &:after {
    background-color: #007acd;
    height: 2px;
    margin-left: -73px;
    width: 146px;
  }
}
</style>