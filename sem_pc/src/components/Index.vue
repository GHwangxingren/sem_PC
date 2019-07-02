<template>
  <div class="box-wrap onlinechat2">
    <div class="nav-wrap">
      <div class="nav-main">
        <img src="http://wenba-ooo-qiniu.xueba100.com/4b14c099aae4251e077411eb383e733e.png"
             alt="logo"
             class="nav-logo" />
        <div class="nav-lists">
          <div class="nav-list">
            <span class="onlinechat2"
                  @click="kemu">科目</span>
            <ul>
              <li><a href="">语文 |</a></li>
              <li><a href="">数学 |</a></li>
              <li><a href="">英语</a></li>
              <div class="clearfix"></div>
              <li><a href="">物理 |</a></li>
              <li><a href="">化学 |</a></li>
              <li><a href="">其他</a></li>
            </ul>
          </div>
          <div class="nav-list">
            <span class="onlinechat2"
                  @click="nianji">年级</span>
            <ul>
              <li><a href="">小学1-6 |</a></li>
              <li><a href="">初中1-3</a></li>
              <div class="clearfix"></div>
              <li><a href="">高中1-3 |</a></li>
              <li><a href="">小初高衔接</a></li>
            </ul>
          </div>
          <div class="nav-list"
               style="margin-right:0;">
            <span class="onlinechat2"
                  @click="redian">热点</span>
            <ul>
              <li><a href="">教材试卷 |</a></li>
              <li><a href="">历年真题 |</a></li>
              <li><a href="">考试题库</a></li>
              <div class="clearfix"></div>
              <li><a href="">考点手册 |</a></li>
              <li><a href="">资料下载 |</a></li>
              <li><a href="">课程试听</a></li>
            </ul>
          </div>
        </div>
        <a class="nav-tel">
          <img src="http://wenba-ooo-qiniu.xueba100.com/54209535335eaca02539006c1b79e596.png"
               alt="电话：400-004-8981" />
        </a>
      </div>
    </div>

    <div class="menu-wrap">
      <div class="menu-main">
        <ul class="menu-list">
          <li><a href=""
               class="active onlinechat2"
               @click="shouye">首页</a></li>
          <li><a class="onlinechat2"
               @click="ppsl">品牌实力</a></li>
          <li><a class="onlinechat2"
               @click="jgys">机构优势</a></li>
          <li><a class="onlinechat2"
               @click="sklc">上课流程</a></li>
          <li><a class="onlinechat2"
               @click="xfzx">学费咨询</a></li>
          <li><a class="onlinechat2"
               @click="sk">首课0元</a></li>
        </ul>
        <a class="btn-free onlinechat2"
           @click="mfst">免费试听</a>
      </div>
    </div>
    <Banner></Banner>
    <div class="xcg-main"
         id="xcg-main">
      <p class="xcg-title">小初高全科目 在线名师辅导</p>
      <p class="xcg-des">基于大数据构建课程体系</p>
      <div class="xcg-lists clearfix">
        <a href=""
           class="xcg-list">
          <div class="xcg-img">
            <img src="http://wenba-ooo-qiniu.xueba100.com/1161d586fbaa52cedde9cfe4825f704d.png" />
            <span class="onlinechat2"
                  @click="djzx">点击咨询</span>
          </div>
          <p class="xcg-zint">中小学课程1~12年级</p>
          <span class="xcg-fint">缺哪儿补哪儿</span>
        </a>
        <a href=""
           class="xcg-list">
          <div class="xcg-img">
            <img src="http://wenba-ooo-qiniu.xueba100.com/581c9b500c3a3fe55f033cb9c62715b1.png" />
            <span class="onlinechat2"
                  @click="djzx">点击咨询</span>
          </div>
          <p class="xcg-zint">紧扣各地教材 全学科</p>
          <span class="xcg-fint">缺补哪科补哪科</span>
        </a>
        <a href=""
           class="xcg-list">
          <div class="xcg-img">
            <img src="http://wenba-ooo-qiniu.xueba100.com/a98fd0a899bd781efc8f021558083b25.png" />
            <span class="onlinechat2"
                  @click="djzx">点击咨询</span>
          </div>
          <p class="xcg-zint">汇集全国海量名师</p>
          <span class="xcg-fint">适合孩子才是好</span>
        </a>
        <a href=""
           class="xcg-list"
           style="margin-right:0;">
          <div class="xcg-img">
            <img src="http://wenba-ooo-qiniu.xueba100.com/425c9320bc9990444b82131a2a494dcd.png" />
            <span class="onlinechat2"
                  @click="djzx">点击咨询</span>
          </div>
          <p class="xcg-zint">覆盖全国各省市考区</p>
          <span class="xcg-fint">教材版本都支持</span>
        </a>
      </div>
      <a class="xcg-btn onlinechat2"
         @click="mfst">
        点击免费试听
      </a>
    </div>

    <div class="tgsx-main">
      <p class="tgsx-title">提高升学选辅导 1对1教学才高效</p>
      <div class="tgsx-lists">
        <img src="http://wenba-ooo-qiniu.xueba100.com/621ba6fa7375fc800943404f02c04842.png" />
        <a class="tgsx-btn tgsx-btn1 onlinechat2"
           @click="ljgd">了解更多</a>
        <a class="tgsx-btn tgsx-btn2 onlinechat2"
           @click="ljgd">了解更多</a>
        <a class="tgsx-btn tgsx-btn3 onlinechat2"
           @click="ljgd">了解更多</a>
        <a class="tgsx-btn tgsx-btn4 onlinechat2"
           @click="ljgd">了解更多</a>
        <a class="tgsx-btn tgsx-btn5 onlinechat2"
           @click="ljgd">了解更多</a>
      </div>
      <a class="xcg-btn onlinechat2"
         @click="zxckxq">
        在线查看课程详情
      </a>
    </div>

    <div class="sdhd-wrap">
      <div class="sdhd-main">
        <p class="sdhd-title">三端互动 教学全程可视</p>
        <p class="sdhd-des">电脑/pad/手机均可上课，家长手机旁听</p>
        <div class="sdhd-lists clearfix">
          <a class="sdhd-list">
            <img src="http://wenba-ooo-qiniu.xueba100.com/64ee0e5cc5e7e0ffaff9b046b95099b0.png" />
          </a>
          <a class="sdhd-list no-right">
            <img src="http://wenba-ooo-qiniu.xueba100.com/3fd23aa75736ec5bf59415703fd68aa9.png" />
          </a>
          <a class="sdhd-list">
            <img src="http://wenba-ooo-qiniu.xueba100.com/e4c5d94baae0606484957d1827988cc3.png" />
          </a>
          <a class="sdhd-list  no-right">
            <img src="http://wenba-ooo-qiniu.xueba100.com/8bec561395cf66cf729122888764f50e.png" />
          </a>
        </div>
        <a class="xcg-btn onlinechat2"
           @click="sdhd">
          领取试听 现在体验
        </a>
      </div>

    </div>

    <div class="ygly-main">
      <p class="ygly-title">严格录用标准 为您提供好师资</p>
      <p class="ygly-des">5轮筛选6轮培训，优中选优1%通过率<br />百人教研团队，9000万+数据题库</p>
      <div class="ygly-lists">
        <a class="ygly-list ygly-wls  onlinechat2"
           @click="sqstkc"></a>
        <a class="ygly-list ygly-wjh onlinechat2"
           @click="zxtxls"></a>
        <a class="ygly-list ygly-ywj onlinechat2 no-right"
           @click="ckgdls"></a>
      </div>
    </div>

    <div class="yylc-wrap">
      <div class="yylc-main">
        <div class="yylc-left">
          <a class="yylc-btn yylc-btn1 onlinechat2"
             @click="yylc1">点击预约</a>
          <a class="yylc-btn yylc-btn2 onlinechat2"
             @click="yylc2">点击选课</a>
          <a class="yylc-btn yylc-btn3 onlinechat2"
             @click="yylc3">点击学习</a>
          <a class="yylc-btn yylc-btn4 onlinechat2"
             @click="yylc4">点击咨询</a>
          <a class="yylc-btn yylc-btn5 onlinechat2"
             @click="yylc5">点击按钮</a>
        </div>
        <div class="yylc-right">
          <div class="yylc-top onlinechat2"></div>
          <div class="yylc-tabs">
            <ul class="yylc-tab">
              <li v-on:click="changeActive(1)">小学</li>
              <li v-on:click="changeActive(2)">初中</li>
              <li v-on:click="changeActive(3)">高中</li>
            </ul>
            <div class="yylc-tabmains">
              <div class="yylc-tabmain"
                   v-show="this.primary">
                <img src="http://wenba-ooo-qiniu.xueba100.com/bf9a868cf673dbb2ce8fa83fcfbc37fd.png" />
              </div>
              <div class="yylc-tabmain"
                   v-show="this.junior">
                <img src="http://wenba-ooo-qiniu.xueba100.com/84718968a6c5cac7b73d3870753c2eb0.png" />
              </div>
              <div class="yylc-tabmain"
                   v-show="this.senior">
                <img src="http://wenba-ooo-qiniu.xueba100.com/e02d5e35f069bb1ddc3f1e7c453e08cd.png" />
              </div>
            </div>
          </div>
          <div class="yylc-btm onlinechat2"></div>
        </div>
      </div>
    </div>

    <List></List>

    <FootForm></FootForm>

    <div class="footer-wrap">
      <div class="footer-main">
        <p>关于我们 | 联系我们</p>
        <p>上海谦问万答吧云计算科技有限公司 版权所有 沪ICP备14016022号-1</p>
      </div>
    </div>
    <!-- <Suspension></Suspension>
    <Screen></Screen> -->

  </div>
