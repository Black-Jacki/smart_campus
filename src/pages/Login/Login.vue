<template>
  <div id="login">
    <div class="title-box">
      <div class="logo"></div>
      <div class="xiaoyuan-mingcheng">浦东二中心智慧校园</div>
    </div>
    <div class="change-tabs">
      <div
        class="saoma-login"
        :class="{ 'login-text-on': !isPasswd }"
        @click="isPasswd = false"
      >
        微信扫码登录
      </div>
      <div
        class="passwd-login"
        @click="isPasswd = true"
        :class="{ 'login-text-on': isPasswd }"
      >
        帐号密码登录
      </div>
    </div>
    <div class="login-box">
      <div class="erweima" v-if="!isPasswd">
        <div class="erweima-img"></div>
        <div class="erweima-tips">
          通过小程序完成绑定的用户,请使用微信扫一扫快捷登录
        </div>
      </div>
      <div class="user-pd-box" v-if="isPasswd">
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
        <el-button class="btn-login" type="success">登 录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isPasswd: true,
      username: "",
      password: "",
      captcha: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.title-box {
  display: flex;
  flex-direction: row;
  width: 278px;
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
  width: 278px;
  height: 50px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eeeeee;
}
.saoma-login,
.passwd-login {
  font: normal 14px/50px "Microsoft Yahei";
  color: #666666;
}
.saoma-login:hover,
.passwd-login:hover {
  color: #7ad87a;
}
.passwd-login {
  margin-left: 40px;
}
.login-text-on {
  color: #5cb85c;
  border-bottom: 2px solid #5cb85c;
}
.erweima-img {
  background: url("./images/erweima.jpg") no-repeat;
  background-size: 100%;
  width: 160px;
  height: 160px;
  margin: auto;
}
.erweima-tips {
  font-size: 13px;
  color: #666666;
  text-align: center;
  margin-top: 20px;
}
.user-pd-box {
  display: flex;
  flex-direction: column;
}
.ipt-user,
.ipt-pd,
.cap-box,
.btn-login {
  width: 278px;
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
  margin: 15px 0 0 5px;
}
.ipt-pd,
.ipt-cap {
  margin-top: 20px;
}
.btn-login {
  background: #5cb85c;
  height: 34px;
  padding: 0;
  font: normal 14px/34px 'Microsoft Yahei';
  margin-top: 20px;
  justify-content: center;
}
</style>