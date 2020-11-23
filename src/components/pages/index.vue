<template>
  <div id="app">
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a href="#" class="logo">
          <img src="../../assets/images/logo.jpg" alt="#" />
        </a>
        <input class="search" type="search" placeholder="寻找商品" />
        <p class="menuMore">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- 导航 -->
      <nav class="navbar">
        <ul class="clearfix">
          <li
            :class="index === 0 ? 'active' : ''"
            v-for="(item, index) in navBar"
            :key="index"
          >
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
        <p class="moreMenu"></p>
      </nav>

      <!-- banner图 -->
      <div class="banner">
        <a href="#" v-for="(item, index) in bannerImg" :key="index">
          <img :src="item.imgSrc" alt="banner" />
        </a>
      </div>

      <!-- iconsMenu -->
      <ul class="iconMenu">
        <li v-for="(item, index) in iconsMenu" :key="index">
          <a href="#">
            <img :src="item.imgSrc" alt="icon" />
            <p>{{ item.title }}</p>
          </a>
        </li>
      </ul>

      <!-- 限时秒杀 -->
      <div class="limit">
        <!-- 限时秒杀 -->
        <div class="limiTime">
          <h2>限时秒杀</h2>
          <p>每天零点场 好货秒不停</p>
          <p class="time">
            <span>02</span>
            <span>16</span>
            <span>45</span>
            <span>秒杀</span>
          </p>
          <img src="../../assets/images/index/shop_5.jpg" alt="#" />
          <p class="price">&yen;<span>14.8</span></p>
        </div>

        <!-- 品牌上新等 -->
        <div class="goods">
          <div class="top">
            <section>
              <h2>品牌上新</h2>
              <p>每日9点 抢大牌</p>
            </section>
            <section>
              <img src="../../assets/images/index/indexshop.jpg" alt="#" />
            </section>
          </div>
          <div class="bottom">
            <div class="btoLeft">
              <h2>每日十件</h2>
              <p>只为你选好货</p>
              <img src="../../assets/images/index/indexship2.jpg" alt="#" />
            </div>
            <div class="btoRight">
              <h2>拼啊</h2>
              <p>超级好价拼团</p>
              <img src="../../assets/images/index/shop_3.jpg" alt="#" />
            </div>
          </div>
        </div>
      </div>

      <!-- 广告 -->
      <div class="advert">
        <a href="#">
          <img src="../../assets/images/index/bar.jpg" alt="#" />
        </a>
      </div>
      <!-- 热门推荐 -->
      <div class="hot">
        <ul class="title">
          <li
            :class="[index === 0 ? 'active' : '']"
            v-for="(item, index) in classFour"
            :key="item.id"
          >
            <a href="#">{{ item.title }}</a>
          </li>
        </ul>
        <ul class="cont" v-for="item in classFour" :key="item.id">
          <li class="clearfix" v-for="items in item.info" :key="items.id">
            <div class="pic">
              <img :src="items.imgSrc" alt="#" />
            </div>
            <section class="info">
              <h4>{{ items.name }}</h4>
              <p><span>&yen;</span>{{ items.price }}</p>
              <p>{{ items.num }}</p>
              <a href="#">{{ items.do }}</a>
            </section>
          </li>
        </ul>
      </div>

      <footer-nav />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBar: [
        { name: "推荐" },
        { name: "女装" },
        { name: "鞋包" },
        { name: "居家" },
        { name: "母婴儿童" },
        { name: "美食" },
        { name: "男装" },
        { name: "厨房用具" },
        { name: "饮品" },
      ],
      bannerImg: [
        {
          imgSrc: require("../../assets/images/index/banner.jpg"),
        },
      ],
      iconsMenu: [
        {
          title: "限时抢购",
          imgSrc: require("../../assets/images/index/indexicon1.jpg"),
        },
        {
          title: "积分商城",
          imgSrc: require("../../assets/images/index/indexicon2.jpg"),
        },
        {
          title: "联系我们",
          imgSrc: require("../../assets/images/index/indexicon3.jpg"),
        },
        {
          title: "商品分类",
          imgSrc: require("../../assets/images/index/indexicon4.jpg"),
        },
      ],
      classFour: [
        {
          id: 1,
          title: "热门推荐",
          info: [
            {
              id: 1,
              imgSrc: require("../../assets/images/index/shop_4.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              num: "已售800件",
              do: "立即抢购",
            },
            {
              id: 2,
              imgSrc: require("../../assets/images/index/shop_4.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              num: "已售800件",
              do: "立即抢购",
            },
            {
              id: 3,
              imgSrc: require("../../assets/images/index/shop_4.jpg"),
              name: "雅诗兰黛染发膏60ml",
              price: "123.00",
              num: "已售800件",
              do: "立即抢购",
            },
          ],
        },
        {
          id: 2,
          title: "发现好货",
          info: [],
        },
        {
          id: 3,
          title: "只看专场",
          info: [],
        },
        {
          id: 4,
          title: "只看商品",
          info: [],
        },
      ],
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
body {
  background: #f1f1f1;
}
.headCon {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0.4rem 0.23rem 0;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
}
.headCon .logo img {
  width: auto;
  height: 0.29rem;
}
.headCon .search {
  width: 3.05rem;
  height: 0.39rem;
  text-align: center;
  background: #eeeeee;
  border-radius: 0.07rem;
  font: 0.18rem/0.39rem "微软雅黑";
}
.headCon .search::-webkit-input-placeholder {
  color: #b9b9b9;
}
.navbar {
  background: #fff;
  position: relative;
  overflow: hidden;
}
.navbar .moreMenu {
  position: absolute;
  right: 0;
  bottom: 0.1rem;
  width: 0.76rem;
  height: 0.55rem;
  background-color: #ffffff url("../../assets/images/index/arrow.jpg") no-repeat
    center;
  background-size: 0.35rem 0.21rem;
}
.navbar ul {
  width: 30rem;
  padding-top: 0.23rem;
  padding-left: 0.13rem;
}
.navbar ul li {
  float: left;
}
.navbar ul li a {
  display: block;
  font: 0.18rem/0.32rem "微软雅黑";
  color: #222222;
  border-bottom: 4px solid transparent;
  padding-bottom: 0.18rem;
  margin: 0 0.2rem;
}
.navbar ul .active {
  position: relative;
}
.navbar ul .active a {
  color: #ff003d;
  border-bottom: 4px solid #ff003d;
}
.navbar ul .active a::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 0.32rem;
  background: #f1f1f1;
}

.banner a img {
  width: 100%;
  height: auto;
}
.iconMenu {
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
}
.iconMenu li {
  padding: 0.3rem 0 0.18rem;
}
.iconMenu li a {
  display: block;
  text-align: center;
}
.iconMenu li a img {
  height: 0.62rem;
  width: auto;
}
.iconMenu li a p {
  font: 0.28rem/0.68rem "微软雅黑";
  color: #636363;
}
.limit {
  margin-top: 0.3rem;
  background: #fff;
  display: flex;
}
.limit .limiTime {
  flex-grow: 1;
  /* 放大  两个盒子平分空白空间 */
  padding-left: 0.17rem;
  position: relative;
  width: 3.4rem;
  border-right: 1px solid #f0f0f0;
}
.limit .limiTime h2 {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #f52468;
  padding-top: 0.13rem;
  padding-left: 0.46rem;
  position: relative;
}
/* .limit .limiTime h2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.15rem;
  background: url(../images/index/timer.jpg) no-repeat center;
  width: 0.33rem;
  height: 0.31rem;
  background-size: 0.33rem 0.31rem;
} */
.limit .limiTime p {
  font: 0.22rem/0.27rem "微软雅黑";
  color: #6d6d6d;
}
.limit .limiTime .time span {
  display: inline-block;
  background: #1f1f27;
  color: #fff;
  text-align: center;
  line-height: 0.42rem;
  border-radius: 0.06rem;
  width: 0.42rem;
  height: 0.42rem;
}
.limit .limiTime .time span:last-child {
  background: #fee300;
  width: 0.82rem;
  height: 0.4rem;
  position: relative;
}
.limit .limiTime .time span:last-child::before {
  content: "";
  position: absolute;
  right: -0.16rem;
  top: 0.01rem;
  height: 0.03rem;
  width: 0;
  border-left: 0.18rem solid #fee300;
  border-top: 0.18rem solid transparent;
  border-bottom: 0.18rem solid transparent;
}
.limit .limiTime p:nth-of-type(2) {
  margin-top: 0.06rem;
}
.limit .limiTime img {
  width: 2.36rem;
  height: 2rem;
  margin: 0.3rem 0 0.2rem 0.25rem;
}
.limit .limiTime .price {
  position: absolute;
  left: 2.3rem;
  bottom: 0.4rem;
  width: 0.84rem;
  height: 0.84rem;
  background: #ff3179;
  color: #fff;
  text-align: center;
  font-size: 0.2rem;
  line-height: 0.84rem;
  border-radius: 50%;
}
.limit .limiTime .price span {
  font: 0.28rem/0.84rem "微软雅黑";
}
.limit .goods {
  flex-grow: 1;
}
.limit .goods .top {
  display: flex;
  border-bottom: 1px solid #eee;
}
.limit .goods .top section {
  flex-grow: 1;
  padding-left: 0.17rem;
}
.limit .goods .top section h2 {
  position: relative;
  font: 0.3rem/0.39rem "微软雅黑";
  color: #f52468;
  padding-top: 0.13rem;
}
.limit .goods .top section h2::before {
  content: "折";
  position: absolute;
  left: 1.35rem;
  top: 0.2rem;
  width: 0.33rem;
  height: 0.23rem;
  color: #fff;
  font: 0.2rem/0.23rem "宋体";
  text-align: center;
  background: #f52468;
}
.limit .goods .top section p {
  font: 0.22rem/0.27rem "微软雅黑";
  color: #6d6d6d;
}
.limit .goods .top section img {
  width: 1.28rem;
  height: 1.78rem;
  margin: 0.05rem 0;
}
/* .limit .goods .top section:first-child {
  background: url(../images/index/brand.jpg) no-repeat;
  background-position: 0.2rem 1.05rem;
  background-size: 0.93rem 0.32rem;
} */
.limit .goods .bottom {
  display: flex;
}
.limit .goods .bottom .btoLeft {
  flex-grow: 1;
  padding-left: 0.17rem;
  border-right: 1px solid #eee;
}
.limit .goods .bottom .btoLeft h2 {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #f52468;
  padding-top: 0.13rem;
}
.limit .goods .bottom .btoLeft p {
  font: 0.22rem/0.27rem "微软雅黑";
  color: #6d6d6d;
}
.limit .goods .bottom .btoLeft img {
  width: 0.64rem;
  height: 1.02rem;
  margin: 0.12rem 0 0 0.45rem;
}
.limit .goods .bottom .btoRight {
  flex-grow: 1;
  padding-left: 0.17rem;
}
.limit .goods .bottom .btoRight h2 {
  font: 0.3rem/0.39rem "微软雅黑";
  color: #f52468;
  padding-top: 0.13rem;
}
.limit .goods .bottom .btoRight p {
  font: 0.22rem/0.27rem "微软雅黑";
  color: #6d6d6d;
}
.limit .goods .bottom .btoRight img {
  width: 1.04rem;
  height: 0.88rem;
  margin: 0.15rem 0 0 0.2rem;
}
.advert {
  margin-top: 0.3rem;
}
.advert a img {
  width: 100%;
  height: auto;
}
.hot {
  margin-top: 0.2rem;
  background: #fff;
  /* 标题分类 */
  /* 商品列表 */
}
.hot .title {
  padding: 0.2rem 0.2rem 0;
  display: flex;
  justify-content: space-between;
}
.hot .title li {
  flex-grow: 1;
}
.hot .title li a {
  display: block;
  height: 0.68rem;
  border: 1px solid #e4e4e4;
  border-left: 0;
  font: 0.18rem/0.68rem "微软雅黑";
  color: #0e0e0e;
  text-align: center;
}
.hot .title .active a {
  border: 0;
  height: 0.7rem;
  background: #f26b11;
  color: #fff;
}
.hot .cont {
  margin: 0.2rem 0.25rem 0.3rem;
  padding-bottom: 0.2rem;
}
.hot .cont li {
  background: #fff;
  padding: 0.3rem 0 0 0.3rem;
  box-shadow: 0 0 0.1rem #eee;
  margin-bottom: 0.3rem;
}
.hot .cont li .pic {
  float: left;
}
.hot .cont li .pic img {
  padding-top: 0.35rem;
  width: 2.16rem;
  height: 2.2rem;
}
.hot .cont li .info {
  float: left;
  padding-left: 0.45rem;
}
.hot .cont li .info h4 {
  font: 0.3rem/0.57rem "微软雅黑";
  color: #343434;
}
.hot .cont li .info p {
  font: 0.3rem/0.51rem "微软雅黑";
  color: #ed3c44;
}
.hot .cont li .info p span {
  font-size: 0.25rem;
}
.hot .cont li .info p:nth-of-type(2) {
  font: 0.24rem/0.58rem "微软雅黑";
  color: #959595;
}
.hot .cont li .info a {
  display: block;
  margin-top: 0.15rem;
  width: 1.64rem;
  height: 0.52rem;
  background: #ec6917;
  font: 0.24rem/0.52rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 0.06rem;
  margin-bottom: 0.3rem;
}
</style>
