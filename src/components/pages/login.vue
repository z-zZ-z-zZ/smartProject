<template>
  <div>
    <div class="page">
      <!-- header -->
      <header class="headCon">
        <a class="left" href="#" ></a>
        <h1>登录</h1>
        <a class="reg" href="register.html">注册</a>
      </header>
      <!-- main -->
      <div class="main" id="app">
        <form action="#">
          <label>手机号:<input type="text" name="tel" /></label>
          <label>密码:<input type="text" name="pwd" /></label>
          <a class="forgetPwd" href="javascript:;">忘记密码</a>
          <input type="button" value="登录" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="" scoped>
.page {
  max-width: 7.5rem;
  margin: 0 auto;
}
.headCon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.88rem;
  padding: 0.4rem 0.23rem 0;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
}
.headCon .menu {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}
.headCon .menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  background: #000;
}
.left {
  display: block;
  width: 0.17rem;
  height: 0.29rem;
  background: url(../../assets/images/arrowLeft_2.jpg) no-repeat center;
  background-size: 0.17rem 0.29rem;
}
.tabBar {
  width: 7.5rem;
  height: 1.2rem;
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.5rem;
  border-top: 1px solid #ebebeb;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -3.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabBar a {
  display: block;
  text-align: center;
}
.tabBar a img {
  width: auto;
  height: 0.53rem;
}
.tabBar a p {
  color: #6b6b6b;
  font: 0.2rem/0.42rem "微软雅黑";
}
.tabBar .active p {
  color: #e86419;
}
.headCon {
  padding: 0.4rem 0.35rem 0 0.29rem;
  background: #f26b11;
}

.headCon h1 {
  color: #fff;
  font: 0.35rem/0.88rem "微软雅黑";
}
.headCon a.reg {
  color: #fff;
  font: 0.35rem/0.88rem "微软雅黑";
}
form {
  width: 80%;
  margin: 1.48rem auto 0;
  display: flex;
  flex-direction: column;
}
form label {
  width: 100%;
  border-bottom: 1px solid #a3a3a3;
  font: 0.24rem/0.95rem "微软雅黑";
}
form input {
  text-indent: 0.2rem;
  font: 0.25rem/0.95rem "微软雅黑";
}
form a.forgetPwd {
  display: block;
  text-align: right;
  color: #666666;
  font: 0.18rem/0.78rem "微软雅黑";
}
form input[type="button"] {
  width: 100%;
  border-radius: 0.05rem;
  background: #ff9900;
  color: #ffffff;
  font: 0.3rem/0.75rem "微软雅黑";
}
</style>
