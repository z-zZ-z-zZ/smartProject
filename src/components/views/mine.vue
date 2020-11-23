<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a href="index.html"><em @click="$router.back()"></em></a>
        <p class="title">我的订单</p>
        <p class="menuMore">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- 头像 -->
      <section class="headPic clearfix">
        <div class="pic">
          <img src="../../assets/images/mine/mine.png" alt="#" />
        </div>
        <div class="text">
          <p>悠溯</p>
          <p>V1</p>
        </div>
        <div class="box">
          <a href="#">每日签到</a>
        </div>
      </section>

      <!-- 订单--付款--收货 -->
      <ul class="nav">
        <li>
          <a href="#">
            <img src="../../assets/images/mine/iconMine_1.jpg" alt="#" />
            <p>全部订单</p>
          </a>
        </li>
        <li>
          <a href="order-form.html">
            <img src="../../assets/images/mine/iconMine_2.jpg" alt="#" />
            <p>待付款</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/mine/iconMine_3.jpg" alt="#" />
            <p>待收货</p>
          </a>
        </li>
      </ul>

      <!-- 菜单导航 -->
      <ul class="menuNav">
        <li>
          <a href="#">
            <p class="left"><span></span>地址管理</p>
            <p class="right"></p>
          </a>
        </li>
        <li>
          <a href="#">
            <p class="left"><span></span>我的钱包</p>
            <p class="right">200余额</p>
          </a>
        </li>
        <li>
          <a href="#">
            <p class="left"><span></span>我的优惠劵</p>
            <p class="right"></p>
          </a>
        </li>
        <li>
          <a href="#">
            <p class="left"><span></span>我的二维码</p>
            <p class="right"></p>
          </a>
        </li>
        <li>
          <a href="#">
            <p class="left"><span></span>我的小伙伴</p>
            <p class="right"></p>
          </a>
        </li>
      </ul>
    </div>
    <footer-nav/>
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
.flexSb {
  display: flex;
  justify-content: space-between;
}
.flexSa {
  display: flex;
  justify-content: space-around;
}
.headCon {
  height: .88rem;
}
.headCon em {
  position: relative;
}
.headCon em::before,
.headCon em::after {
  content: "";
  position: absolute;
  left: 0;
  top: -0.13rem;
  border-right: .15rem solid #fff;
  border-top: .15rem solid transparent;
  border-bottom: .15rem solid transparent;
}
.headCon .menuMore {
  display: flex;
  justify-content: space-between;
  width: .55rem;
}
.headCon .menuMore span {
  display: block;
  width: .12rem;
  height: .12rem;
  border-radius: 50%;
  background: #000;
}
.footMenu {
  width: calc(99%);
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ebebeb;
  background: #fff;
}
.footMenu ul {
  display: flex;
  justify-content: space-around;
  height: 1.2rem;
  align-items: center;
}
.footMenu ul li {
  text-align: center;
}
.footMenu ul li img {
  width: .55rem;
  height: .56rem;
}
.footMenu ul li p {
  font: 0.2rem/0.41rem "微软雅黑";
  color: #8c8c8c;
}
.pad {
  height: 1.2rem;
  background: #fff;
}
.flexSb {
  display: flex;
  justify-content: space-between;
}
.page {
  background: #f0f0f0;
}
.headCon {
  background: #f26b11;
  padding: .4rem .23rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headCon em::after {
  left: .03rem;
  border-right-color: #f26b11;
}
.headCon .title {
  font: 0.35rem/0.88rem "微软雅黑";
  color: #fff;
}
.headCon .menuMore span {
  background: #fff;
}
.headPic {
  padding: .27rem .33rem;
  background: #f26b11;
}
.headPic .pic {
  float: left;
  width: 1.4rem;
  height: 1.4rem;
  border: 4px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  background: #822e02;
  text-align: center;
}
.headPic .pic img {
  width: 1.3rem;
  height: 1.36rem;
  position: relative;
  top: .1rem;
  left: -0.05rem;
}
.headPic .text {
  float: left;
  padding: .33rem 0 0 .26rem;
}
.headPic .text p:nth-child(1) {
  font: 0.3rem/0.53rem "微软雅黑";
  color: #fff;
}
.headPic .text p:nth-child(2) {
  font: italic 0.28rem/0.42rem "微软雅黑";
  color: #28181b;
}
.headPic .box {
  float: right;
  width: 1.59rem;
  height: .71rem;
  background: #fff;
  text-align: center;
  border-radius: .05rem;
  margin-top: .45rem;
}
.headPic .box a {
  font: 0.26rem/0.71rem "微软雅黑";
  color: #f26b11;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .35rem .6rem .14rem;
  background: #fff;
}
.nav li a {
  display: block;
  text-align: center;
}
.nav li a img {
  width: auto;
  height: .3rem;
}
.nav li a p {
  font: 0.24rem/0.62rem "微软雅黑";
  color: #5e5e5e;
}
.menuNav {
  background: #fff;
  margin-top: .21rem;
  padding: 0 .3rem;
}
.menuNav li a {
  display: flex;
  justify-content: space-between;
}
.menuNav li a .left {
  padding-left: .64rem;
  font: 0.26rem/1.1rem "微软雅黑";
  color: #636363;
  position: relative;
}
.menuNav li a .left span {
  position: absolute;
  left: -0.05rem;
  top: .35rem;
  width: .5rem;
  height: .4rem;
  background: url(../../assets/images/mine/cssspr.png) no-repeat;
  background-size: .66rem 2.78rem;
  background-position: -0.05rem -2.26rem;
}
.menuNav li a .right {
  background: url(../../assets/images/mine/arrowRight.jpg) no-repeat right;
  background-size: .19rem .26rem;
  height: 1.1rem;
  width: 1.3rem;
}
.menuNav li:nth-child(2) a .left span {
  background-position: -0.05rem -1.7rem;
}
.menuNav li:nth-child(2) a .right {
  font: 0.24rem/1.1rem "微软雅黑";
  color: #f26b11;
}
.menuNav li:nth-child(3) a .left span {
  background-position: -0.1rem -0.08rem;
}
.menuNav li:nth-child(4) a .left span {
  background-position: -0.05rem -0.6rem;
}
.menuNav li:nth-child(5) a .left span {
  background-position: -0.05rem -1.15rem;
}

</style>
