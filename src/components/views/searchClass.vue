<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a href="classify.html"><em @click="$router.back()"></em></a>
        <a href="index.html">
          <img src="../../assets/images/logo.jpg" alt="#" />
        </a>
        <p class="menuMore">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- 搜索框 -->
      <section class="search">
        <input type="search" placeholder="搜索商品" />
      </section>

      <!-- 列表内容 -->
      <ul class="info">
        <li>
          <a href="#">
            <div class="pic">
              <img src="../../assets/images/List/pic2.jpg" alt="#" />
            </div>
            <div class="txt">
              <h4>
                阿道夫修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶
                旗舰店正品换新升级款
              </h4>
              <p><span>&yen;</span>123.00</p>
              <p>3625条评论</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="pic">
              <img src="../../assets/images/List/pic.jpg" alt="#" />
            </div>
            <div class="txt">
              <h4>滋源修护滋养洗发香乳</h4>
              <p><span>&yen;</span>123.00</p>
              <p>3625条评论</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="pic">
              <img src="../../assets/images/List/pic3.jpg" alt="#" />
            </div>
            <div class="txt">
              <h4>
                施华蔻修护滋养洗发香乳 洗发水 持久留香 520ml*2瓶
                旗舰店正品焕新升级款
              </h4>
              <p><span>&yen;</span>123.00</p>
              <p>3625条评论</p>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="pic">
              <img src="../../assets/images/List/pic4.jpg" alt="#" />
            </div>
            <div class="txt">
              <h4>资生堂修护滋养洗发香乳</h4>
              <p><span>&yen;</span>123.00</p>
              <p>3625条评论</p>
            </div>
          </a>
        </li>
      </ul>
      <footer-nav />
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
.headCon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0.33rem 0;
}
.headCon em::before,
.headCon em::after {
  top: -0.1rem;
}
.headCon em::before {
  border-right-color: #000;
  left: -0.03rem;
}
.headCon a img {
  width: auto;
  height: 0.29rem;
}
.search {
  width: 6.23rem;
  margin: 0 auto;
}
.search input {
  text-align: center;
  height: 0.77rem;
  width: 6.23rem;
  background: #f26b11 url(../../assets/images/List/search.jpg) no-repeat;
  background-position: 2rem 0.23rem;
  background-size: 0.26rem 0.27rem;
  border-radius: 0.38rem;
  font: 0.26rem/0.77rem "微软雅黑";
}
.search input::-webkit-input-placeholder {
  font: 0.26rem/0.77rem "微软雅黑";
  color: #fff;
}
ul.info {
  margin: 0.3rem 0.23rem 1.35rem;
}
ul.info li {
  border-bottom: 1px solid #d1d1d1;
  padding: 0.2rem 0;
}
ul.info li a {
  display: flex;
}
ul.info li a .pic img {
  width: 1.46rem;
  height: 1.6rem;
}
ul.info li a .txt {
  padding-left: 0.4rem;
}
ul.info li a .txt h4 {
  font: 0.26rem/0.36rem "微软雅黑";
  color: #333;
}
ul.info li a .txt p:nth-child(2) {
  font: 0.3rem/0.57rem Arial, "微软雅黑";
  color: #e5393c;
}
ul.info li a .txt p:nth-child(2) span {
  font-size: 0.26rem;
}
ul.info li a .txt p:nth-child(3) {
  font: 0.24rem/0.37rem "微软雅黑";
  color: #989898;
}
</style>
