<template>
  <div>
    <div class="footer-fixed-form active"
         id="js-footer-form"
         v-show="flagFoot">
      <div class="section-container clearfix">
        <span class="slogan">
          <img src="http://wenba-ooo-qiniu.xueba100.com/f3d0fdec4464691408fd610bc404dadd.png"
               alt=""
               class='footer-icon onlinechat2'>
        </span>
        <div class="form-group name-group">
          <input type="text"
                 class="form-control form-name"
                 placeholder="请输入学生姓名"
                 v-model="true_name">
          <p class="error-name"
             v-show="nameflag">请输入学生姓名</p>
          <p class="error-name"
             v-show="nametype">姓名格式有误</p>
        </div>

        <div class="form-group tel-group">
          <input type="text"
                 class="form-control form-tel"
                 placeholder="请输入您的手机号"
                 maxlength="11"
                 v-model="telephone">
          <p class="error-name"
             v-show="telflag">请输入您的手机号</p>
          <p class="error-name"
             v-show="teltype">手机号格式有误</p>
        </div>
        <div class="form-group term-group">
          <select name=""
                  required=""
                  class="form-control form-term"
                  placeholder="请选择年级"
                  v-model="grade">
            <option value=""
                    class="blank-opt"
                    selected=""
                    disabled="">请选择年级</option>
            <option value="1">初一</option>
            <option value="2">初二</option>
            <option value="3">初三</option>
            <option value="4">高一</option>
            <option value="5">高二</option>
            <option value="6">高三</option>
            <option value="9">三年级</option>
            <option value="10">四年级</option>
            <option value="11">五年级</option>
            <option value="12">六年级</option>
          </select>
          <p class="error-name"
             v-show="gradeflag">请输入年级</p>
        </div>
        <div class="form-group subject-group">
          <select class="form-control form-subject"
                  required
                  id="subject"
                  placeholder="请选择科目"
                  v-model="remark">
            <option value="">请选择科目</option>
            <option value="1">数学</option>
            <option value="2">语文</option>
            <option value="3">英语</option>
            <option value="4">物理</option>
            <option value="5">化学</option>
            <option value="6">生物</option>
            <option value="7">地理</option>
            <option value="8">政治</option>
            <option value="9">历史</option>
          </select>
          <p class="error-name"
             v-show="remarkflag">请输入科目</p>
        </div>
        <button type="button"
                class="btn submit-btn foot-submit"
                id="submit0"
                @click="appointFn">马上预约</button>
      </div>
    </div>
    <div class="sucessPoup"
         v-show="suc">
      <img src="http://wenba-ooo-qiniu.xueba100.com/413e3507ada9705a5561b344d962b5ce.png">
      <span class="close"
            @click="closeScreen">x</span>
    </div>
    <div class="already_toast"
         v-show="again">
      <img class="warn"
           src="http://wenba-ooo-qiniu.xueba100.com/687ac9a1be40a83dd4f529e5db4b3aa4.png">
      <p class="close already_close" @click="closeScreen"><img src="http://wenba-ooo-qiniu.xueba100.com/f80e706807fa81c1b8821a4f03e1e87e.png"></p>
      <p class="alr-des">您已经报名参加过此活动！</p>
      <p class="btn already_close"
         @click="closeScreen">确定</p>
    </div>
  </div>
</template>
<script>
import { getSliders } from "@/api";
const checkPhone = (phone) => {
  let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
  if (phoneReg.test(phone)) {
    return true
  } else {
    return false
  }
}

