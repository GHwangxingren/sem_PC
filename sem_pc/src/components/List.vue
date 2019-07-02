<template>
  <div class="qyry-main">
    <p class="qyry-title">严格录用标准 为您提供好师资</p>
    <div class="slider-box">
      <swiper :options="swiperOption"
              ref="mySwiper">
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-1.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">教育产业高峰论坛<br>影响力教育品牌</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-2.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">T-EDGE Awards<br>年度创新企业</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-3.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">NBI AWARDS<br>年度产品影响力奖</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-4.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">中国新经济行业<br>准独角兽</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-5.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">创业邦中国创新<br>成长企业100强</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-6.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">中国教育“金知奖”<br>教育产业公益贡献</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-7.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">中国教育产业<br>硬独角兽TOP20</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-8.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">荣登《中国企业家》<br>未来之星百强榜</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-9.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">创业邦中国教育<br>创新成长30强</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-10.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">教育产业年度评选<br>优质在线教育品牌</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honor-2018-11.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2018年度</p>
              <p class="desc">新华网品牌影响力<br>在线教育机构</p>
            </div>
          </li>

        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_1.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">NBI AWARDS<br>新锐企业TOP5</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_2.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016年度</p>
              <p class="desc">乐商店最受欢迎<br>学习应用</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_3.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">360手机助手“闪耀”<br>年度口碑奖</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_4.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016年度</p>
              <p class="desc">ECI 年度商业创新<br>新锐人物</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_5.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2015年度</p>
              <p class="desc">GET教育科技大会<br>荣誉嘉宾</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_6.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">NBI AWARDS<br>新锐企业TOP5</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_7.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">NBI AWARDS<br>新锐人物TOP100</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_8.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2015年度</p>
              <p class="desc">创业家“黑马之选”<br>年度在线教育品牌</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_9.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016-2017</p>
              <p class="desc">在线教育品牌榜<br>十大在线教育品牌</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_10.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">北京晚报最具影响力<br>智能教育平台</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_11.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">北京晚报放心品牌<br>教育公益</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_12.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">决胜网优质在线<br>教育品牌</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_13.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2017年度</p>
              <p class="desc">决胜网新锐<br>教育创业者</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_14.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016年度</p>
              <p class="desc">TOWER教育创新大会<br>锐意进取奖</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_15.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016年度</p>
              <p class="desc">TOWER教育创新大会<br>特别贡献奖</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_16.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016年度</p>
              <p class="desc">十佳新锐学生<br>最嗨APP</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_17.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016年度</p>
              <p class="desc">“我要上学”大型公益<br>活动爱心大使</p>
            </div>
          </li>
        </swiper-slide>
        <swiper-slide class="slideList">
          <li>
            <img src="//1v1-material-qiniu.xueba100.com/home/static/images/index/honorimg_18.png"
                 alt="">
            <div class="desc-box">
              <p class="year">2016年度</p>
              <p class="desc">“我要上学”大型公益<br>活动爱心企业</p>
            </div>
          </li>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <a class="xcg-btn onlinechat2"
       @click="qyry">
      点击咨询
    </a>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      current: 'all',
      swiperOption: {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 1,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        }
      },
      swiperSlides: []
    }
  },
  methods: {
    qyry () {
      wa('send', 'honors.consult.click');
    }
  }
}
</script>

<style lang="less" scoped>
.qyry-main {
  width: 1200px;
  height: 620px;
  margin: 0 auto;
  .qyry-title {
    font-size: 46px;
    text-align: center;
    color: #333;
    padding: 46px 0;
  }
  .slider-box {
    width: 1020px;
    height: 360px;
    margin: 0 auto;
    position: relative;
    padding-left: 10px;
    .swiper-slide {
      height: 360px;
      margin-top: 10px;
      li {
        display: inline-block;
        width: 240px;
        transition: all 0.2s ease-in-out;
        border-radius: 8px;
        overflow: hidden;
        margin: 0 36px 40px 0;
        cursor: pointer;
        img {
          width: 100%;
        }
        .desc-box {
          height: 110px;
          background: url(//1v1-material-qiniu.xueba100.com/home/static/images/honor_desc_bj.png?c42a44b6990a49545b4f602fd94f2a66)
            no-repeat 50%;
          background-size: 216px;
          text-align: center;
          .year {
            color: #000;
            font-size: 20px;
            padding-top: 16px;
          }
          .desc {
            color: #a78a6b;
            font-size: 18px;
          }
        }
        &:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transform: translateY(-8px);
        }
      }
    }
    .swiper-button-prev {
      width: 27px;
      height: 50px;
      position: absolute;
      top: 150px;
      background: url(http://wenba-ooo-qiniu.xueba100.com/2ba82abf35d6d2bbd90310ce817ee3b4.png)
        no-repeat;
      left: -60px;
    }
    .swiper-button-next {
      width: 27px;
      height: 50px;
      position: absolute;
      top: 150px;
      background: url(http://wenba-ooo-qiniu.xueba100.com/ce16c11fb21ba3213c9b9f27fb20ccc3.png)
        no-repeat;
      right: -60px;
    }
  }
  .xcg-btn {
    width: 300px;
  }
}
</style>