<template>
  <div class="shopcart">
    <div class="inner">
      <div class="top">
        <div>
          购物车[
          <span>{{order.length}}</span>件]
        </div>
        <ul>
          <li>
            <span>购物车</span>
          </li>
          <li>
            <span>填写订单</span>
          </li>
          <li>
            <span>付款，购买成功</span>
          </li>
        </ul>
      </div>
      <div class="content" v-if="order">
        <div class="goods-bar">
          <div class="allchecked">
            <label class="text" @click="changeChecked()">
              <span v-if="changeCheck">√</span>
            </label>
            <label for="all">全选</label>
            <span>商品</span>
          </div>
          <div class="tool">
            <span>单价</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
          </div>
        </div>
        <div class="show-goods">
          <li v-for="cart in order" :key="cart.id">
            <div class="goods-detail">
              <div class="siglechecked">
                <label @click="checked(cart.id)" class="text">
                  <span v-if="cart.checked">√</span>
                </label>
              </div>
              <img :src="cart.img" alt />
              <div>
                <p>{{cart.name}}</p>
                <span>款式：{{cart.style}}</span>
                <span>尺码：{{cart.size}}</span>
              </div>
            </div>
            <div class="number">
              <span>￥{{cart.price}}</span>
              <span @click="subQuantity(cart.id)">-</span>
              <span>{{cart.qty}}</span>
              <span @click="addQuantity(cart.id)" :disabled="cart.qty>=cart.inventory?true:false">+</span>
              <span>￥{{cart.price*cart.qty}}</span>
              <span @click="deleteWindow(cart.id)">x</span>
              <div v-if="cart.show" class="del-show">
                <img src="../assets/sanjiao.png" alt />
                <div>
                  <span class="del" @click="delcart(cart.id)">确定删除</span>
                  <span class="undel" @click="deleteWindow(cart.id)">不删除</span>
                </div>
              </div>
            </div>
          </li>
        </div>
        <div class="goods-submit">
          <div class="left">
            <div class="allchecked">
              <label id="all" class="text" @click="changeChecked()">
                <span v-if="changeCheck">√</span>
              </label>
              <label for="all" class="all">全选</label>
            </div>
            <div class="delect">
              <img src="../assets/shopcartdelect_44.png" alt />
              <span @click="delAllCart">删除</span>
            </div>
            <div class="wish">
              <img src="../assets/shopcartwish.png" alt srcset />
              <span>转到愿望单</span>
            </div>
            <div class="totalnum">
              <p>
                共
                <span>{{order.length}}</span>
                件商品，已经选择
                <span>{{totalqty}}</span>
                件
              </p>
            </div>
            <div class="totalprice">
              <div>
                <span>合计:</span>
                <span>[不含运费]</span>
              </div>
              <span>￥{{totalMoney}}</span>
            </div>
          </div>
          <div class="submit" @click="showLogin">去结算</div>
          <div :class="showUser?'mask':''">
            <div v-if="showUser" class="login">
              <span class="close" @click="showLogin">x</span>
              <img src="../assets/login-logo.png" alt class="userlogo" />
              <div class="input">
                <div>
                  <label for></label>
                  <input type="text" placeholder="请输入手机" />
                </div>
                <div>
                  <label for></label>
                  <input type="text" placeholder="请输入密码" />
                </div>
                <div>
                  <!-- <input type="text" placeholder="请输入验证码" />
                  <img src="../assets/yanzheng.png" alt />-->
                  <Identify />
                </div>
              </div>
              <div class="link">
                <router-link to="/order">登录</router-link>
              </div>
              <div class="sigup">
                <span>忘记密码？</span>
                <span>注册</span>
              </div>
              <div class="line"></div>
              <img src="../assets/login-link.png" alt class="share" />
            </div>
          </div>
        </div>
      </div>
      <img v-else src="../assets/kong.png" alt class="kong" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Identify from "../components/Identify";
export default {
  name: "scar",
  components: {
    Identify
  },
  computed: {
    ...mapState({
      order: state => state.cart.order,
      showUser: state => state.login.showUser
    }),
    ...mapGetters(["totalMoney", "totalqty"]),
    changeCheck() {
      return this.$store.getters.changeCheck;
    }
  },
  methods: {
    ...mapMutations([
      "addQuantity",
      "subQuantity",
      "checked",
      "deleteWindow",
      "delcart",
      "showLogin",
      "delAllCart"
    ]),
    changeChecked() {
      this.$store.commit("changeChecked");
    }
  }
};
</script>

