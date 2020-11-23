<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a href="classify.html"><em></em></a>
        <p class="title">商品详情</p>
        <p class="menuMore">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- 商品详情 -->
      <article class="content">
        <!-- 图片+价格信息 -->
        <section class="picTop">
          <div class="pic">
            <img src="../../assets/images/details/picDetail_1.jpg" alt="#" />
            <img src="../../assets/images/details/picDetail_2.jpg" alt="#" />
          </div>
          <div class="text">
            <h4>娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</h4>
            <p>&yen;123.00<span>(此价格不与套装优惠同时享受)</span></p>
          </div>
        </section>

        <!-- 购买数量等 -->
        <section class="buyNum">
          <ul>
            <!-- 促销信息 -->
            <li class="cheap">
              <div class="text clearfix">
                <h5>促销：<span>满减</span></h5>
                <p>满两件9折；3件8折</p>
              </div>
              <p></p>
            </li>
            <!-- 购买数量 -->
            <li class="num">
              <h5>购买数量</h5>
              <div class="box">
                <span>-</span>
                <input type="text" value="1" />
                <span>+</span>
              </div>
            </li>
            <!-- 商品规格 -->
            <li class="norms">
              <div class="top">
                <h5>商品属性</h5>
                <p></p>
              </div>
              <div class="bottom">
                <h6>规格</h6>
                <div class="text">
                  <p>30g</p>
                  <p>5g</p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- 商品详情 -->
        <section class="info">
          <h3>商品详情</h3>
          <div class="picBot">
            <img src="../../assets/images/details/picDetail_3.jpg" alt="#" />
            <img src="../../assets/images/details/picDetail_4 .jpg" alt="#" />
            <img src="../../assets/images/details/picDetail_5.jpg" alt="#" />
            <img src="../../assets/images/details/picDetail_6.jpg" alt="#" />
            <img src="../../assets/images/details/picDetail_7.jpg" alt="#" />
          </div>
        </section>

        <!-- 商品评价 -->
        <section class="speech">
          <h3>商品评价</h3>
          <div class="cont">
            <h6>1235668fg</h6>
            <p>效果很好，物流到位，下次继续来</p>
            <div class="pic">
              <img src="../../assets/images/details/picDetail_8.jpg" alt="#" />
              <img src="../../assets/images/details/picDetail_9.jpg" alt="#" />
              <img src="../../assets/images/details/picDetail_10.jpg" alt="#" />
            </div>
            <p class="time">2020-01-13</p>
          </div>
          <!-- 查看更多 -->
          <div class="total">
            <p>共<span>1000</span>+条评论</p>
            <a href="#">查看更多 &gt;</a>
          </div>
        </section>
      </article>

      <!-- 底部--加入购物车等 -->
      <footer class="add">
        <a href="shopping-car.html">购物车</a>
        <a href="#">加入购物车</a>
        <a href="order-form.html">立即购买</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
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
  height: 0.88rem;
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
  border-right: 0.15rem solid #fff;
  border-top: 0.15rem solid transparent;
  border-bottom: 0.15rem solid transparent;
}
.headCon .menuMore {
  display: flex;
  justify-content: space-between;
  width: 0.55rem;
}
.headCon .menuMore span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
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
  width: 0.55rem;
  height: 0.56rem;
}
.footMenu ul li p {
  font: 0.2rem/0.41rem "微软雅黑";
  color: #8c8c8c;
}
.pad {
  height: 1.2rem;
  background: #fff;
}
.hfonCol {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}
.page {
  background: #f0f0f0;
}
.headCon {
  background: #f26b11;
  padding: 0.4rem 0.23rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headCon em::after {
  left: 0.03rem;
  border-right-color: #f26b11;
}
.headCon .title {
  font: 0.35rem/0.88rem "微软雅黑";
  color: #fff;
}
.headCon .menuMore span {
  background: #fff;
}
.content .picTop {
  background: #fff;
}
.content .picTop .pic img {
  width: 100%;
  height: auto;
}
.content .picTop .text {
  padding-left: 0.3rem;
}
.content .picTop .text h4 {
  font: 0.3rem/0.48rem "微软雅黑";
  color: #343434;
  padding-right: 0.2rem;
}
.content .picTop .text p {
  font: 0.3rem/0.77rem Arial, "微软雅黑";
  color: #e23a3a;
}
.content .picTop .text p span {
  padding-left: 0.15rem;
  font: 0.22rem/0.77rem "微软雅黑";
  color: #868686;
}
.content .buyNum {
  background: #fff;
  margin-top: 0.17rem;
}
.content .buyNum ul li {
  padding: 0 0.22rem;
  border-bottom: 1px solid #f1f1f1;
}
.content .buyNum ul .cheap {
  display: flex;
  justify-content: space-between;
}
.content .buyNum ul .cheap .text h5 {
  float: left;
  text-align: center;
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}
.content .buyNum ul .cheap .text h5 span {
  margin-left: 0.1rem;
  font: 0.2rem/0.35rem "微软雅黑";
  color: #b12818;
  border: 1px solid #b12818;
  padding: 0.07rem 0.09rem;
  border-radius: 0.04rem;
  letter-spacing: 0.06rem;
}
.content .buyNum ul .cheap .text p {
  float: left;
  padding-left: 0.2rem;
  font: 0.24rem/0.98rem "微软雅黑";
  color: #454545;
}
.content .buyNum ul .cheap > p {
  width: 0.35rem;
  height: 0.98rem;
  background: #ffffff url(../../assets/images/details/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
.content .buyNum ul .num {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.08rem 0.2rem;
}
.content .buyNum ul .num h5 {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
}
.content .buyNum ul .num .box input {
  float: left;
  height: 0.55rem;
  width: 0.79rem;
  border: 1px solid #000;
  border-width: 1px 0;
  text-align: center;
}
.content .buyNum ul .num .box span {
  float: left;
  width: 0.62rem;
  height: 0.55rem;
  border: 1px solid #000;
  background: #fff;
  text-align: center;
  line-height: 0.55rem;
  font-size: 0.2rem;
  border-radius: 0.04rem 0 0 0.04rem;
}
.content .buyNum ul .num .box span:nth-of-type(2) {
  border-radius: 0 0.04rem 0.04rem 0;
}
.content .buyNum ul .norms {
  padding: 0.13rem 0.23rem 0.36rem;
}
.content .buyNum ul .norms .top {
  display: flex;
  justify-content: space-between;
  padding-top: 0.13rem;
}
.content .buyNum ul .norms .top h5 {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #454545;
  line-height: 0.8rem;
}
.content .buyNum ul .norms .top p {
  width: 0.35rem;
  height: 0.98rem;
  background: #ffffff url(../../assets/images/details/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
.content .buyNum ul .norms .bottom {
  display: flex;
}
.content .buyNum ul .norms .bottom h6 {
  font: 0.24rem/0.61rem "微软雅黑";
  color: #b5b5b5;
  width: 1.2rem;
}
.content .buyNum ul .norms .bottom .text {
  display: flex;
}
.content .buyNum ul .norms .bottom .text p {
  text-align: center;
  width: 1.5rem;
  height: 0.59rem;
  background: #e43a3d;
  font: 0.28rem/0.59rem "微软雅黑";
  color: #fff;
  border-radius: 0.04rem;
}
.content .buyNum ul .norms .bottom .text p:last-child {
  background: #e1e1e3;
  margin-left: 0.15rem;
}
.content .info {
  margin-top: 0.2rem;
}
.content .info h3 {
  padding-left: 0.23rem;
  font: 0.3rem/1rem "微软雅黑";
  background: #fff;
}
.content .info .picBot img {
  width: 100%;
  height: auto;
}
.content .speech {
  margin-top: 0.3rem;
  padding: 0 0.23rem;
  background: #fff;
}
.content .speech h3 {
  font: 0.3rem/0.93rem "微软雅黑";
  color: #454545;
  border-bottom: 1px solid #eee;
}
.content .speech .cont {
  border-bottom: 1px solid #eee;
}
.content .speech .cont h6 {
  font: 0.26rem/0.54rem Arial;
  color: #666;
}
.content .speech .cont p {
  font: 0.26rem/0.6rem "微软雅黑";
  color: #666;
}
.content .speech .cont .pic img {
  height: 1.51rem;
  width: auto;
  margin-right: 0.21rem;
}
.content .speech .cont .time {
  font: 0.26rem/0.77rem Arial;
  color: #999;
}
.content .speech .total {
  display: flex;
  justify-content: space-between;
}
.content .speech .total p {
  font: 0.24rem/0.91rem "微软雅黑";
  color: #989898;
}
.content .speech .total p span {
  font: 0.26rem/0.91rem Arial;
  color: #989898;
}
.content .speech .total a {
  font: 0.24rem/0.91rem "微软雅黑";
  color: #999;
}
.add {
  display: flex;
}
.add a:nth-child(1) {
  padding-top: 0.7rem;
  width: 1.72rem;
  font: 0.18rem/0.43rem "微软雅黑";
  color: #878787;
  text-align: center;
  border-top: 1px solid #f1f1f1;
  background: #ffffff url(../../assets/images/public/iconCart.jpg) no-repeat center;
  background-position: 50% 45%;
  background-size: 0.56rem 0.53rem;
  position: relative;
}
.add a:nth-child(1)::before {
  content: "2";
  position: absolute;
  right: 0.5rem;
  top: 0.16rem;
  font: 0.12rem/0.24rem Arial;
  color: #fff;
  border-radius: 50%;
  background: #e53939;
  width: 0.24rem;
  height: 0.24rem;
}
.add a:nth-child(2),
.add a:nth-child(3) {
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  background: #f26b11;
  width: 2.9rem;
  text-align: center;
}
.add a:nth-child(3) {
  background: #e43a3d;
}
</style>
