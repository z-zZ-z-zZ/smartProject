<template>
  <div>
    <div class="page">
      <!-- 头部 -->
      <header class="headCon">
        <a href="index.html"><em></em></a>
        <p class="title">商品分类</p>
        <p class="menuMore">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </header>

      <!-- 分类及详情 -->
      <article class="clearfix">
        <!-- 侧标导航栏 -->
        <section class="navLeft fl">
          <ul>
            <li
              :class="[index === 0 ? 'active' : '']"
              v-for="(item, index) in navLeft"
              :key="index"
            >
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
        </section>
        <!-- 分类内容详情 -->
        <section class="mess fl">
          <!-- 洗发类 -->
          <div class="shampoo">
            <header class="title clearfix">
              <h4>洗发类</h4>
              <a href="#">更多<span>></span></a>
            </header>
            <ul class="clearfix">
              <li v-for="(item,index) in washHairClass" :key="index">
                <a href="#">
                  <img :src="item.img" alt="#" />
                  <p>{{item.name}}</p>
                </a>
              </li>
             
            </ul>
          </div>

          <!-- 染发类 -->
          <div class="colour">
            <header class="title clearfix">
              <h4>染发类</h4>
              <a href="#">更多<span>></span></a>
            </header>
            <ul class="clearfix">
              <li v-for="(item,index) in dyeClass" :key="index">
                <a href="#">
                  <img :src="item.img" alt="#" />
                  <p>{{item.name}}</p>
                </a>
              </li>
            
            </ul>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLeft: [
        { name: "施华蔻" },
        { name: "沙宣" },
        { name: "欧莱雅" },
        { name: "潘婷" },
        { name: "资生堂" },
        { name: "阿道夫" },
        { name: "卡诗" },
        { name: "海飞丝" },
        { name: "资生堂" },
      ],
      washHairClass:[
          {
              name:'护亮泽洗发水',
              img:require('../../assets/images/classify/cpic_03.jpg')
          },
          {
              name:'滋养洗发水',
              img:require('../../assets/images/classify/pic2.jpg')
          },
          {
              name:'柔顺洗发露',
              img:require('../../assets/images/classify//pic.jpg')
          },
          {
              name:'去屑洗发露',
              img:require('../../assets/images/classify/pic3.jpg')
          },
          {
              name:'柔顺洗发露',
              img:require('../../assets/images/classify/cpic_07.jpg')
          },
          {
              name:'焕彩洗发水',
              img:require('../../assets/images/classify/cpic_09.jpg')
          },
      ],
      dyeClass:[
          {
              name:'施华蔻染色',
              img:require('../../assets/images/classify/cpic_14.jpg')
          },
          {
              name:'施华蔻双氧乳',
              img:require('../../assets/images/classify/cpic_13.jpg')
          },
          {
              name:'施华蔻染发膏',
              img:require('../../assets/images/classify/cpic_15.jpg')
          }
      ]
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
.fl {
  float: left;
}
.fr {
  float: right;
}
.flSa {
  display: flex;
  justify-content: space-around;
}
.flSb {
  display: flex;
  justify-content: space-between;
}
.headCon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f26b11;
  padding: 0.4rem 0.33rem 0;
  border-bottom: 2px solid #f1f1f1;
}
.headCon em::before,
.headCon em::after {
  top: -0.13rem;
}
.headCon em::after {
  left: 0.03rem;
  border-right-color: #f26b11;
}
.headCon .title {
  font: 0.35rem/0.88rem "微软雅黑";
  color: #fff;
  padding-left: .7rem;
}
.headCon .menuMore span {
  background: #fff;
}
article .navLeft ul {
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #d9d9d9;
  width: 1.55rem;
}
article .navLeft ul li {
  padding-bottom: 0.67rem;
}
article .navLeft ul li a {
  display: block;
  border-left: 8px solid transparent;
  font: 0.26rem/0.52rem "微软雅黑";
  color: #666;
  padding-left: 0.3rem;
}
article .navLeft ul .active {
  padding-top: 0.37rem;
}
article .navLeft ul .active a {
  border-left: 8px solid #f26b11;
  color: #f26b11;
}
article .mess {
  width: 5.3rem;
  padding: 0.12rem 0 0 0.26rem;
}
article .mess .shampoo .title {
  width: 4.6rem;
  padding-left: 0.3rem;
}
article .mess .shampoo .title h4 {
  float: left;
  font: 0.26rem/1.1rem "微软雅黑";
  color: #454545;
}
article .mess .shampoo .title a {
  float: right;
  font: 0.24rem/1.1rem "微软雅黑";
  color: #454545;
}
article .mess .shampoo ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
article .mess .shampoo ul li a {
  display: block;
  text-align: center;
}
article .mess .shampoo ul li a img {
  width: auto;
  height: 1.6rem;
}
article .mess .shampoo ul li a p {
  font: 0.24rem/0.67rem "微软雅黑";
  color: #888;
}
article .mess .colour .title {
  width: 4.6rem;
  padding-left: 0.3rem;
}
article .mess .colour .title h4 {
  float: left;
  font: 0.26rem/1.1rem "微软雅黑";
  color: #454545;
}
article .mess .colour .title a {
  float: right;
  font: 0.24rem/1.1rem "微软雅黑";
  color: #454545;
}
article .mess .colour ul {
  padding-left: 0.4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
article .mess .colour ul li a {
  display: block;
  text-align: center;
}
article .mess .colour ul li a img {
  width: auto;
  height: 1.6rem;
}
article .mess .colour ul li a p {
  font: 0.24rem/0.67rem "微软雅黑";
  color: #888;
}
</style>
