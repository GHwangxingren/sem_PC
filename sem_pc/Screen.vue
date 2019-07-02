<template>
  <div class="popup-wrap"
       v-show="this.flag">
    <div class="popup-main">
      <img v-on:click="closeScreen"
           src="http://wenba-ooo-qiniu.xueba100.com/369dcc569665f41e4fcf9860a4e3b976.png"
           class="popup-close" />
      <a class="onlinechat2 popup-btns"></a>
    </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
  data () {
    return {
      flag: true
    }
  },
  methods: {
    closeScreen: function () {
      this.flag = false;
    },
    start: function () {
      setTimeout(() => {
        this.flag = false
      }, 8000)
    }
  },
  mounted: function () {
    this.start();
  }
}
</script>



<style lang="less" scoped>
.popup-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(http://wenba-ooo-qiniu.xueba100.com/59b6f2a5f760ada97f6b1535fb22a4d9.png);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1001;
  .popup-main {
    width: 776px;
    height: 490px;
    margin: 0 auto;
    position: fixed;
    left: 50%;
    margin-left: -388px;
    top: 50%;
    margin-top: -285px;
    background: url(http://wenba-ooo-qiniu.xueba100.com/f697c18322c6837782619601e1a52c38.png) no-repeat;
    background-size: 100% auto;
    .popup-close {
      position: absolute;
      right: 120px;
      top: 140px;
      cursor: pointer;
    }
    .popup-btns {
      display: block;
      width: 170px;
      height: 42px;
      border-radius: 40px;
      margin: 402px 0 0 310px;
    }
  }
}
</style>


