<template>
  <div class="banner-wrap">
    <!-- banner1 -->
    <div class="banner-mainwrap"
         v-if="bannerflag">
      <img src="http://wenba-ooo-qiniu.xueba100.com/1f8368d0a7966ef4762c9b7e5dca05e5.jpg"
           class="banner-bg" />
      <div class="banner-main">
        <div class="banner-left">
          <img src="http://wenba-ooo-qiniu.xueba100.com/5c7e435100faf9431b818d0aab95c211.png" />
          <a class="free-btn onlinechat2" @click="stmfk1">试听课免费预约中</a>
        </div>
        <div class="banner-mid">
          <img src="http://wenba-ooo-qiniu.xueba100.com/536c5d2e08745284f6f06da2d0b31d86.png"
               class="haiqing" />
          <img src="http://wenba-ooo-qiniu.xueba100.com/7aded2bc2782db535a15b21a44bec971.png"
               class="hq-font" />
        </div>

        <Form></Form>
      </div>
    </div>
    <!-- banner2 -->
    <div class="banner-mainwrap2"
         v-else>
      <img src="../assets/bannerKbg.jpg"
           class="banner-bg2" />
      <div class="banner-main2">
        <div class="banner-left2">
          <img src="../assets/banner-title.png" />
          <a class="free-btn2 onlinechat2" @click="stmfk2">试听课免费预约中</a>
        </div>
        <div class="banner-mid2">
          <img src="http://wenba-ooo-qiniu.xueba100.com/536c5d2e08745284f6f06da2d0b31d86.png"
               class="haiqing2" />
          <img src="http://wenba-ooo-qiniu.xueba100.com/0c7ef452fcb418d0ef684d440a356966.png"
               class="hq-font2" />
        </div>
      </div>
    </div>
    <!-- 通栏 -->
    <div class="banner-botwrap">
      <div class="banner-bot clearfix">
        <img src="http://wenba-ooo-qiniu.xueba100.com/cd83a2dd0f87e27e0d64be0e6bccf4fa.png"
             class="bot-img" />
        <a class="bot-btn onlinechat2" @click="mfst">免费试听</a>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "@/components/Form"
export default {
  components: {
    Form
  },
  data () {
    return {
      bannerflag: true
    }
  },
  methods: {
    showType: function () {
      let typeId = this.$route.query.type;
      if (typeId) {
        this.bannerflag = false
      }
    },
    stmfk1(){
      wa('send', 'banner.free_demo.click');
    },
    mfst(){
      wa('send', 'banner.free_demo_btm.click');
    }
  },
  mounted () {
    this.showType()
  }
}
</script>


<style scoped lang="less">
.banner-wrap {
  // banner1
  .banner-mainwrap {
    width: 100%;
    height: 550px;
    position: relative;
    // background: url(http://wenba-ooo-qiniu.xueba100.com/1f8368d0a7966ef4762c9b7e5dca05e5.jpg) no-repeat;
    // background-size: 100% 100%;
    .banner-main {
      width: 1200px;
      height: 550px;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -600px;
      .banner-left {
        width: 583px;
        height: 402px;
        margin-left: -28px;
        margin-top: 84px;
        float: left;
        .free-btn {
          display: block;
          width: 300px;
          height: 70px;
          background: #ff4141;
          color: #fff;
          font-size: 28px;
          text-align: center;
          line-height: 70px;
          border-radius: 10px;
          position: absolute;
          left: 100px;
          top: 420px;
          &:hover {
            background: #e62121;
          }
        }
      }
      .banner-mid {
        float: left;
        position: relative;
        height: 550px;
        .haiqing {
          position: absolute;
          bottom: 0;
          left: -36px;
        }
        .hq-font {
          position: absolute;
          left: -112px;
          bottom: 6px;
        }
      }
    }
  }
  // 通栏
  .banner-botwrap {
    width: 100%;
    height: 100px;
    background: url(http://wenba-ooo-qiniu.xueba100.com/7ce6cff77ce5de9ae0051c76cc9c376d.jpg)
      no-repeat;
    .banner-bot {
      width: 1200px;
      height: 100px;
      margin: 0 auto;
      padding: 0 20px 0 28px;
      .bot-img {
        float: left;
        margin-top: 32px;
      }
      .bot-btn {
        display: block;
        width: 210px;
        height: 62px;
        background: #fff;
        color: #ff4141;
        font-size: 30px;
        line-height: 62px;
        text-align: center;
        border-radius: 60px;
        float: right;
        margin-top: 20px;
        &:hover {
          background: #ff4141;
          color: #fff;
        }
      }
    }
  }
  // banner2
  .banner-mainwrap2 {
    width: 100%;
    height: 550px;
    position: relative;
    .banner-main2 {
      width: 1200px;
      height: 550px;
      margin: 0 auto;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -600px;
      .banner-left2 {
        width: 583px;
        height: 402px;
        margin-top: 84px;
        margin-left: 30px;
        float: left;
        .free-btn2 {
          display: block;
          width: 300px;
          height: 70px;
          background: #ff4141;
          color: #fff;
          font-size: 28px;
          text-align: center;
          line-height: 70px;
          border-radius: 10px;
          position: absolute;
          left: 150px;
          top: 420px;
          &:hover {
            background: #e62121;
          }
        }
      }
      .banner-mid2 {
        position: relative;
        float: right;
        height: 550px;
        background: #ccc;
        .haiqing2 {
          position: absolute;
          bottom: 0;
          right: 140px;
        }
        .hq-font2 {
          position: absolute;
          bottom: 6px;
          right: 30px;
        }
      }
    }
  }
}
</style>

