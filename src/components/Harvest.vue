<template>
  <div v-show="alert">
    <div class="Harvest"></div>
    <div class="Harvest-box">
      <header class="Harvest-box-head">
        <span>管理收获地址</span>
        <span @click="collect">X</span>
      </header>
      <div class="Harvest-head">
        <input class="Harvest-head-name" type="text" placeholder="收货人姓名" />
      </div>
      <div class="Harvest-head">
        <input class="phonenumber" type="text" placeholder="手机号" />
        <span v-show="false" class="error">手机号格式错误</span>
      </div>
      <div class="Harvest-head border">
        <input class="Areacode" type="text" placeholder="区号(可选)" />
        <input class="fixed" type="text" placeholder="固定电话(可选)" />
      </div>
      <select class="Harvest-select" v-model="id">
        <option value="0">请选择省份</option>
        <option :value="item.id" v-for="(item, index) in cityList" :key="index">{{item.name}}</option>
      </select>
      <div>
        <select class="Harvest-select-city" v-model="cityId">
          <option selected="selected" value="0">请选择城市</option>
          <option :value="item.area_id" v-for="(item, index) in arrList" :key="index">{{item.area_name}}</option>
        </select>
        <select class="Harvest-select-city" v-model="areaId">
          <option value="0">请选择区县</option>
          <option :value="item.area_id" v-for="(item, index) in areaList" :key="index">{{item.area_name}}</option>
        </select>
      </div>
      <div class="Harvest-head">
        <input class="Harvest-head-name" type="text" placeholder="详细地址，如街道名称，楼层，门牌号码等" />
      </div>
      <button class="Harvest-btn">保存</button>
    </div>
  </div>
</template>

<script>
import addList from '../lib/addList'
export default {
  props: {
    alert: Boolean
  },
  name: 'Harvest',
  data () {
    return {
      sendcollectBoolean: false,
      list: [],
      cityList: [],
      arrList: [],
      areaList: [],
      id: '0',
      cityId: '0',
      select: false,
      areaId: '0'
    }
  },
  mounted () {
    this.list = addList
    console.log(this.list)
    this.CityList()
  },
  methods: {
    CityList () {
      for (let i = 0; i < this.list.length; i++) {
        this.cityList.push({name: this.list[i].area_name, id: this.list[i].area_id})
      }
    },
    collect () {
      this.$emit('sendcollect', this.sendcollectBoolean, true)
    }
  },
  watch: {
    // 监听选择省份
    'id' (event) {
      if (event !== 0) {
        for (let i = 0; i < this.list.length; i++) {
          if (event === this.list[i].area_id) {
            this.arrList = this.list[i].city_list
          }
        }
      }
      if (event === '0') {
        this.cityId = '0'
        this.arrList = []
      }
    },
    'cityId' (event) {
      if (event !== 0) {
        this.areaId = '0'
        for (let i = 0; i < this.arrList.length; i++) {
          if (event === this.arrList[i].area_id) {
            this.areaList = this.arrList[i].county_list
          }
        }
      }
      if (event === '0') {
        this.areaId = '0'
        this.areaList = []
      }
      console.log(event)
    }
  }
}
</script>

<style scoped>
.border {
  border: none !important;
  box-shadow: none !important;
}
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
  height: 480px;
  background: #FFF;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset, 1px 0 3px rgba(0,0,0,.1);
  border-radius: 5px;
}
.Harvest-box .Harvest-box-head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: linear-gradient(#FFF,#F5F5F5);
  border-bottom: 1px solid #DCDCDC;
  border-radius: 5px;
}
.Harvest-box .Harvest-box-head>span:nth-of-type(1) {
  font-size: 18px;
  font-weight: 400;
  color: #666;
  width: 400px;
  height: 100%;
  display: block;
  float: left;
}
.Harvest-box .Harvest-box-head>span:nth-of-type(2) {
  font-size: 18px;
  font-weight: 400;
  color: #666;
  width: 50px;
  height: 100%;
  display: block;
  float: right;
  cursor: pointer;
}
.Harvest-box .Harvest-head {
  width: 370px;
  height: 40px;
  margin: 15px auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #FFF;
  line-height: 40px;
  box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
}
.Harvest-box .Harvest-head .Harvest-head-name {
  width: 350px;
  height: 40px;
  margin: 0 10px;
}
.Harvest-box .Harvest-head ::-webkit-input-placeholder {
  color: #999;
}
.Harvest-box .Harvest-head .error {
  width: 100px;
  height: 30px;
  display: inline-block;
  background: #D16D62;
  border-radius: 4px;
  color: #FFF;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
}
.Harvest-box .Harvest-head .phonenumber {
  width: 240px;
  height: 40px;
  margin: 0 10px;
}
.Harvest-box .Harvest-head .Areacode {
  width: 110px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
  text-align: center;
  border-radius: 6px;
}
.Harvest-box .Harvest-head .fixed {
  width: 230px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
  text-align: center;
  border-radius: 6px;
  margin-left: 20px;
}
.Harvest-select {
  width: 370px;
  height: 48px;
  margin: 0 40px 15px 40px;
  background: linear-gradient(#FAFAFA,#F5F5F5);
  border: 1px solid #CCC;
  border-radius: 6px;
  -webkit-appearance: none;
  box-shadow: 2px 0 0 rgba(255,255,255,.4) inset, 1px 0 0 rgba(255,255,255,.3);
  padding: 0 15px;
}
.Harvest-select-city {
  width: 180px;
  height: 40px;
  margin-left: 40px;
  background: linear-gradient(#FAFAFA,#F5F5F5);
  border: 1px solid #CCC;
  border-radius: 6px;
  -webkit-appearance: none;
  box-shadow: 2px 0 0 rgba(255,255,255,.4) inset, 1px 0 0 rgba(255,255,255,.3);
  padding: 0 15px;
}
.Harvest-select-city:nth-last-of-type(1) {
  margin-left: 10px;
}
.Harvest-btn {
  width: 370px;
  height: 48px;
  background: linear-gradient(#6F97E5,#527ED9);
  box-shadow: inset 0 1px 2px #7EA1E8;
  text-shadow: 0 -1px 0 #4F70B3;
  color: #FFF;
  border-radius: 5px;
  margin: 0 40px;
}
</style>