const checkName = (name) => {
  if (new RegExp('^[\u4e00-\u9fa5]{2,5}$').test(name)) {
    if (name == '姓名') {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export default {
  data () {
    return {
      flagFoot: false,
      nameflag: false,
      nametype: false,
      telflag: false,
      teltype: false,
      gradeflag: false,
      remarkflag: false,
      suc: false,
      again: false,
      true_name: '',
      telephone: '',
      grade: '',
      remark: ''
    }
  },
  created () {
  },
  methods: {
    appointFn () {
      wa('send', 'clue_form.submit', { phone_no: this.phone_no, name: this.true_name, grade: this.grade, subject: this.subject });

      if (!this.true_name || !this.telephone || !this.grade || !this.remark || !checkPhone(this.telephone) || !checkName(this.true_name)) {
        if (!this.true_name) {
          this.nameflag = true;
          this.nametype = false;
        } else if (!checkName(this.true_name)) {
          this.nametype = true;
          this.nameflag = false;
        } else {
          this.nameflag = false;
          this.nametype = false;
        }

        if (!this.telephone) {
          this.telflag = true;
          this.teltype = false;
        } else if (!checkPhone(this.telephone)) {
          this.teltype = true;
          this.telflag = false;
        } else {
          this.telflag = false;
          this.teltype = false;
        }

        if (!this.grade) {
          this.gradeflag = true;
        } else {
          this.gradeflag = false;
        }
        if (!this.remark) {
          this.remarkflag = true;
        } else {
          this.remarkflag = false;
        }
        return;
      } else {
        this.nameflag = false;
        this.telflag = false;
        this.remarkflag = false;
        this.gradeflag = false;
        this.teltype = false;
        this.nametype = false;
      }

      let param = {
        true_name: this.true_name,
        telephone: this.telephone,
        grade: this.grade,
        remark: this.remark,
        source:'text'
      }
      getSliders(param).then((res) => {
        console.log(res)
        if (res.data.statusCode == 0) {
          this.suc = true
          this.true_name = ''
          this.telephone = ''
          this.grade = ''
          this.remark = ''
        } else if (res.data.statusCode == 102) {
          this.again = true
          this.true_name = ''
          this.telephone = ''
          this.grade = ''
          this.remark = ''
        }
      }).catch(err => {
        console.log(err)
      })
    },
    closeScreen () {
      this.suc = false
      this.again = false
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector('#xcg-main').offsetTop;
      if (scrollTop > offsetTop) {
        this.flagFoot = true
      } else {
        this.flagFoot = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)

  }
}
</script>
<style scoped lang="less">
// 底部
.form-control {
  border-radius: 6px;
  background: #fff;
  box-shadow: none;
  font-size: 18px;
  padding: 8px 12px;
  line-height: 25px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  vertical-align: middle;
  box-sizing: border-box;
}
.footer-fixed-form {
  position: fixed;
  width: 100%;
  left: 0;
  height: 50px;
  bottom: -100px;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.8);
  // transition: bottom .3s;
  &.active {
    bottom: 0;
  }
  &.above_footer {
    bottom: 150px;
  }
  .section-container {
    height: 100%;
    line-height: 50px;
    font-size: 0;
    text-align: center;
  }
  .form-group,
  .slogan,
  .submit-btn {
    display: inline-block;
    border: none;
  }
  .slogan {
    font-family: SourceHanSansCN-Medium, Microsoft YaHei, sans-serif;
    color: #ed2736;
    font-size: 22px;
    margin-right: 20px;
  }
  .form-control {
    width: 100%;
    font-size: 14px;
    line-height: 22px;
    *height: 22px;
    padding: 5px 12px;
    border-radius: 4px;
    display: inline-block;
    border: 0;
    &:invalid {
      color: #e0e2e3;
    }
    option {
      color: #3e3e3e;
    }
  }
  select {
    *margin-top: 5px;
  }
  .footer-icon {
    width: 200px;
    float: left;
    margin-top: -43px;
    margin-right: -10px;
  }
  .name-group {
    margin-right: 10px;
    width: 10.15625%;
  }
  .tel-group {
    margin-right: 10px;
    width: 17.1875%;
  }
  .subject-group,
  .term-group {
    width: 11.71875%;
    margin-right: 10px;
  }
  .btn {
    width: 10.15625%;
    height: 32px;
    line-height: 32px;
    vertical-align: top;
    font-size: 16px;
    border-radius: 4px;
    padding: 0;
    *margin-top: 8px;
    background-color: #ff4141;
    color: #fff;
    margin-top: 9px;
    cursor: pointer;
    &:hover {
      background-color: #c71522;
    }
  }
  .error-name {
    position: absolute;
    line-height: 14px;
    background: #ff5959;
    color: #fff;
    font-size: 12px;
    padding: 3px 5px;
    filter: alpha(opacity=90);
    -moz-opacity: 0.9;
    -khtml-opacity: 0.9;
    opacity: 0.9;
    top: -15px;
    left: 0;
    border-radius: 2px;
    &:after {
      content: "";
      display: block;
      height: 0;
      width: 0;
      position: absolute;
      top: 18px;
      left: 4px;
      border: 7px solid;
      border-color: transparent;
      border-top-color: #ff5959;
    }
  }
  .form-group {
    position: relative;
    *margin-top: 9px;
    vertical-align: top;
  }
}

.sucessPoup {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: block;
  z-index: 99999999;
  overflow: hidden;
  img {
    position: absolute;
    display: block;
    width: 350px;
    // height: 528px;
    margin: -205px -175px;
    top: 40%;
    left: 50%;
  }
  span {
    position: absolute;
    display: block;
    margin: -138px 92px;
    top: 40%;
    left: 50%;
    color: #ccc;
    font-size: 26px;
    cursor: pointer;
  }
}

.already_toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 370px;
  height: 230px;
  border-radius: 10px;
  z-index: 10000;
  .warn {
    display: block;
    margin: 30px auto;
  }
  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  .alr-des {
    text-align: center;
    font-size: 14px;
  }
  .btn {
    background: #ccc;
    color: #fff;
    width: 70px;
    line-height: 26px;
    margin: 20px auto;
    cursor: pointer;
    text-align: center;
  }
}
</style>

