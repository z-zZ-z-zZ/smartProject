<template>
  <div>
    <div id="app">
      <div class="page">
        <!-- 头部 -->
        <header class="headCon">
          <a href="index.html"><em @click="$router.back()"></em></a>
          <p class="title">购物车</p>
          <p class="menuMore">
            <span></span>
            <span></span>
            <span></span>
          </p>
        </header>

        <!-- 购物车内容 -->
        <ul class="cont">
          <!-- 复选框选中 -->
          <li
            :class="[index == pitch_on ? 'move' : '']"
            v-for="(item, index) in shopCar"
            @click="delShow(index)"
            :key="index"
          >
            <div>
              <input
                type="checkbox"
                v-model="item.ck"
                @change.stop="checkif"
                @click.stop=""
              />
              <div class="pic">
                <img :src="item.imgSrc" alt="#" />
              </div>
              <div class="text">
                <h5>{{ item.name }}</h5>
                <p>
                  规格:<span>{{ item.size }}</span>
                </p>
                <p class="price">&yen; {{ item.price.toFixed(2) }}</p>
              </div>
              <div class="number clearfix">
                <span @click.stop="sub(index)">-</span>
                <input type="text" :value="item.num" />
                <span @click.stop="add(index)">+</span>
              </div>
            </div>
            <div class="dele" @click="del(index)">删除</div>
          </li>
          <li v-if="shopCar.length == 0" class="goodsNull">
            <p>您的购物车已空！</p>
          </li>
        </ul>

        <div class="pad2"></div>
        <!-- 确认购物 -->
        <section class="sureBuy">
          <ul>
            <li>
              <input type="checkbox" @change="checkAll" v-model="checkall" />
              <span>全选</span>
            </li>
            <li>
              <p>
                总计: <span>{{ priceSum }}</span>
              </p>
              <p>不含运费：已优惠 &yen; 0.00</p>
            </li>
            <li>
              <a href="#">去结算(1件)</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
    <footer-nav/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkall: false,
      pitch_on: -1,
      shopCar: [
        {
          imgSrc: require("../../assets/images/shopping-car/shop_4.png"),
          name: "欧莱雅面霜",
          size: "50g",
          price: 123,
          num: 1,
          ck: false,
        },
        {
          imgSrc: require("../../assets/images/shopping-car/shop_4.png"),
          name: "雅诗兰黛护手霜",
          size: "50g",
          price: 26,
          num: 1,
          ck: false,
        },
        {
          imgSrc: require("../../assets/images/shopping-car/shopCart.jpg"),
          name: "雅诗兰黛素颜霜",
          size: "50g",
          price: 226,
          num: 1,
          ck: false,
        },
      ],
    };
  },
  methods: {
    add(i) {
      this.shopCar[i].num++;
      // console.log(this.shopCar)
    },
    sub(i) {
      if (this.shopCar[i].num <= 1) {
        this.shopCar[i].num = 0;
        console.log("不能点了");
      } else {
        this.shopCar[i].num--;
      }
    },
    del(i) {
      this.shopCar.splice(i, 1);
    },
    delShow(i) {
      if (this.pitch_on == i) {
        this.pitch_on = -1;
      } else {
        this.pitch_on = i;
      }
    },
    checkAll() {
      this.shopCar.map((item) => (item.ck = this.checkall));
    },
    checkif() {
      this.shopCar.every((item) => (this.checkall = item.ck));
    },
  },
  computed: {
    priceSum() {
      let sum = 0;
      this.shopCar.map((item) => {
        sum += item.price * item.num;
      });
      return sum.toFixed(2);
    },
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

.headCon em::before, .headCon em::after {
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

.flexSa {
  display: flex;
  justify-content: space-around;
}

.flexSb {
  display: flex;
  justify-content: space-between;
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

.cont {
  padding: .3rem 0;
  overflow: hidden;
}

.cont li {
  display: flex;
  padding-left: .22rem;
  width: calc(100% + .98rem);
  margin-bottom: .3rem;
  box-shadow: 0 0 .1rem #eee;
  transition: all .3s;
}

ul .goodsNull {
  box-shadow: 0 0 0 #fff;
  padding-left: 0;
}

.cont li>p {
  width: calc(100% - .98rem);
  text-align: center;
  margin-top: 1.5rem;
  font: .65rem/.65rem "微软雅黑";
  color: orangered;
}

.cont li>div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.cont li>div:first-child .checked {
  width: .34rem;
  height: .34rem;
  border: 1px solid #cacaca;
  border-radius: 50%;
}

.cont li>div:first-child .pic {
  margin: 0 .35rem;
}

.cont li>div:first-child .pic img {
  width: 1.08rem;
  height: auto;
}

.cont li>div:first-child .text {
  width: 2.3rem;
  padding: .07rem 0 .1rem;
}

.cont li>div:first-child .text h5 {
  font: 0.26rem/0.54rem "微软雅黑";
  color: #333;
}

.cont li>div:first-child .text p {
  font: 0.24rem/0.51rem "微软雅黑";
  color: #666;
}

.cont li>div:first-child .text p span {
  font: 0.24rem/0.51rem Arial;
}

.cont li>div:first-child .text .price {
  font: 0.32rem/0.5rem Arial;
  color: #e3393c;
}

.cont li>div:first-child .number {
  padding: .85rem .3rem 0 0;
  margin-right: .33rem;
}

.cont li>div:first-child .number span {
  float: left;
  width: .62rem;
  height: .57rem;
  border: 1px solid #454545;
  border-radius: .04rem 0 0 .04rem;
  font-size: .2rem;
  line-height: .57rem;
  text-align: center;
}

.cont li>div:first-child .number input {
  float: left;
  height: .57rem;
  width: .79rem;
  border: 1px solid #454545;
  border-width: 1px 0;
  text-align: center;
}

.cont li>div:first-child .number span:nth-of-type(2) {
  border-radius: 0 .04rem .04rem 0;
}

.cont li .dele {
  width: .98rem;
  height: 1.72rem;
  background: #e43a3d;
  font: 0.24rem/1.72rem "微软雅黑";
  color: #fff;
  text-align: center;
}

.cont .active .checked {
  border-color: #b12919;
  background: url(../../assets/images/shopping-car/selectCart.jpg) no-repeat center;
}

.cont .move {
  transform: translateX(-1.08rem);
}

.sureBuy {
  border-top: 1px solid #e5e5e5;
  position: fixed;
  left: 0;
  bottom: 1.2rem;
  width: 100%;
  background: #fff;
}

.sureBuy ul {
  height: 1.14rem;
  display: flex;
  justify-content: space-between;
  padding-left: .23rem;
}

.sureBuy ul li:nth-child(1) {
  display: flex;
  justify-content: space-between;
  width: 1rem;
  align-items: center;
}

.sureBuy ul li:nth-child(1) div {
  width: .34rem;
  height: .34rem;
  border-radius: 50%;
  border: 1px solid #b12919;
  background: url(../../assets/images/shopping-car/selectCart.jpg) no-repeat center;
}

.sureBuy ul li:nth-child(1) span {
  font: 0.24rem/1.14rem "微软雅黑";
  color: #666;
}

.sureBuy ul li:nth-child(2) {
  padding: .16rem 0;
  text-align: right;
}

.sureBuy ul li:nth-child(2) p:first-child {
  font: 0.3rem/0.46rem "微软雅黑";
  color: #333;
}

.sureBuy ul li:nth-child(2) p:first-child span {
  color: #e4393f;
}

.sureBuy ul li:nth-child(2) p:last-child {
  font: 0.2rem/0.36rem "微软雅黑";
  color: #a3a3a3;
}

.sureBuy ul li:nth-child(3) a {
  display: block;
  width: 2.48rem;
  height: 1.14rem;
  font: 0.3rem/1.14rem "微软雅黑";
  color: #fff;
  background: #f26b11;
  text-align: center;
}

.pad2 {
  background: #fff;
  height: 1.15rem;
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
  justify-content: space-between;
  height: 1.2rem;
  align-items: center;
  padding: 0 .5rem;
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
</style>
