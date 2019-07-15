<template>
  <div class="head">
    <h1 class="head-title">{{content}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Title',
  props: {
    content: String
  }
}
</script>

<style scoped>
.head {
  width: 100%;
}
.head .head-title {
  padding: 0 10px 0 28px;
  height: 60px;
  line-height: 60px;
  background: linear-gradient(#FFF,#F5F5F5);
  border-bottom: 1px solid #DCDCDC;
  border-radius: 10px 10px 0 0;
  color: #646464;
  font-size: 18px;
}
</style>
