<template>
  <div class="advance-sale">
    <div class="inner">
      <div>
        <div class="time">
          <div class="top">
            <img src="../assets/aslogo.png" alt />
            <h2>{{presell.name}}</h2>
          </div>
          <div class="middle">
            <div class="left">
              <span>距预售结束</span>
              <count-down
                v-on:start_callback="countDownS_cb(1)"
                v-on:end_callback="countDownE_cb(1)"
                :currentTime="100000"
                :startTime="10000"
                :endTime="150000000"
                :tipText="'距离开始文字1'"
                :tipTextEnd="'距离结束文字1'"
                :endText="'结束自定义文字2'"
                :dayTxt="'天'"
                :hourTxt="'小时'"
                :minutesTxt="'分钟'"
                :secondsTxt="'秒'"
              ></count-down>
            </div>
            <div class="right">
              <span>相关专区</span>
              <img src="../assets/advanceSale.png" alt />
            </div>
          </div>
          <div class="bottom">
            <div class="left">
              <img src="../assets/advanceSalewish.png" alt />
              <span>分享</span>
              <img src="../assets/weibo.png" alt />
              <img src="../assets/weixin.png" alt />
            </div>
            <div class="right">
              <span>注：</span>商品将于
              <span>2019/10/5</span>统一发货
            </div>
          </div>
        </div>
        <div class="shop">
          <ul>
            <li>
              <span>预售价</span>
              <div class="one">
                <span>
                  <span>￥</span>
                  {{presell.price}}
                </span>
                <span>
                  正价:
                  <span>￥960.00</span>
                </span>
              </div>
            </li>
            <li>
              <span>款式</span>
              <div class="two">
                <span
                  @click="pickStyle({style:'iPhone'})"
                  :class="presell.style==='iPhone'?'active':''"
                >iPhone</span>
                <span
                  @click="pickStyle({style:'5iPhone'})"
                  :class="presell.style==='5iPhone'?'active':''"
                >5iPhone</span>
                <span
                  @click="pickStyle({style:'6iPhone 6+'})"
                  :class="presell.style==='6iPhone 6+'?'active':''"
                >6iPhone 6+</span>
              </div>
            </li>
            <li>
              <span>尺码</span>
              <div class="three">
                <span @click="pickSize({size:'XXS'})" :class="presell.size==='XXS'?'active':''">XXS</span>
                <span @click="pickSize({size:'XS'})" :class="presell.size==='XS'?'active':''">XS</span>
                <span @click="pickSize({size:'S'})" :class="presell.size==='S'?'active':''">S</span>
                <span @click="pickSize({size:'ML'})" :class="presell.size==='ML'?'active':''">ML</span>
                <span @click="pickSize({size:'XL'})" :class="presell.size==='XL'?'active':''">XL</span>
                <span @click="pickSize({size:'XXL'})" :class="presell.size==='XXL'?'active':''">XXL</span>
              </div>
            </li>
            <li>
              <span>数量</span>
              <div class="four">
                <span @click="sub">-</span>
                <span>{{presell.qty}}</span>
                <span @click="add">+</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="sale">
        <div>
          <router-link to="/scar">立即订购</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountDown from "../components/vue2-countdown";
import { mapState, mapMutations } from "vuex";
export default {
  name: "advancesale",
  components: {
    CountDown
  },
  data() {
    return {
      currentTime: 0,
      startTime: 9,
      endTime: 0
    };
  },
  created() {
    console.log(this.$store.state);
  },
  computed: {
    ...mapState({
      presell: state => state.ShowGoods.presell,
      select: state => state.ShowGoods.select
    })
  },
  methods: {
    countDownS_cb: function(x) {
      console.log(x);
    },
    countDownE_cb: function(x) {
      console.log(x);
    },
    ...mapMutations(["pickStyle", "pickSize", "add", "sub", "borderSelect"])
  }
};
</script>

