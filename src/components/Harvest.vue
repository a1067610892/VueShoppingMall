<template>
  <div v-show="alert">
    <div class="Harvest"></div>
    <div class="Harvest-box"></div>
  </div>
</template>

<script>
export default {
  props: {
    alert: Boolean
  },
  name: 'Harvest',
  data () {
    return {
      
    }
  },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
.Harvest {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  top: 0;
  left: 0;
  z-index: 1;
}
.Harvest-box {
  width: 450px;
  height: 550px;
  background: #FFF;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
}
</style>
