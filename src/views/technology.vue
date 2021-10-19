<template>
  <Header />
  <div class="picture" v-cloak>
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
        <div class="technology-detail" v-html="technologyHtml"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
import { $httpGet } from "@/api/index.js";

let technologyData = [{
        html: `
          <div class="technology-txt" style="margin-top: -30px;">
            sthin™源自被国人世代食用上千年的天然桂花。<br> 是经创始人黄静教授，耗费10年时间萃取的一种具止痒、抗炎、修护功效的活性成分。
            <br> 该成分已申请5项国家发明专利，且在临床皮肤实验中，效果超越两种常用糖皮质激素，并逐渐获得更多皮肤科专业人士的认可，
            <br> 成长为可减少或替代激素使用的新星。
          </div>
          <div class="technology-txt">Osthin™萃取过程复杂，且极其珍贵，<br> 每1000g鲜桂花，仅能萃取0.02g的Osthin™，但每一滴小小的Osthin™就能发挥巨大的能量，快速深入皮肤止痒，
            <br> 加快肌肤自愈能力，是皮肤科领域不可多得的珍宝。
          </div>
          <div class="panel-layout">
            <h3 class="technology-h3">源自桂花，天然止痒、抗炎、修复，<br><small>申请5项国家发明专利</small></h3>
            <div class="panel-layout">
             <img src="http://www.phm-cd.com/img/s13.png">
              <div class="m1-info">
                <p><i>1</i>植物精油的制备方法（申请号201611241150.7）/</p>
                <p><i>2</i>植物精油的提取装置和提取方法（申请号201710715407.6）/</p>
                <p><i>3</i>具有缓解皮肤瘙痒功效的皮肤养护/治疗组合物（申请号201710420375.7）/</p>
                <p><i>4</i>具有防治痤疮功效的皮肤养护/治疗组合物（申请号201710489353.6）/</p>
                <p><i>5</i>具有防治皮肤干燥综合征功效的皮肤养护/治疗组合物（申请号201710546318.3）</p>
              </div>
            </div> 
          </div>
          <div class="technology-bg"></div>
        `
      },{
        html: `
          <div class="technology-txt" style="margin-top: -30px;">
            无乳化剂的情况下，使Osthin™粒径达到传统乳化剂粒径的千分之一，
            <br> 能大幅提升Osthin™的皮肤渗透能力，使Osthin™在更小剂量的情况下，快速透过皮肤屏障运转到达颗粒层和基底层，
            <br> 刺激板层细胞合成脂质，修护皮肤屏障。
          </div>
          <h6>和传统乳化剂比较</h6>
          <div class="panel-layout">
            <table>
              <thead>
                <tr><th></th><th>工艺</th><th>缺点 </th><th>优势</th></tr>
              </thead>
              <tbody>
                <tr><td>纳米乳化技术</td><td>配方中添加乳化剂成分</td><td>乳化后分子粒径仅能达到1-10微米，难以被肌肤吸收。</td><td>成本低，来源广泛，配方模式相对固定</td></tr><tr><td>纳米乳化技术</td><td>不添加乳化剂的乳化技术
                </td><td>尚未发现明显缺陷
                </td><td>大幅度提升作用物活性；乳化后分子粒径仅为100-200，<br> 有利于大幅提升肌肤吸收率，并减少传统乳化剂的致敏风险。
                </td>
              </tr>
              </tbody>
            </table> 
          </div>
        `
      },{
        html: `
          <div class="technology-txt" style="margin-top: -30px;">
            打破传统以“添加”为主配方模式，只以核心成分+专利技术为准则，<br> 只添加必要有效成分，将敏感和刺激性尽可能弱化，确保功效性和安全性的完美结合。
          </div>
          <img src="http://www.phm-cd.com/img/s15.png">
          <p style="margin-top: 20px; margin-bottom: 25px">不添加激素、抗生素</p>
          <div class="technology-txt">
            我们的核心止痒、抗炎、修护成分，来自独有的桂花Osthin，<br> 
            其有效性在专利临床实验中被验证在止痒、修护方面超越如：醋酸地塞米松、尤柏松丁酸氢化可的松两类激素
          </div>
          <div class="technology-txt" style="color: rgb(31, 112, 184);">
            *[数据来源]具有缓解皮肤瘙痒功效的皮肤养护/治疗组合物<br>
            （专利申请号201710420375.7）
          </div>
          <div class="technology-txt">
            我们在配方中只选用必要的、被证实为安全的成分，<br> 
            让更多需要呵护的人群（如孕妈妈、宝宝）等能够安心的直接选用。
          </div>
          <h3 class="technology-h3" style="line-height: 1.2; padding-top: 75px">六大无添加<br><small style="color: rgb(56, 78, 97); font-size: 24px;"> 初心不变，天然之选</small></h3>
          <div class="technology-txt" style="margin-top: 30px; ">10年桂花潜心研究，向您承诺产品有效成分均采自“新鲜桂花”，<br>
经国家认证权威实验室检测，不含激素、抗生素、酒精、人工香精、色素，符合新生儿使用标准。</div>
          <img src="http://www.phm-cd.com/img/s16.png" style="margin-bottom: 35px">
          <div class="technology-bg" style="top: 565px;"></div>
        `
      }]
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeName: '0',
      bannerImg: '',
      tabs: '',
      technologyHtml: ''
    }  
  },
  methods: {
    handleClick() {
      this.getHttpData()
    },
    getHttpData() {
      $httpGet({id: this.activeName}).then((response) => {
        let resData = response.data;
        this.bannerImg = resData.bannerImg;
        this.tabs = resData.tabs;
        // axios 使用
        // this.technologyHtml = resData.technologyHtml[this.activeName];
        this.technologyHtml = technologyData[this.activeName].html;
        this.serviceData = resData.serviceData;
      });
    },
  },
  created() {
    this.getHttpData()
  }
};
</script>