<style>
.shopcart {
  background-image: url("../assets/mainbgc.png");
  background-repeat: repeat;
}
.shopcart .inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 80px;
}
.shopcart .top {
  display: flex;
  justify-content: space-between;
  background-image: url("../assets/scar-top.png");
  padding: 24px 0 0 50px;
  background-size: 100%;
  height: 170px;
}
.shopcart .top > div {
  border-left: 5px solid #000;
  height: 46px;
  padding: 8px;
  padding-left: 15px;
  color: #2b2e33;
  font-size: 24px;
}
.shopcart .top > div > span {
  color: #f30100;
}
.shopcart .top > ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  margin-right: 52px;
}
.shopcart .top > ul > li {
  padding-bottom: 5px;
  border-bottom: 2px solid #000;
  margin-left: 6px;
  cursor: pointer;
}
.shopcart .top > ul > li:first-child {
  border-bottom: 5px solid #000;
  font-weight: bold;
  padding-bottom: 2px;
}
.shopcart .top > ul > li > span {
  font-size: 18px;
  color: #000;
}
.shopcart .inner .goods-bar {
  display: flex;
  justify-content: space-between;
  padding: 24px 0 0 50px;
}
/* 多选框 */
.shopcart .inner .allchecked {
  display: flex;
  justify-content: flex-start;
}
.shopcart .inner .tool {
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
}
.shopcart .inner .tool span:nth-child(2) {
  margin-left: 90px;
}
.shopcart .inner .tool span:nth-child(3) {
  margin-left: 100px;
}
.shopcart .inner .allchecked .text {
  display: block;
  width: 20px;
  height: 20px;
  line-height: 22px;
  border: 2px solid #babec9;
  text-align: center;
  line-height: 20px;
  user-select: none;
}
.shopcart .inner .allchecked > label:nth-child(2) {
  margin: 0px 30px 0 10px;
}
.shopcart .inner .allchecked .text > span {
  display: block;
  width: 22px;
  height: 22px;
  font-size: 12px;
  color: #000;
  background-color: #fcda00;
  margin-top: -2px;
  margin-left: -2px;
  border: none;
}
.shopcart .inner .show-goods {
  padding: 24px 0 0 50px;
  margin: 0 auto;
  margin-top: 10px;
  width: 1100px;
  padding: 20px 0;
  border-top: 2px solid #2b2e33;
  border-bottom: 2px solid #2b2e33;
}
.shopcart .inner .show-goods > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #d1d7e3;
}
.shopcart .inner .show-goods > li .goods-detail {
  display: flex;
  justify-content: flex-start;
}
.shopcart .inner .show-goods > li .goods-detail > div:last-child p {
  font-weight: bold;
  width: 240px;
  margin: 8px 0 10px 0;
  color: #474b4e;
  font-size: 14px;
}
.shopcart .inner .show-goods > li .goods-detail img {
  display: block;
  width: 96px;
  height: 96px;
  margin-right: 10px;
  margin-left: 48px;
}
.shopcart .inner .show-goods > li .goods-detail > div:last-child span {
  font-size: 12px;
  color: #7b7c81;
  display: block;
  line-height: 18px;
}
/* 单选框 */
.shopcart .inner .show-goods > li .goods-detail .siglechecked {
  display: flex;
  justify-content: space-between;
}
.shopcart .inner .show-goods > li .goods-detail .siglechecked .text {
  border: 1px solid #b8bfc9;
  width: 22px;
  height: 22px;
  line-height: 22px;
}
.shopcart .inner .show-goods > li .goods-detail .siglechecked .text > span {
  display: block;
  width: 22px;
  height: 22px;
  font-size: 12px;
  color: #000;
  background-color: #fcda00;
  margin-top: -1px;
  margin-left: -1px;
  border: none;
  text-align: center;
}
.shopcart .inner .show-goods > li .number {
  width: 498px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  position: relative;
}
.shopcart .inner .show-goods > li .number .del-show {
  position: absolute;
  top: 92%;
  right: -5%;
}
.shopcart .inner .show-goods > li .number .del-show > img {
  display: block;
  width: 200px;
  height: 9px;
}
.shopcart .inner .show-goods > li .number .del-show > div > .del {
  display: inline-block;
  width: 74px;
  height: 32px;
  line-height: 32px;
  background-color: #f50000;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-size: 12px;
}
.shopcart .inner .show-goods > li .number .del-show > div > .undel {
  display: inline-block;
  width: 126px;
  height: 32px;
  line-height: 32px;
  background-color: #2b2e33;
  color: #fff;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.shopcart .inner .show-goods > li .number > span:nth-child(3),
.shopcart .inner .show-goods > li .number > span:nth-child(5) {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-right: 20px;
}
.shopcart .inner .show-goods > li .number > span:nth-child(2),
.shopcart .inner .show-goods > li .number > span:nth-child(4) {
  user-select: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border: 1px solid #55585d;
}
.shopcart .inner .show-goods > li .number > span:nth-child(6) {
  cursor: pointer;
}
.shopcart .inner .goods-submit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1110px;
  margin: 0 auto;
  margin-top: 50px;
}
.shopcart .inner .goods-submit .left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  padding: 19px 0 19px 20px;
  text-align: center;
  background-color: #2b2e33;
  color: #fff;
  font-size: 14px;
}
.shopcart .inner .goods-submit .left .allchecked {
  width: 90px;
}
.shopcart .inner .goods-submit .left .allchecked > label:nth-child(2) {
  margin-left: 10px;
}
.shopcart .inner .goods-submit .left .totalprice {
  margin-left: 168px;
}
.shopcart .inner .goods-submit .submit {
  text-align: center;
  background-color: #fdd900;
  width: 220px;
  padding: 30px 0 30px 20px;
  cursor: pointer;
}
.shopcart .inner .goods-submit .left .totalnum p > span {
  color: #fcd901;
}
.shopcart .inner .goods-submit .left .totalnum > p {
  text-align: center;
  width: 200px;
}
.shopcart .inner .goods-submit .left .delect {
  width: 56px;
}
.shopcart .inner .goods-submit .left .delect > img,
.shopcart .inner .goods-submit .left .wish > img {
  margin-right: 10px;
  cursor: pointer;
}
.shopcart .inner .goods-submit .left .delect > span {
  cursor: pointer;
}
.shopcart .inner .goods-submit .left .wish {
  width: 150px;
  border-right: 2px solid #707378;
  padding-right: 20px;
}
.shopcart .inner .goods-submit .left .totalprice {
  display: flex;
  justify-content: flex-start;
}
.shopcart .inner .goods-submit .left .totalprice > div {
  text-align: left;
}
.shopcart .inner .goods-submit .left .totalprice > span:last-child {
  display: block;
  color: #fcd901;
  font-size: 24px;
  text-align: center;
  margin-right: 20px;
  width: 128px;
}
.shopcart .inner .goods-submit .left .totalprice > div > span:last-child {
  display: block;
  width: 75px;
}
.shopcart .inner .goods-submit .login {
  position: fixed;
  top: 20%;
  left: 40%;
  width: 422px;
  padding-bottom: 14px;
  border: 1px solid #ccc;
  z-index: 1000;
  background-color: #fff;
  padding: 46px 20px 16px 20px;
}
.shopcart .inner .goods-submit .login .close {
  position: absolute;
  right: 20px;
  top: 10px;
  color: #010101;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}
.shopcart .inner .goods-submit .login .userlogo {
  width: 218px;
  height: 72px;
  display: block;
  margin: 0 auto;
  margin-bottom: 50px;
}
.shopcart .inner .goods-submit .login .input > div {
  display: flex;
  justify-content: flex-start;
}
.shopcart .inner .goods-submit .login .input > div:first-child > label {
  display: block;
  width: 44px;
  height: 44px;
  line-height: 44px;
  border: 1px solid #babec9;
  border-right: none;
  background-image: url("../assets/nima.png");
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 20px;
}
.shopcart .inner .goods-submit .login .input > div:nth-child(2) > label {
  line-height: 44px;
  display: block;
  width: 44px;
  height: 44px;
  border: 1px solid #babec9;
  border-right: none;
  background-image: url("../assets/mima.png");
  background-position: center center;
  margin-bottom: 20px;
  background-repeat: no-repeat;
}
.shopcart .inner .goods-submit .login .input > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
}
.shopcart .inner .goods-submit .login .input > div:nth-child(3) > input {
  width: 230px;
  height: 44px;
}
.shopcart .inner .goods-submit .login .input > div:nth-child(3) > img {
  display: block;
  width: 138px;
  height: 44px;
}
.shopcart .inner .goods-submit .login .input > div > input {
  width: 335px;
  height: 44px;
  line-height: 44px;
  outline: none;
}
.shopcart .inner .goods-submit .login .link {
  width: 379px;
  height: 48px;
  line-height: 48px;
  margin-top: 54px;
  background-color: #fff500;
}
.shopcart .inner .goods-submit .login .link > a {
  display: block;
  font-size: 24px;
  color: #000;
  text-align: center;
}
.shopcart .inner .goods-submit .login .sigup {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.shopcart .inner .goods-submit .login .line {
  margin-top: 20px;
  width: 420px;
  height: 3px;
  position: absolute;
  left: 0;
  background-color: #969696;
}
.shopcart .inner .goods-submit .login .share {
  display: block;
  margin: 0 auto;
  margin-top: 56px;
}
.shopcart .inner .mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.3);
}
.kong {
  display: block;
  width: 1200px;
  height: 800px;
  margin: 0 auto;
}
</style>

