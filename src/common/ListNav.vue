<template>
  <div class="list-nav">
    <ul class="list">
      <li>首页</li>
      <li>手机</li>
      <li>官方配件</li>
      <li>周边产品</li>
      <li>第三方配件</li>
      <li>全部商品</li>
      <li>服务</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListNav',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.list-nav {
  width: 1000px;
  height: 60px;
  margin: 0 auto;
  border-bottom: 1px solid #989898;
}
.list-nav .list {
  width: 100%;
  height: 100%;
}
.list-nav .list>li {
  float: left;
  width: 142px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
}
.list-nav .list>li:hover {
  color: #5079e1;
}
</style>
