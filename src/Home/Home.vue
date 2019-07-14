<template>
  <div class="Home">
    <div class="Home-box">
      <header class="Home-head">
        <a class="active">综合排序</a>
        <a>销量排序</a>
        <a>价格低到高</a>
        <a>价格高到低</a>
      </header>
      <home-list :list="ArrayList"></home-list>
    </div>
  </div>
</template>

<script>
import HomeList from '../components/List'
import getData from '../lib/newItemsData'
export default {
  name: 'Home',
  data () {
    return {
      ArrayList: []
    }
  },
  components: {
    HomeList
  },
  mounted () {
    this.ArrayList = getData
  }
}
</script>

<style scoped>
.Home-box {
  width: 1220px;
  margin: 0 auto;
  min-height: 600px;
  border-top: 1px solid #D8D8D8;
}
.Home-box .Home-head {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
.Home-box .Home-head>a {
  width: 120px;
  height: 100%;
  text-align: center;
  display: inline-block;
  color: #999;
  font-size: 12px;
}
.Home-box .Home-head>a:hover {
  color: #5683EA;
}
.Home-box .Home-head .active {
  color: #5683EA;
}
</style>
