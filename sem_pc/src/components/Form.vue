<template>
  <div>
    <div class="banner-form">
      <img src="http://wenba-ooo-qiniu.xueba100.com/40d4d13dc09066470c832b0eb8adef12.png"
           class="form-title" />
      <div class="group-ipts">
        <input type="text"
               placeholder="请输入姓名"
               value=""
               class="form-ipt"
               v-model="true_name" />
        <p class="error-name"
           v-show="nameflag">请输入学生姓名</p>
        <p class="error-name"
           v-show="nametype">姓名格式有误</p>
      </div>
      <div class="group-ipts">
        <input type="text"
               placeholder="请输入手机号"
               value=""
               class="form-ipt"
               v-model="telephone" />
        <p class="error-name"
           v-show="telflag">请输入您的手机号</p>
        <p class="error-name"
           v-show="teltype">手机号格式有误</p>
      </div>

      <div class="group-ipts">
        <select name=""
                required=""
                class="ipts-control ipts-term"
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

      </div>
      <div class="group-ipts">
        <select class="ipts-control ipts-subject"
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
        <div class="ipts-lists">
          <p class="error-name"
             v-show="gradeflag"
             style="right:150px">请输入年级</p>
          <p class="error-name"
             v-show="remarkflag">请输入科目</p>
        </div>

      </div>
      <div class="clear"></div>
      <div class="form-btns">
        <a class="form-btn listen-btn"
           @click="appointFn">申请试听</a>
        <a class="form-btn online-btn onlinechat2"
           @click="sqst">在线咨询</a>
      </div>
      <div class="form-des">
        *已有73名学员已申请，还剩余<span>27</span>名
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
      <p class="close already_close"><img src="http://wenba-ooo-qiniu.xueba100.com/f80e706807fa81c1b8821a4f03e1e87e.png"></p>
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
        remark: this.remark
      }
      getSliders(param).then((res) => {
        console.log(res)
        if (res.statusCode == 0) {
          this.suc = true
          // alert('success')
          this.true_name = ''
          this.telephone = ''
          this.grade = ''
          this.remark = ''
        } else if (res.statusCode == 102) {
          this.again = true
          // alert('已经报名了')
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
    sqst () {
      wa('send', 'banner.clue_form.submit');
    }
  }
}
</script>

<style scoped lang='less'>
.group-ipts {
  position: relative;
  .error-name {
    position: absolute;
    line-height: 14px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 10px;
    padding: 3px 5px;
    filter: alpha(opacity=90);
    -moz-opacity: 0.9;
    -khtml-opacity: 0.9;
    opacity: 0.9;
    top: -10px;
    right: 10px;
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
      border-top-color: rgba(0, 0, 0, 0.8);
    }
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
}

.banner-form {
  width: 272px;
  height: 340px;
  background: #fff;
  border-radius: 6px;
  float: right;
  margin-top: 112px;
  padding: 0 24px;
  .form-title {
    display: block;
    margin: 32px auto 23px;
  }
  .form-ipt {
    width: 246px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    color: #808080;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  .ipts-control {
    width: 130px;
    border: 1px solid #e0e0e0;
    color: #808080;
    font-size: 16px;
    padding: 10px;
    background: url(http://wenba-ooo-qiniu.xueba100.com/b60619fcd68ca0d2bfbe3bc07e1be7c4.png)
      no-repeat 107px center;
    &:invalid {
      color: #e0e0e0;
    }
  }
  .ipts-term {
    float: left;
  }
  .ipts-subject {
    float: right;
  }
  .form-btns {
    height: 48px;
    margin: 10px 0 12px;
    .form-btn {
      display: block;
      width: 130px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      border-radius: 6px;
    }
    .listen-btn {
      background: #cccccc;
      float: left;
      // &:hover{
      //   background:  #ff4141;
      // }
    }
    .online-btn {
      background: #ff4141;
      float: right;
      // &:hover{
      //   background:  #ccc;
      // }
    }
  }
  .form-des {
    text-align: center;
    font-size: 14px;
    color: #808080;
    span {
      color: #ff4141;
    }
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
  display: none;
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

