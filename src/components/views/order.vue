<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a href="details.html"><em @click="$router.back()"></em></a>
        <p class="title">确认订单</p>
        <p class="menuMore">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- 相关内容 -->
      <article class="cont">
        <!-- 收件人及地址 -->
        <header class="address">
          <div class="text">
            <section class="cust">
              <p>收货人：YouSu</p>
              <p>10000000000</p>
            </section>
            <section class="add">
              <h5>收货地址：</h5>
              <p>北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</p>
            </section>
          </div>
          <p></p>
        </header>

        <!-- 购买物品信息 -->
        <section class="goods">
          <!-- 购买的商品及价格 -->
          <div class="top">
            <div class="goods">
              <img src="../../assets/images/shopping-car/shop_4.png" alt="#" />
              <div class="text">
                <h5>雅诗兰黛护肤霜</h5>
                <p>规格：50g</p>
              </div>
            </div>
            <p><span>&yen; </span>123.00</p>
          </div>

          <!-- 购买物品数量 -->
          <div class="numb">
            <h5>购买数量:</h5>
            <div class="click clearfix">
              <span>-</span>
              <input type="text" value="1" />
              <span>+</span>
            </div>
          </div>

          <!-- 配送方式 -->
          <div class="bot">
            <p>配送方式</p>
            <p>XX快递</p>
          </div>
        </section>

        <!-- 积分和优惠券 -->
        <section class="coupon">
          <!-- 优惠券 -->
          <div class="top">
            <p>优惠券</p>
            <p>无可用</p>
          </div>
          <!-- 积分 -->
          <div class="bott">
            <p>使用积分</p>
            <div class="right clearfix">
              <input type="text" placeholder="输入积分" />
              <a href="#">使用</a>
              <p>可用<span>50</span>积分</p>
            </div>
          </div>
        </section>

        <!-- 价格总计 -->
        <section class="price">
          <ul>
            <li>
              <p>商品名称</p>
              <p>&yen; 123.00</p>
            </li>
            <li>
              <p>运费</p>
              <p>+&yen; 0.00</p>
            </li>
            <li>
              <p>优惠券</p>
              <p>-&yen; 0.00</p>
            </li>
            <li>
              <p>会员优惠</p>
              <p>-&yen; 0.00</p>
            </li>
            <li>
              <p>积分抵扣</p>
              <p>-&yen; 0.00</p>
            </li>
            <!-- 实付金额 -->
            <li class="sub">
              <p>实付金额：</p>
              <p>&yen; 123.00</p>
            </li>
            <li class="refer">
              <a href="#">提交订单</a>
            </li>
          </ul>
        </section>
      </article>
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
.flexSb {
  display: flex;
  justify-content: space-between;
}
.txt24 {
  font: 0.24rem "微软雅黑";
  color: #666;
}
.headCon {
  background: #f26b11;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.23rem;
}
.headCon a em::after {
  left: 0.03rem;
  border-right-color: #f26b11;
}
.headCon .title {
  font: 0.24rem/0.87rem "微软雅黑";
  color: #fff;
}
.headCon .menuMore span {
  background: #fff;
}
.cont {
  background: #f1f1f1;
}
.cont .address {
  background: #fff;
  padding: 0.13rem 0.23rem 0.23rem;
  display: flex;
  justify-content: space-between;
}
.cont .address .text {
  width: 6.5rem;
}
.cont .address .text .cust {
  display: flex;
  justify-content: space-between;
  width: 6.33rem;
}
.cont .address .text .cust p {
  font: 0.24rem/0.47rem "微软雅黑";
  color: #595959;
}
.cont .address .text .add {
  display: flex;
  font: 0.24rem/0.29rem "微软雅黑";
  color: #595959;
}
.cont .address .text .add h5 {
  width: 1.3rem;
  font: 0.24rem/0.29rem "微软雅黑";
}
.cont .address > p {
  width: 0.2rem;
  background: url(../../assets/images/arrowRight.jpg) no-repeat right center;
  background-size: 0.19rem 0.26rem;
}
.cont section.goods {
  background: #fff;
  margin-top: 0.12rem;
  padding: 0.15rem 0.23rem 0.1rem;
}
.cont section.goods .top {
  display: flex;
  justify-content: space-between;
}
.cont section.goods .top .goods {
  display: flex;
}
.cont section.goods .top .goods img {
  width: 1.08rem;
  height: auto;
}
.cont section.goods .top .goods .text {
  font: 0.24rem "微软雅黑";
  color: #666;
  line-height: 0.48rem;
  color: #adadad;
  padding-left: 0.2rem;
}
.cont section.goods .top .goods .text h5 {
  font: 0.24rem/0.48rem "微软雅黑";
  color: #575757;
}
.cont section.goods .top > p {
  font: 0.36rem "微软雅黑";
  color: #e7354d;
}
.cont section.goods .top > p span {
  font-size: 0.3rem;
}
.cont section.goods .numb {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
}
.cont section.goods .numb h5 {
  font: 0.24rem "微软雅黑";
  color: #666;
  padding: 0.45rem 0 0.62rem;
}
.cont section.goods .numb .click {
  padding-top: 0.3rem;
}
.cont section.goods .numb .click span {
  float: left;
  width: 0.73rem;
  height: 0.63rem;
  border: 1px solid #535353;
  border-radius: 0.04rem;
  font: 0.2rem/0.63rem Arial;
  text-align: center;
}
.cont section.goods .numb .click input {
  float: left;
  text-align: center;
  width: 1.17rem;
  height: 0.64rem;
  border: 1px solid #535353;
  border-radius: 0.05rem;
  margin: 0 0.1rem;
}
.cont section.goods .bot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.96rem;
}
.cont section.goods .bot p {
  font: 0.24rem "微软雅黑";
  color: #666;
}
.cont .coupon {
  padding: 0 0.23rem;
  margin-top: 0.1rem;
  background: #fff;
}
.cont .coupon .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  border-bottom: 2px solid #f1f1f1;
}
.cont .coupon .top p {
  font: 0.24rem "微软雅黑";
  color: #666;
}
.cont .coupon .bott {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.16rem 0 0.11rem;
}
.cont .coupon .bott p {
  font: 0.24rem "微软雅黑";
  color: #666;
}
.cont .coupon .bott .right input {
  float: left;
  width: 1.49rem;
  height: 0.7rem;
  border: 2px solid #d9d9d9;
  text-align: center;
  font: 0.24rem/0.7rem "微软雅黑";
  border-radius: 0.04rem;
}
.cont .coupon .bott .right input::-webkit-input-placeholder {
  font: 0.24rem/0.7rem "微软雅黑";
  color: #e7e7e7;
}
.cont .coupon .bott .right a {
  float: left;
  width: 0.7rem;
  height: 0.69rem;
  margin: 0 0.2rem 0 0.1rem;
  border: 2px solid #f4ab2a;
  background: #f26b11;
  font: 0.24rem/0.69rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 0.04rem;
}
.cont .coupon .bott .right p {
  float: right;
  font: 0.24rem "微软雅黑";
  color: #666;
  line-height: 0.74rem;
  color: #999;
}
.cont .coupon .bott .right p span {
  color: #f62646;
}
.cont .price {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0 0.23rem;
}
.cont .price ul {
  padding: 0.24rem 0 0.15rem;
}
.cont .price ul li {
  display: flex;
  justify-content: space-between;
}
.cont .price ul li p {
  font: 0.24rem "微软雅黑";
  color: #666;
  line-height: 0.45rem;
}
.cont .price ul li p:nth-child(2) {
  color: #e23b42;
}
.cont .price ul .sub {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 1.3rem;
}
.cont .price ul .sub p {
  font-size: 0.36rem;
}
.cont .price ul .refer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.3rem;
}
.cont .price ul .refer a {
  display: block;
  font: 0.3rem/1.12rem "微软雅黑";
  color: #fff;
  width: 3.55rem;
  height: 1.12rem;
  background: #f26b11;
  text-align: center;
  border-radius: 0.05rem;
}
</style>
