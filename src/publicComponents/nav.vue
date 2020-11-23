<template>
  <div>
    <!-- 底边栏 -->
    <footer class="footMenu">
      <ul>
        <li>
          <router-link to="/index">
            <img src="../assets/images/public/iconIndex.jpg" alt="#" />
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/shopcar">
            <img src="../assets/images/public/iconCart.jpg" alt="#" />
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="/mine">
            <img src="../assets/images/public/iconMine.jpg" alt="#" />
            <p>我的</p>
          </router-link>
        </li>
      </ul>

      <!--  <ul>
        <li>
          <a href="#">
            <img src="../assets/images/public/iconIndex2.jpg" alt="#" />
            <p>首页</p>
          </a>
        </li>
        <li>
          <a href="shopping-car.html">
            <img src="../assets/images/public/iconCart.jpg" alt="#" />
            <p>购物车</p>
          </a>
        </li>
        <li>
          <a href="mine.html">
            <img src="../assets/images/public/iconMine.jpg" alt="#" />
            <p>我的</p>
          </a>
        </li>
      </ul> -->
    </footer>
    <!-- 底边栏占位 -->
    <div class="pad"></div>
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
</style>