<style>
.advance-sale .inner {
  background-color: #2b2e33;
  padding: 30px 0 20px 0;
  width: 1200px;
  margin: 0 auto;
}
.advance-sale .inner > div {
  display: flex;
  justify-content: space-between;
}
.advance-sale .inner .time {
  width: 636px;
  padding-right: 50px;
  border-right: 2px solid #707378;
  margin-left: 46px;
}
.advance-sale .inner .time .top,
.advance-sale .inner .time .middle {
  display: flex;
  justify-content: flex-start;
}
.advance-sale .inner .time .top > img {
  width: 86px;
  height: 126px;
  margin-bottom: 60px;
}
.advance-sale .inner .time .top > h2 {
  margin-left: 30px;
  width: 400px;
  font-size: 30px;
  color: #fefefe;
}
.advance-sale .inner .time .middle .left > span,
.advance-sale .inner .time .middle .right > span {
  color: #707378;
  display: block;
}
.advance-sale .inner .time .middle .right {
  margin-left: 10px;
}
.advance-sale .inner .time .middle .right > img {
  margin-top: 5px;
  width: 150px;
  height: 64px;
  margin-bottom: 15px;
}
.advance-sale .inner .time .bottom {
  display: flex;
  justify-content: space-between;
}
.advance-sale .inner .time .bottom > .left {
  display: flex;
  align-items: center;
}
.advance-sale .inner .time .bottom > .left > span {
  color: #fff;
  margin-left: 10px;
  font-size: 14px;
}
.advance-sale .inner .time .bottom > .left > img:nth-child(3) {
  margin: 0 10px;
}
.advance-sale .inner .time .bottom > .right {
  color: #fff;
  font-size: 14px;
}
.advance-sale .inner .time .bottom > .right > span {
  color: #fcd903;
  font-size: 14px;
}
.advance-sale .inner .shop > ul > li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
}
.advance-sale .inner .shop > ul > li > span:nth-child(1) {
  margin-right: 30px;
  width: 64px;
  line-height: 24px;
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .one > span:nth-child(1) {
  color: #fdd901;
  display: block;
  font-size: 26px;
}
.advance-sale
  .inner
  .shop
  > ul:nth-child(1)
  li
  > .one
  > span:nth-child(1)
  > span {
  font-size: 14px;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .one > span:nth-child(2) {
  font-size: 18px;
  color: #fff;
}
.advance-sale
  .inner
  .shop
  > ul:nth-child(1)
  li
  > .one
  > span:nth-child(2)
  > span {
  text-decoration: line-through;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .two > span {
  padding: 5px 8px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .three {
  cursor: pointer;
  width: 280px;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .three > span {
  display: inline-block;
  width: 65px;
  height: 28px;
  line-height: 28px;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-left: 5px;
  margin-top: 10px;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .four {
  width: 380px;
  display: flex;
  justify-content: space-between;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .four > span:first-child,
.advance-sale .inner .shop > ul:nth-child(1) li > .four > span:last-child {
  cursor: pointer;
  user-select: none;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .four > span:first-child,
.advance-sale .inner .shop > ul:nth-child(1) li > .four > span:last-child {
  outline: none;
  width: 56px;
  height: 30px;
  display: block;
  background-color: none;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  border: 1px solid #fefefe;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .four > span:last-child {
  margin-right: 50px;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .four > span:nth-child(2) {
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 5px;
}
.advance-sale .inner .sale {
  width: 1100px;
  padding: 20px 0;
  margin: 0 auto;
  margin-top: 20px;
  border-top: 2px solid #4f4f4f;
  border-bottom: 2px solid #4f4f4f;
}
.advance-sale .inner .sale > div {
  padding: 28px 0;
  width: 1100px;
  color: #fcd903;
  text-align: center;
  font-size: 26px;
  border: 2px solid #fcd903;
  border-radius: 8px;
}
.advance-sale .inner .sale > div > a {
  color: #feda00;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .two > span.active {
  border-color: #fcd800;
  color: #fcd800;
}
.advance-sale .inner .shop > ul:nth-child(1) li > .three > span.active {
  border-color: #fcd800;
  color: #fcd800;
}
</style>
