<template>
  <div class="banner">
    <div class="banner-inner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/banne1.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/banner2.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="../assets/banner3.png" alt />
          </div>
        </div>
        <!-- 如果需要导航按钮 -->

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "banner",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      // 如果需要分页器
      slidesPerView: 3,

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 如果需要滚动条
      scrollbar: ".swiper-scrollbar",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style>
.banner {
  background-image: url("../assets/bannerbgc.png");
  background-repeat: repeat;
  margin: 0 auto;
  width: 1200px;
  padding: 28px 54px;
  position: relative;
}
.banner .banner-inner {
  margin: 0 auto;
  width: 1110px;
}
.swiper-slide > img {
  display: block;
  width: 348px;
  height: 348px;
}
.el-carousel__item img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  margin-left: 28px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner .swiper-button-prev {
  outline: none;
  background-image: url("../assets/prev.png");
  background-repeat: no-repeat;
  background-size: 50%;
  width: 36px;
  top: 40%;
  height: 120px;
  left: 0;
  z-index: 1;
  background-color: #4b4410;
  position: absolute;
}
.banner .swiper-button-next {
  outline: none;
  background-image: url("../assets/next.png");
  background-repeat: no-repeat;
  background-size: 50%;
  top: 40%;
  width: 36px;
  height: 120px;
  right: 0;
  z-index: 1;
  background-color: #4b4410;
}
</style>
