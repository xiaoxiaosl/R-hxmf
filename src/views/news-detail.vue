<template>
  <Header />
  <div class="contact-panel">
    <div class="panel-layout">
      <div class="crumbs">
        <em @click="$router.back(-1)">新闻资讯</em>{{ NewsData.title }}
      </div>
      <div class="news-panel-detail">
        <div class="title">
          {{ NewsData.title }}
          <p>{{ NewsData.time }}</p>
        </div>
        <div class="news-cot" v-html="NewsData.content"></div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

const NewsData = [
  {
    title: "华西珐玛 婴儿桂花多效修护霜",
    time: '2021-06-12 15:35:26',
    content: `
    <p>汾河下游遭遇近40年来最大洪峰，山西37条河流暴发洪水，乌马河、汾河、磁窑河等堤防决口，6021.36公里公路灾损，76个县175.71万人受灾，紧急转移安置12.01 万人，农作物受灾面积达357.69万亩，直接经济损失 50.29 亿元。</p>
    <p>山西省委、省政府迅速应对，第一时间启动救灾响应，及时调拨和下拨救灾物资资金，各级党委政府、人民群众和救援队伍闻“汛”而动，众志成城，打响了一场防汛救灾、恢复重建家园的“攻坚战”。</p>
    <p><img src="https://inews.gtimg.com/newsapp_bt/0/14075913185/1000" alt="">“10月2日至10月7日，全省平均降水量119毫米，汾河流域平均降雨量132.6毫米，均远超历史同期水平。这是山西有气象观测记录以来秋季最强的降水过程。”山西省气象局副局长王文义说。</p>
  `,
  },
  {
    title: "多地调研报告显示，重男轻女观念大幅改变",
    time: '2021-06-12 15:35:26',
    content: `
    <p>根据《国家统计局关于开展农村青年婚姻关系调研的通知》，今年6、7月间，多地统计部门开展了农村青年婚姻关系调研。从7月中旬到目前，多地密集发布相关调研报告的结果。</p>
    <p>青岛市统计局公布的青岛市农村青年婚姻关系调查报告显示，该市农村青年生育二孩、三孩意愿不强。随着农村社会保障体系的逐步完善，“养儿防老”存在的动因已弱化，子女养育成本高居不下和当代农村青年追求个人生活品质导致生育意愿不强。已婚调查对象，生育1个孩子的占比58.43%，生育2个孩子的占比29.78%，未生育孩子的占比11.8%。调查对象生育二孩意愿不高；对于刚出台的三孩政策未有积极呼应。</p>
    <p><img src="http://www.phm-cd.com/img/s1.png" alt="">宁波市农村青年婚姻关系调研报告也显示，多数农村青年对生育二孩或三孩的意愿普遍不高，尤其是女性青年。问卷结果显示，已婚或离异的受访者中，育有一孩的比例最高，为62.50%；受二孩政策影响，育有二孩的比例虽然居第二位，但比例仍为23.21%；育有三孩及以上的比例更是低至0.89%。此外，13.39%的受访者未生育孩子。从城乡看，生育二孩的主力军在乡村。数据显示，在街道和镇层面的农村青年生育二孩的比例明显低于在乡层面的农村青年，三者比例分别为0.00%、6.90%和44.44%。</p>
  `,
  },
];
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      NewsData: "",
      activeIndex: 0,
      detailImg: require("@/static/1.jpg"),
    };
  },
  mounted() {
    let id = this.$route.query;
    this.NewsData = NewsData[id.id];
  },
};
</script>

<style lang="scss">
.news-panel-detail {
  padding: 40px 0;

  .title {
    font-size: 28px;
    font-weight: 600;

    p {
      margin-top: 8px;
      color: #838383;
      font-size: 14px;
      font-weight: normal;
    }
  }
  .news-cot {
    margin-top: 60px;
    color: #535353;
    font-size: 18px;
    line-height: 2.2;
    word-wrap: break-word;
    text-align: left;
    img {
      display: block;
      max-width: 100%;
      margin: .6em auto;
    }
    p {
      margin-bottom: 2em;
      text-indent: 2em;
    }
  }
}
</style>