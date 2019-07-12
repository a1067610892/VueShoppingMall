<template>
  <div class="details">
    <div class="details-box">
      <div class="box-left">
        <ul>
          <img @click="Switch(index)" :class="ListIndex === index ? 'on' : ''" v-for="(item, index) in list.ali_images" :key="index" :src="item">
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      list: {},
      ListIndex: 0
    }
  },
  mounted () {
    this.list = JSON.parse(this.$route.query.listitem)
  },
  methods: {
    Switch (index) {
      this.ListIndex = index
    }
  }
}
</script>

<style scoped>
.details {
  width: 1220px;
  background: #FFF;
  border-radius: 8px;
  border-color: rgba(0,0,0,.14);
  box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
  min-height: 600px;
  margin: 0 auto 50px auto;
}
.details .details-box {
  width: 1100px;
  height: 100%;
  padding: 60px 60px;
}
.details .details-box .box-left {
  float: left;
  width: 80px;
}
.details .details-box .box-left>ul {
  width: 100%;
  height: 100%;
}
.details .details-box .box-left>ul>img {
  width: 80px;
  height: 80px;
  border: 1px solid rgba(0,0,0,.06);
  border-radius: 5px;
  margin: 10px;
}
.details .details-box .box-left>ul .on {
  border: 3px solid rgba(0,0,0,.2);
}
</style>
