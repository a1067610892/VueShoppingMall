<template>
  <div class="header-nav">
    <header class="head">
      <div class="head-left">
        <a class="head-logo"></a>
      </div>
      <div class="head-center">
        <ul>
          <li>在线商城</li>
          <li>坚果Pro</li>
          <li>Smartisan M1 / M1L</li>
          <li>Smartisan OS</li>
          <li>欢喜云</li>
          <li>应用下载</li>
          <li>官方论坛</li>
        </ul>
      </div>
      <div class="head-right">
        <a class="head-user"></a>
        <div class="head-item">
          <a class="head-buy"></a>
          <a class="head-plus">0</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.header-nav {
  width: 100%;
  height: 80px;
  background: black;
}
.header-nav .head {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
.header-nav .head .head-left {
  width: 100px;
  height: 100%;
  float: left;
}
.header-nav .head .head-left .head-logo {
  width: 50px;
  height: 50px;
  display: block;
  margin: 15px auto;
  background: url('../assets/img/global-logo.png') no-repeat;
  background-size: cover;
}
.header-nav .head .head-center {
  width: 900px;
  height: 100%;
  float: left;
}
.header-nav .head .head-center ul {
  width: 100%;
  height: 100%;
}
.header-nav .head .head-center ul>li {
  width: 128px;
  height: 100%;
  line-height: 80px;
  float: left;
  text-align: center;
  color: #c8c8c8;
}
.header-nav .head .head-center ul>li:hover {
  color: #FFF;
}
.header-nav .head .head-right {
  width: 199px;
  height: 50px;
  float: left;
  border-left: 1px solid #c8c8c8;
  margin: 15px auto;
}
.header-nav .head .head-right .head-user {
  width: 20px;
  height: 20px;
  background: url('../assets/img/account-icon.png') -155px 0;
  display: block;
  margin: 15px 30px;
  float: left;
}
.header-nav .head .head-right .head-item .head-buy {
  width: 30px;
  height: 20px;
  background: url('../assets/img/account-icon.png') -150px -22px;
  display: inline-block;
  margin: 15px 0;
  float: left;
}
.header-nav .head .head-right .head-item .head-plus {
  font-style: normal;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: #969696;
  background-image: -webkit-gradient(linear,left top, left bottom,from(#A4A4A4),to(#909090));
  background-image: linear-gradient(#A4A4A4,#909090);
  -webkit-box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
  box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
  float: left;
  margin: 15px 0;
}
</style>
