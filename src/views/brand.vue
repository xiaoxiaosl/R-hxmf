<template>
  <Header />
  <div class="picture">
    <img :src="brandData.bannerUrl" alt="brandData.label">
  </div>
  <div class="contact-panel">
    <div class="contact-panel_title">{{brandData.label}}</div>
    <h4>{{brandData.describe}}</h4>
    <h6 class="brand-h6" v-html="brandData.describeSmall"></h6>
    <div class="panel-layout" v-html="brandData.html"></div>
  </div>
  <Footer :service-data="serviceData"/>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import { $httpNavbar } from "@/api/index.js";

let brandData = [{
        bannerUrl: require('@/static/banner4.png'),
        label: '创始故事',
        describe: '探索天然桂花的无限可能，寻找皮肤自愈新生力',
        describeSmall: '',
        html: `
          <div class="brand-panel">
            <div class="brand-txt" style="margin-right: 166px; margin-left: 40px;">
              <h3>2008</h3>
              <p>2008年，华西教授黄静走在校园中，突然又闻到阵阵桂花香气，
                <br> 这是今年桂花的第三次开花，不同以往。
                <br> 30年的天然药物研究经验使他对这些小花产生了好奇，
                <br> 而翻阅中外文献，关于它的篇章，却只有寥寥数篇，
                <br> 反倒是古代药典中给与了高度的评价，说“桂，能治百病”。
                <br> 从此，他与这些小花们结下了不解之缘。
              </p>
              </div><div class="brand-pic"><img src="http://www.phm-cd.com/img/s1.png" alt="">
            </div>
          </div>
          <div class="brand-panel">
            <div class="brand-pic"><img src="http://www.phm-cd.com/img/s2.png" alt=""></div>
            <div class="brand-txt" style="text-align: left; margin-left: 70px;">
              <h3>2016</h3>
              <p>2016年，黄静教授已经从新鲜桂花中发现了上百种化合物，<br> 其中33种，为人类首次发现，
                <br> 神奇的是，这些成分中，有的对于皮肤控油、止痒、抗炎等拥有良好的功效。
                <br> 超越许多植物、甚至药物的效果，
                <br> 在此之前，桂花总是跟吃有关，
                <br> 上千年的食用历史证明了它拥有足够的安全性，
                <br> 因此黄教授成立了“华西珐玛”，意在将研究成果制成产品，
                <br> 将有效与安全，带给更多被皮肤问题困扰的人群。
              </p>
            </div>
          </div>
          <div class="brand-panel">
            <div class="brand-txt" style="margin-right: 120px; padding-left: 60px;">
              <h3>2018</h3>
              <p>“源自天然、科学萃取、至简配方、安全有效”是华西珐玛的准则，<br> 也是黄教授的理念，
                <br> 他用独特的萃取方式，
                <br> 将新鲜桂花中的有效成分萃取出来，
                <br> 并将其中独有的止痒、抗炎、修复的成分命名为——Osthin™，
                <br> 通过精简的配方模式，融入系列的产品之中。
                <br> 华西珐玛的所有产品，均为孕妈妈、老人、甚至新生儿可用，
                <br> 对皮肤无负担、无刺激性，即便是健康肌肤亦能每日使用。
              </p>
              </div><div class="brand-pic"><img src="http://www.phm-cd.com/img/s3.png" alt="">
            </div>
          </div>
          <div class="brand-panel">
            <div class="brand-txt" style="margin-left: 360px; text-align: left;">
              <h3 style="margin-top: 30px; font-size: 36px;">创始人</h3>
              <h4>黄静教授</h4>
              <p style="margin-top: 4px;">
                华西药学院教授/博士生导师<br>40年天然药化研究经验<br>成都药学会理事长
              </p>
              </div><div class="brand-pic"><img src="http://www.phm-cd.com/img/s4.png" alt="">
            </div>
          </div>
        `
      },{
        bannerUrl: require('@/static/banner5.png'),
        label: '品牌理念',
        describe: '承诺天然/科学/安全/用心',
        describeSmall: '',
        html: `
          <div class="brand-panel-two">
            <div class="brand-txt" style="padding-right: 55px;">
              <h3>源自天然</h3>
              <p>每年秋季，我们都会到青城山下采摘新鲜桂花，<br> 作为所有产品的核心原料，
                <br> 并将它们以无添加的方式进行处理，
                <br> 以保证天然性。
              </p>
            </div>
            <div class="brand-pic"><img src="http://www.phm-cd.com/img/s5.png" alt=""></div>
          </div>
          <div class="brand-panel-two" style="margin-left: 215px;">
            <div class="brand-pic"><img src="http://www.phm-cd.com/img/s6.png" alt=""></div>
            <div class="brand-txt" style="padding-left: 55px; text-align: left;">
              <h3>科学萃取</h3>
              <p>在实验室及我们耗费上百万建立的工厂中，<br> 每一朵桂花都被精心处理，
                <br> 以黄教授独创的萃取方式，
                <br> 获取每一滴珍贵的精华。
              </p>
            </div>
          </div>
          <div class="brand-panel-two">
            <div class="brand-pic"><img src="http://www.phm-cd.com/img/s7.png" alt=""></div>
            <div class="brand-txt" style="padding-right: 55px;">
              <h3>至简配方</h3>
              <p>抛弃以“添加”为主的传统配方模式，
                <br>以药学理念，只添加必要成分，
                <br>极大程度减少过敏的风险，
                <br>确保功效得到最大发挥。
              </p>
            </div>
          </div>
          <div class="brand-panel-two" style="margin-left: 215px;">
            <div class="brand-pic"><img src="http://www.phm-cd.com/img/s8.png" alt=""></div>
            <div class="brand-txt" style="padding-left: 55px; text-align: left;">
              <h3>安全有效</h3>
              <p>过去、现在、未来，我们都积极的与临床实验合作，
                <br>使产品的有效性得到更多人的见证；
                <br>此外，每一份产品均经过国家权威实验室检验，
                <br>给与你更安心的保障。
              </p>
            </div>
          </div>
        `
      },{
        bannerUrl: require('@/static/banner6.png'),
        label: '品牌理念',
        describe: '承诺天然/科学/安全/用心',
        describeSmall: `十年间，在不断改良下，我们拥有了完整的萃取流程，<br> 保证产品从源头上始终如一的天然、新鲜，让自然治愈的能量，一直守护肌肤。
          `,
        html: `
          <div class="brand-panel-three" style="position: relative; background-color: rgb(240, 246, 229);">
            <div class="brand-panel-three-txt one">
              <h3><em>1</em>新鲜桂花摘取</h3>
              <p>在秋高气爽的季节，<br>
              将青城山下被露水环绕的黄色花瓣，<br> 
              经人工一一摘取，<br>为来年封存一整个秋季。
              </p>
            </div>
            <div class="bg-color"></div>
          </div>
          <div class="brand-panel-three" style="position: relative; background-color: rgb(250, 249, 232);">
            <div class="brand-panel-three-txt two" style="margin-left: 250px; padding-left: 470px; padding-right: 0px;">
              <h3 style="color:rgb(175, 171, 97)"><em>2</em>真空冰鲜封存</h3>
              <p style="color: rgb(205, 202, 150);">在秋高气爽的季节，<br>
              将青城山下被露水环绕的黄色花瓣，<br> 
              经人工一一摘取，<br>为来年封存一整个秋季。
              </p>
            </div>
            <div class="bg-color" style="right: 810px; left: auto;"></div>
          </div>
          <div class="brand-panel-three" style="position: relative; background-color: rgb(249, 249, 249);">
            <div class="brand-panel-three-txt three">
              <h3 style="color: rgb(137, 90, 90);"><em>3</em>独创萃取方式</h3>
              <p style="color: rgb(164, 135, 135);">好的产品，需要耐心，需要遵循自然本身的规律，<br>我们采取独创的物理萃取方式，<br>在获取新鲜桂花的有效成分之时，<br>不额外添加一滴水，<br>不使用任何化学有机试剂，<br>让每一滴精萃都始自桂花，归于桂花。
              </p>
            </div>
            <div class="bg-color"></div>
          </div>
          <div class="brand-panel-three" style="position: relative; background-color: rgb(239, 250, 253); margin-bottom: 60px;">
            <div class="brand-panel-three-txt four" style="margin-left: 250px; padding-left: 470px; padding-right: 0px;">
              <h3 style="color: rgb(31, 112, 184);"><em>4</em>真空冰鲜封存</h3>
              <p style="color: rgb(142, 172, 198);">新鲜桂花很难保存<br>稍不注意，气味及质地就会改变，<br> 我们采用独特的真空冰鲜方式，<br>让时间的舞曲按下暂停。
              </p>
            </div>
            <div class="bg-color" style="right: 810px; left: auto;"></div>
          </div>
        `
      }]
