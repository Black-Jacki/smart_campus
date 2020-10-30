<template>
  <div id="login">
    <div class="title-box">
      <div class="logo"></div>
      <div class="xiaoyuan-mingcheng">浦东二中心智慧校园</div>
    </div>
    <div class="change-tabs">
      <el-tabs
        class="title-tabs-box"
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane label="微信扫码登录" name="first">
          <div class="erweima-img"></div>
          <div class="erweima-tips">
            通过小程序完成绑定的用户,请使用微信扫一扫快捷登录
          </div>
        </el-tab-pane>
        <el-tab-pane label="帐号密码登录" name="second">
          <el-input
            placeholder="用户名"
            prefix-icon="el-icon-user"
            v-model="username"
            class="ipt-user"
            size="medium"
          >
          </el-input>
          <el-input
            placeholder="密码"
            prefix-icon="el-icon-lock"
            v-model="password"
            show-password
            class="ipt-pd"
            size="medium"
          ></el-input>
          <div class="cap-box">
            <el-input
              v-model="captcha"
              placeholder="请输入验证码"
              class="ipt-cap"
              size="medium"
            ></el-input>
            <div class="cap-img"></div>
          </div>
          <el-button class="btn-login" type="success" @click="btn_login">登 录</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      activeName: "second",
      username: "",
      password: "",
      captcha: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      null;
    },
    btn_login() {
      let that = this
      if (that.captcha == '2vxy' || that.captcha == '2VXY') {
        if (that.username == 123456) {
          if (that.password == 123456) {
            that.$router.push('/details')
          } else {
            alert('密码错误！')
          }
        } else {
          alert('用户名错误！')
        }
      } else {
        alert('验证码错误！')
      }
    }
  },
};
</script>

<style>
.title-tabs-box {
  width: 295px;
}
.title-tabs-box .el-tabs__item.is-active {
  color: #5cb85c;
}
.title-tabs-box .el-tabs__item:hover {
  color: #7ad87a;
}
.title-tabs-box .el-tabs__active-bar {
  background-color: #5cb85c;
}
</style>

<style scoped>
.title-box {
  display: flex;
  flex-direction: row;
  width: 295px;
  margin: 22vh auto 0;
}
.logo {
  background: url("./images/logo.png") no-repeat;
  background-size: 100%;
  width: 50px;
  height: 50px;
}
.xiaoyuan-mingcheng {
  font: normal 24px/50px "Microsoft Yahei";
  color: #555555;
  margin-left: 10px;
}
.change-tabs {
  width: 295px;
  height: 50px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
}
.erweima-img {
  background: url("./images/erweima.jpg") no-repeat;
  background-size: 100%;
  width: 160px;
  height: 160px;
  margin: auto;
}
.erweima-tips {
  font-size: 12px;
  color: #666666;
  text-align: center;
  margin-top: 15px;
}
.ipt-user,
.ipt-pd,
.cap-box,
.btn-login {
  width: 295px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}
.ipt-cap {
  width: 160px;
}
.cap-img {
  background: url("./images/captcha.png") no-repeat;
  background-size: 100%;
  width: 118px;
  height: 40px;
  margin: 15px 0 0 10px;
  cursor: pointer;
}
.ipt-pd,
.ipt-cap {
  margin-top: 20px;
}
.btn-login {
  background: #5cb85c;
  height: 34px;
  padding: 0;
  font: normal 14px/34px "Microsoft Yahei";
  margin-top: 20px;
  justify-content: center;
}
</style>