<style lang="scss">
.technology {
  
  text-align: center;
}
.technology-txt {
  margin-bottom: 30px;
  color: #5f5f5f;
  font-size: 15px;
  line-height: 30px;
}
.technology-detail {
  position: relative;

  h6 {
    margin-top: 90px;
    margin-bottom: 25px;
    color: #007acd;
    font-size: 18px;
    font-weight: 540;
  }
  table {
    width: 100%;
    margin-bottom: 20px;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 15px;
    text-align: left;
    th {
      padding: 15px;
      background-color: #e5ecf0;
    }
    td {
      padding: 10px 15px;
      border-bottom: 1px solid #e5ecf1;
    }
  }
}
.technology-h3 {
  color: #1f70b8;
  font-size: 36px;
  font-weight: 500;
  padding-top: 30px;
  margin-bottom: 0;
  text-align: center;
  

  small {
    color: #d2a71e;
  }
}
.technology-bg {
  position: absolute;
  top: 277px;
  z-index: -1;
  width: 100vw;
  height: 550px;
  background-color: #f9fcff;
  border-top: 1px solid #e2ebf3;
}
.m1-info {
  color: #3a5879;
  float: right;
  margin-top: 69px;
  text-align: left;
  p {
    margin-bottom: 25px;

    i {
      display: inline-block;
      width: 21px;
      height: 35px;
      margin-right: 10px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAjCAMAAABM6rEUAAAAZlBMVEUAAABqia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia1qia38pEbhAAAAInRSTlMA/gQ+Lvl7uLGrXCDpx6NtaGI39duEJxUKz8GTM4FVTxjvUbYNoAAAAM9JREFUKM9t0tkOgjAQheGfpZWlgLIJ4vr+L6k1lUqHc0EmJ1+YCQEfzU6SS4LMoTjs0Ioq2aFI3FZA1Yb0BAJfZ5A4sxRO2YZGboiuARU4tdThdB3z4zoe85B67KnHjsb4xA7XDfzj2j5HRz0eJYXmg5/KUY/Vk2YhzNKQPUT7yOhL0ZY93STaqcMuE+swZ9GeDZdk539h0KLVA2Mv2n6EXIc0t9e97pvybsrvy1WBT6Hc+tbc4t+pN9OuBy5KpxNTqqP6//xymLuomwf3Ud5+NAgYHNZ32gAAAABJRU5ErkJggg==) no-repeat;
      font-style: normal;
      line-height: 40px;
      text-align: center;
    }
  }
}

</style>