export default {
  name: "home",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      brandData: '',
      serviceData: ''
    }  
  },
  mounted() {
    // 请求的时候使用
    // this.getHttpData()
    let id = this.$route.query
    this.brandData = brandData[id.id]
  },
  methods: {
    PageJump(link) {
      if (link.indexOf("https") != "-1") {
        window.location.href = link;
      } else {
        this.$router.push(link);
      }
    },
    getHttpData() {
      let id = this.$route.query
      $httpNavbar(id).then((response) => {
        let resData = response.data;
        // this.brandData = resData.brandData[id.id]
        this.serviceData = resData.serviceData;
      });
    }
  },
  watch: {
    '$route' () {
      let id = this.$route.query
      this.brandData = brandData[id.id]
    }
  }
};
</script>

<style lang="scss">
.brand-panel {
  overflow: hidden;
  padding-top: 50px
}
.brand-panel-two {
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 1080px;
  margin-bottom: 70px;
  margin-top: 65px;
  box-shadow: rgb(0 0 0 / 7%) 1px 0px 15px;

  .brand-txt {
    flex: 1 1 0%;
    color: #406688;

    h3 {
      border-bottom: 2px solid rgb(31, 112, 184);
      color: rgb(40, 40, 40);
      display: inline-block;
      font-size: 24px;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 5px;
      padding-bottom: 10px;
    }
  }
}
.brand-txt {
  float: left;
  color: #477baa;
  font-size: 16px;
  line-height: 35px;
  text-align: right;

  p {
    margin-top: 15px;
  }

  h3 {
    margin-bottom: 25px;
    margin-top: 70px;
    color: #1f70b8;
    font-size: 48px;
  }
  h4 {
    border-bottom: 2px solid rgb(37, 185, 239);
    color: rgb(37, 185, 239);
    margin-bottom: 0px;
    padding-bottom: 10px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
  }
}
.brand-pic {
  float: left;
}
.brand-h6 {
  margin-top: -25px;
  color: #5f5f5f;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
}
.brand-panel-three .bg-color {
  position: absolute;
  top: 0;
  left: 810px;
  width: 100%;
  height: 393px;
  background-color: #fff;
}
.brand-panel-three-txt{
  background: url(../static/s12.png) 100% 0 no-repeat;
  color: #86a44f;
  height: 393px;
  margin-top: 60px;
  padding-left: 170px;
  padding-right: 300px;
  padding-top: 85px;
  position: relative;
  text-align: left;
  width: 1047px;
  z-index: 1;

  h3 {
    color: #75871c;
    font-size: 30px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
    margin-top: 0;
     em {
      font-family: "Adobe\9ED1\4F53 Std R";
      font-size: 70px;
      font-weight: 550;
      margin-right: 25px;
      vertical-align: -10px;
    }
  }
  p {
    margin-top: 15px;
    line-height: 30px;
    padding-left: 68px;
  }
}
.brand-panel-three-txt.two {
  background: url(../static/s9.png) 0 0 no-repeat!important;
}
.brand-panel-three-txt.three {
  background: url(../static/s10.png) 100% 0 no-repeat!important;
}
.brand-panel-three-txt.four {
  background: url(../static/s9.png) 0 0 no-repeat!important;
}
</style>
