<template>
  <ul class="navbar panel">
    <li>
      <span class="active">首页</span>
    </li>
    <li>
      <span>品牌探索</span>
    </li>
    <li>
      <span>核心技术</span>
    </li>
    <li>
      <span>产品介绍</span>
    </li>
    <li>
      <span>联系我们</span>
    </li>
    <li>
      <span>官网店铺</span>
    </li>
  </ul>
</template>

<script>
export default {
  name:'navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex: 1;
  margin-left: -15px;
  align-items: flex-start;
}
.navbar li {
  margin-left: 15px;
  margin-right: 15px;
}
.navbar li span {
  display: block;
  padding: 25px 27px;
  text-decoration: none;
  transition: .2s;
}
.active {
  background-color: #1f70b8;
  color: #fff;
}

</style>