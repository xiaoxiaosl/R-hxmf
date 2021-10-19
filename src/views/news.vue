<template>
  <Header />
  <div class="picture">
    <img :src="bannerImg" alt="新闻资讯" />
  </div>
  <div class="contact-panel news">
    <div class="contact-panel_title">新闻资讯</div>
    <div class="panel-layout">
      <ul class="news-panel">
        <li
          v-for="(item, index) in newData"
          :key="index"
          @click="PageJump(item.id)"
        >
          <div class="time">
            <span class="day">{{ item.day }}</span>
            {{ item.time }}
          </div>
          <div class="news-cot">
            <div class="title">{{ item.title }}</div>
            <div class="news-detail">
              {{ item.newsCot }}
            </div>
            <div class="more">查看>></div>
          </div>
        </li>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalNum"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import { $httpGet } from "@/api/index.js";
const newData = [
  {
    id: 0,
    time: "2021-12",
    day: "08",
    title: "神舟十三号3名航天员进驻中国空间站全过程",
    newsCot:
      "改身份证上的名字不奇怪，但你见过要改身份证上“出生”二字吗？近日，四川泸州就发生了这样一件奇葩的事情。",
  },
  {
    id: 1,
    time: "2021-12",
    day: "08",
    title: "水墨动画《奇迹 有密码》之“最可爱的人”",
    newsCot:
      "长津湖的气温骤降，穿着单薄衣衫的志愿军战士们，在极寒风雪中被冻成冰雕，用生命谱写了惊天地泣鬼神的雄壮史诗。抗美援朝战争中，涌现出30多万名英雄功臣和近6000个功臣群体。《奇迹 有密码》系列水墨动画为你讲述“最可爱的人”。",
  },
  {
    time: "2021-12",
    day: "08",
    title: "山西：众志成城挺过艰难时刻",
    newsCot:
      "汾河下游遭遇近40年来最大洪峰，山西37条河流暴发洪水，乌马河、汾河、磁窑河等堤防决口，6021.36公里公路灾损，76个县175.71万人受灾，紧急转移安置12.01 万人，农作物受灾面积达357.69万亩，直接经济损失 50.29 亿元。",
  },
  {
    time: "2021-12",
    day: "08",
    title: "山西：众志成城挺过艰难时刻",
    newsCot:
      "汾河下游遭遇近40年来最大洪峰，山西37条河流暴发洪水，乌马河、汾河、磁窑河等堤防决口，6021.36公里公路灾损，76个县175.71万人受灾，紧急转移安置12.01 万人，农作物受灾面积达357.69万亩，直接经济损失 50.29 亿元。",
  },
  {
    time: "2021-12",
    day: "08",
    title: "水墨动画《奇迹 有密码》之“最可爱的人”",
    newsCot:
      "长津湖的气温骤降，穿着单薄衣衫的志愿军战士们，在极寒风雪中被冻成冰雕，用生命谱写了惊天地泣鬼神的雄壮史诗。抗美援朝战争中，涌现出30多万名英雄功臣和近6000个功臣群体。《奇迹 有密码》系列水墨动画为你讲述“最可爱的人”。",
  },
  {
    time: "2021-12",
    day: "07",
    title: "水墨动画《奇迹 有密码》之“最可爱的人”",
    newsCot:
      "长津湖的气温骤降，穿着单薄衣衫的志愿军战士们，在极寒风雪中被冻成冰雕，用生命谱写了惊天地泣鬼神的雄壮史诗。抗美援朝战争中，涌现出30多万名英雄功臣和近6000个功臣群体。《奇迹 有密码》系列水墨动画为你讲述“最可爱的人”。",
  },
  {
    time: "2021-12",
    day: "08",
    title: "山西：众志成城挺过艰难时刻",
    newsCot:
      "汾河下游遭遇近40年来最大洪峰，山西37条河流暴发洪水，乌马河、汾河、磁窑河等堤防决口，6021.36公里公路灾损，76个县175.71万人受灾，紧急转移安置12.01 万人，农作物受灾面积达357.69万亩，直接经济损失 50.29 亿元。",
  },
  {
    time: "2021-12",
    day: "07",
    title: "水墨动画《奇迹 有密码》之“最可爱的人”",
    newsCot:
      "长津湖的气温骤降，穿着单薄衣衫的志愿军战士们，在极寒风雪中被冻成冰雕，用生命谱写了惊天地泣鬼神的雄壮史诗。抗美援朝战争中，涌现出30多万名英雄功臣和近6000个功臣群体。《奇迹 有密码》系列水墨动画为你讲述“最可爱的人”。",
  },
  {
    time: "2021-12",
    day: "08",
    title: "水墨动画《奇迹 有密码》之“最可爱的人”",
    newsCot:
      "长津湖的气温骤降，穿着单薄衣衫的志愿军战士们，在极寒风雪中被冻成冰雕，用生命谱写了惊天地泣鬼神的雄壮史诗。抗美援朝战争中，涌现出30多万名英雄功臣和近6000个功臣群体。《奇迹 有密码》系列水墨动画为你讲述“最可爱的人”。",
  },
  {
    time: "2021-12",
    day: "07",
    title: "水墨动画《奇迹 有密码》之“最可爱的人”",
    newsCot:
      "长津湖的气温骤降，穿着单薄衣衫的志愿军战士们，在极寒风雪中被冻成冰雕，用生命谱写了惊天地泣鬼神的雄壮史诗。抗美援朝战争中，涌现出30多万名英雄功臣和近6000个功臣群体。《奇迹 有密码》系列水墨动画为你讲述“最可爱的人”。",
  },
];
console.log(newData)
export default {
  name: "home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      bannerImg: require('@/static/news.jpg'),
      newData: "",
      currentPage: 1,
      pageSize: 10,
      totalNum: 100
    };
  },
  methods: {
    PageJump(id) {
      this.$router.push({
        path: `/news-detail`,
        query: { id },
      });
    },
    handleCurrentChange(val) {
        $httpGet({page: val}).then((response) => {
          let resData = response.data;
          this.newData = resData.newData2
          this.totalNum = resData.total
      })
    }
  },
  created() {
    this.handleCurrentChange()
  }
}
</script>
<style scoped lang="scss">
.news {
  padding-bottom: 80px;
}
.picture {
  text-align: center;

  img {
    width: 100%;
    vertical-align: middle;
  }
}
.news-panel {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    display: flex;
    width: 48%;
    margin-bottom: 55px;
    cursor: pointer;
  }
  .time {
    width: 110px;
    height: 110px;
    background-color: #5fa7ef;
    color: #fff;
    font-size: 18px;

    span {
      display: block;
      margin-top: 12px;
      margin-bottom: 4px;
      font-size: 36px;
      text-align: center;
    }
  }
}
.news-cot {
  flex: 1;
  margin-left: 20px;
  text-align: left;
}
.title {
  font-size: 18px;
  margin-bottom: 12px;
}
.news-detail {
  position: relative;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #535353;
  line-height: 1.7;
  margin-bottom: 5px;
}
.more {
  text-align: right;
  color: #50a7ff;
}
</style>