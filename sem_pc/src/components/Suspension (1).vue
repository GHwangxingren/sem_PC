<template>
  <div class="suspension"
       v-show="this.flagXf">
    <div class="contact"
         v-show="flagSus">
      <div class="close close-2"
           @click="changeSus"></div>
      <ul class="onlinechat2"
          looyu_bound="1"
          style="cursor: pointer;">
        <li data-name="discount_for_school.click">
          <a class="icon-zxzx onlinechat2">在线咨询</a>
        </li>
        <li data-name="reservations.click">
          <a class="icon-yyst onlinechat2">预约试听</a>
        </li>
        <li data-name="program_consult.click">
          <a class="icon-kczx onlinechat2">课程咨询</a>
        </li>
        <li data-name="registration_consult.click">
          <a class="icon-zxhd onlinechat2">最新活动</a>
        </li>
        <li data-name="registration_consult.click">
          <a class="icon-tel onlinechat2">400-004-8981</a>
        </li>
      </ul>
    </div>
    <div class="c-txt"
         v-show="flagCon"
         @click="changeCon">联系我们</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      flagSus: true,
      flagCon: false,
      flagXf: false
    }
  },
  methods: {
    changeSus () {
      this.flagSus = false
      this.flagCon = true
    },
    changeCon () {
      this.flagSus = true
      this.flagCon = false
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector('#xcg-main').offsetTop;
      if (scrollTop > offsetTop) {
        this.flagXf = true
      } else {
        this.flagXf = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0 auto;
}
.suspension {
  .close {
    cursor: pointer;
  }
  .close-1 {
    width: 14px;
    height: 14px;
    background-image: url("http://wenba-ooo-qiniu.xueba100.com/ce13d376a7d942d8646eebc4778ae438.png");
    position: absolute;
    top: 10px;
    right: 0;
  }
  .close-2 {
    width: 10px;
    height: 8px;
    background-image: url("http://wenba-ooo-qiniu.xueba100.com/1c13138f6d62cb985de58635db1e6d16.png");
    position: absolute;
    top: 5px;
    right: 13px;
  }
  .contact {
    width: 120px;
    height: 565px;
    background: url(http://wenba-ooo-qiniu.xueba100.com/efe75864ec26a83b6cfd428a0aee3079.png)
      no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -250px;
    right: 5px;
    z-index: 1000;
    ul {
      width: 120px;
      padding-top: 154px;
      li {
        width: 120px;
        height: 82px;
        a {
          display: block;
          width: 120px;
          height: 26px;
          font-size: 16px;
          color: #fff;
          text-align: center;
          padding-top: 56px;
          border-bottom: 1px solid #fff;
          &:hover {
            color: #f0f0f0;
          }
          &.icon-zxzx {
            background: url(http://wenba-ooo-qiniu.xueba100.com/6ecbc259b8506a48051c6a65d434f50a.png)
              no-repeat center 9px;
          }
          &.icon-yyst {
            background: url(http://wenba-ooo-qiniu.xueba100.com/128d8d69cf7dc021a91427d199a90532.png)
              no-repeat center 9px;
          }
          &.icon-kczx {
            background: url(http://wenba-ooo-qiniu.xueba100.com/b860ac7f489a41146bad2b1598a8e70f.png)
              no-repeat center 9px;
          }
          &.icon-zxhd {
            background: url(http://wenba-ooo-qiniu.xueba100.com/ada46509288568cf6fc440fca2d92f33.png)
              no-repeat center 9px;
          }
          &.icon-tel {
            font-size: 14px;
            font-style: italic;
            background: url(http://wenba-ooo-qiniu.xueba100.com/ae6c00cf9fc180f18abe5761528f1205.png)
              no-repeat center 9px;
            border-bottom: none;
          }
        }
      }
    }
  }
  .c-txt {
    width: 26px;
    height: 90px;
    background: #ff4141;
    color: #fff;
    padding-top: 10px;
    line-height: 22px;
    font-size: 16px;
    position: fixed;
    top: 50%;
    margin-top: -51.5px;
    right: 0;
    z-index: 1000;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    &.show {
      top: 77%;
    }
  }
}
</style>

