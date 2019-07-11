<template>
  <div class="Home">
    <div class="Home-box">
      <header class="Home-head">
        <a class="active">综合排序</a>
        <a>销量排序</a>
        <a>价格低到高</a>
        <a>价格高到低</a>
      </header>
      <div class="Home-content">
        <div class="item-box" v-for="(item, index) in HomeList" :key="index">
          <div class="Home-item">
            <div class="Home-item-top">
              <img class="Home-item-img" :src="item.sku_info[0].ali_image">
              <h2 class="Home-item-title">{{item.name}}</h2>
              <h3 class="Home-item-h3">{{item.sku_info[0].sub_title}}</h3>
            </div>
            <div class="Home-item-bottom">
              <h4 class="Home-item-h4">￥{{item.sku_info[0].price}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getData from '../lib/goodData'
export default {
  name: 'Home',
  data () {
    return {
      HomeList: []
    }
  },
  mounted () {
    this.HomeList = getData
    console.log(getData)
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
.Home-box .Home-content {
  width: 1220px;
  background: #FFF;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
}
.Home-box .Home-content .item-box {
  float: left;
}
.Home-box .Home-content .Home-item {
  width: 304px;
  height: 360px;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  background: #FFF;
}
.Home-box .Home-content .Home-item .Home-item-top {
  width: 100%;
  height: 280px;
}
.Home-box .Home-content .Home-item .Home-item-top .Home-item-img {
  width: 206px;
  height: 206px;
  margin: 0 auto 10px;
}
.Home-box .Home-content .Home-item .Home-item-top .Home-item-title {
  text-align: center;
  font-size: 15px;
  color: #424242;
  padding: 0 14px;
}
.Home-box .Home-content .Home-item .Home-item-top .Home-item-h3 {
  font-size: 12px;
  color: #d0d0d0;
  margin: 8px auto 14px;
  text-align: center;
}
.Home-box .Home-content .Home-item .Home-item-bottom {
  width: 100%;
  height: 40px;
  text-align: center;
  color: #c30a18;
  line-height: 40px;
}
.Home-box .Home-content .Home-item .Home-item-bottom .Home-item-h4 {
  font-size: 16px;
}
</style>
