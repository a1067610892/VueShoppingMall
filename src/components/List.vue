<template>
  <div id="list">
    <div class="Home-content">
        <div class="item-box" v-for="(item, index) in list" :key="index">
          <div class="Home-item" @mouseover="goIn(index)" @mouseout="leave">
            <div class="Home-item-top">
              <img class="Home-item-img" :src="item.ali_image">
              <h2 class="Home-item-title">{{item.title}}</h2>
              <h3 class="Home-item-h3">{{item.sub_title}}</h3>
            </div>
            <div class="Home-item-bottom" v-show="listIndex !== index">
              <h4 class="Home-item-h4">￥{{item.price}}</h4>
            </div>
            <div class="Home-item-bottom" v-show="listIndex === index">
              <button class="Home-btn" @click="getInto(item)">查看详情</button>
              <button class="Home-btn">加入购物车</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      listIndex: -1
    }
  },
  props: {
    list: Array
  },
  methods: {
    /* 鼠标移入事件 */
    goIn (index) {
      this.listIndex = index
    },
    /* 鼠标移出事件 */
    leave () {
      this.listIndex = -1
    },
    getInto (item) {
      this.$router.push({
        name: 'Details',
        path: '/Details',
        query: {
          listitem: JSON.stringify(item)
        }
      })
    }
  }
}
</script>

<style scoped>
.Home-content {
  width: 1220px;
  background: #FFF;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
}
.Home-content .item-box {
  float: left;
}
.Home-content .Home-item {
  width: 304px;
  height: 360px;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  background: #FFF;
}
.Home-content .Home-item:hover {
  box-shadow: 0 0 38px rgba(0,0,0,.08) inset;
  transition: all .15s ease;
}
.Home-content .Home-item .Home-item-top {
  width: 100%;
  height: 280px;
}
.Home-content .Home-item .Home-item-top .Home-item-img {
  width: 206px;
  height: 206px;
  margin: 0 auto 10px;
}
.Home-content .Home-item .Home-item-top .Home-item-title {
  text-align: center;
  font-size: 15px;
  color: #424242;
  padding: 0 14px;
}
.Home-content .Home-item .Home-item-top .Home-item-h3 {
  font-size: 12px;
  color: #d0d0d0;
  margin: 8px auto 14px;
  text-align: center;
}
.Home-content .Home-item .Home-item-bottom {
  width: 100%;
  height: 40px;
  text-align: center;
  color: #c30a18;
  line-height: 40px;
}
.Home-content .Home-item .Home-item-bottom .Home-item-h4 {
  font-size: 16px;
}
.Home-content .Home-item .Home-item-bottom .Home-btn {
  width: 98px;
  height: 30px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #d5d5d5;
}
.Home-content .Home-item .Home-item-bottom .Home-btn:nth-of-type(1) {
  color: #a1a1a1;
  margin-right: 15px;
}
.Home-content .Home-item .Home-item-bottom .Home-btn:nth-of-type(2) {
  color: #FFF;
  border-color: #5c85e5;
  background: #5c85e5;
}
</style>