</template>

<script>
import Banner from "@/components/Banner"
// import Suspension from "@/components/Suspension"
import FootForm from "@/components/FootForm"
// import Screen from "@/components/Screen"
import List from "@/components/List"



export default {
  components: {
    Banner,
    // Suspension,
    FootForm,
    // Screen,
    List
  },
  data () {
    return {
      primary: true,//小学
      junior: false,//初中
      senior: false//高中
    }
  },
  methods: {
    changeActive: function (index) {
      if (index == 1) {
        this.primary = true;
        this.junior = false;
        this.senior = false;
      } else if (index == 2) {
        this.primary = false;
        this.junior = true;
        this.senior = false;
      } else if (index == 3) {
        this.primary = false;
        this.junior = false;
        this.senior = true;
      }
    },
    kemu () {
      wa('send', 'header_label.click', { label: 1 });
    },
    nianji () {
      wa('send', 'header_label.click', { label: 2 });
    },
    redian () {
      wa('send', 'header_label.click', { label: 3 });
    },
    shouye () {
      wa('send', 'navigation.click', { label: 1 });
    },
    ppsl () {
      wa('send', 'navigation.click', { label: 2 });
    },
    jgys () {
      wa('send', 'navigation.click', { label: 3 });
    },
    sklc () {
      wa('send', 'navigation.click', { label: 4 });
    },
    xfzx () {
      wa('send', 'navigation.click', { label: 5 });
    },
    sk () {
      wa('send', 'navigation.click', { label: 6 });
    },
    djzx () {
      wa('send', 'subjects.get_info.click')
    },
    mfst () {
      wa('send', 'subjects.free_demo.click')
    },
    ljgd () {
      wa('send', '1v1.learn_more.click')
    },
    zxckxq () {
      wa('send', '1v1.online_detail.click')
    },
    sdhd () {
      wa('send', 'client_ends.try_now.click')
    },
    sqstkc () {
      wa('send', 'teachers.apply_demo.click')
    },
    zxtxls () {
      wa('send', 'teachers.find_teachers.click')
    },
    ckgdls () {
      wa('send', 'teachers.more_teachers.click')
    },
    yylc1 () {
      wa('send', 'free_demo_steps.step.click', { step: 1 })
    },
    yylc2 () {
      wa('send', 'free_demo_steps.step.click', { step: 2 })
    },
    yylc3 () {
      wa('send', 'free_demo_steps.step.click', { step: 3 })
    },
    yylc4 () {
      wa('send', 'free_demo_steps.step.click', { step: 4 })
    },
    yylc5 () {
      wa('send', 'free_demo_steps.step.click', { step: 5 })
    }
  }
}
</script>

<style scoped lang='less'>
</style>
