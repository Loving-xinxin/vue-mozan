<template>
  <div class="paydone">
    <div class="inner">
      <div class="top">
        <div>已加入购物车！</div>
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
      <div class="time">
        <div>
          <span>订单提交成功，请您尽快付款！</span>
          <span>
            请您在提交订单后
            <span>24小时</span>内完成支付，否则订单会自动取消。
          </span>
        </div>
        <div>
          <span>应付金额：</span>
          <span>￥168.00</span>
        </div>
      </div>
      <div class="address">
        <span>订单号：123456789123456</span>
        <div>
          <div>
            <span>
              <img src alt />
              阿木来提.阿不都热西提
            </span>
            <span>
              <img src alt />
              18645629876
            </span>
          </div>
          <div>
            <img src alt />
            新疆维吾尔自治区博尔塔拉蒙古自治州塔格特90团乎热郭姆村9连5区13号
          </div>
        </div>
      </div>
      <div class="paydonestyle">
        <span>选择付款方式</span>
        <img
          src="../assets/zhifubao.png"
          alt
          @click="payCheckedone()"
          :class="checkedone?'active':''"
        />
        <img
          src="../assets/paystyle-weixin.png"
          alt
          @click="payCheckedtwo()"
          :class="checkedtwo?'active':''"
        />
        <img
          src="../assets/caifutong.png"
          alt
          @click="payCheckedthree()"
          :class="checkedthree?'active':''"
        />
        <img
          src="../assets/wangling.png"
          alt
          @click="payCheckedfour()"
          :class="checkedfour?'active':''"
        />
      </div>
      <div class="zhifu" @click="showBank()">提交订单</div>
      <div class="bank" v-if="show">
        <div class="banktop">
          <span>收银台</span>
          <span @click="showBank()">x</span>
        </div>
        <div class="middle">
          <p>
            请您在新打开的网上银行页面进行支付
            <br />支付完成前请不要关闭该窗口
          </p>
          <div>
            <router-link to="/successpay">
              <span>已完成支付</span>
            </router-link>
            <span>支付遇到问题</span>
          </div>
        </div>
        <p class="other">选择其他支付方式</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "pay",
  data() {
    return {
      show: true
    };
  },
  computed: {
    ...mapState({
      address: state => state.address.address,
      checkedone: state => state.address.checkedone,
      checkedtwo: state => state.address.checkedtwo,
      checkedthree: state => state.address.checkedthree,
      checkedfour: state => state.address.checkedfour
    })
  },
  methods: {
    ...mapMutations([
      "payCheckedone",
      "payCheckedtwo",
      "payCheckedthree",
      "payCheckedfour"
    ]),
    showBank() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.paydone {
  background-image: url("../assets/mainbgc.png");
  background-repeat: repeat;
}
.paydone .inner {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 320px;
}
.paydone .inner .top {
  display: flex;
  justify-content: space-between;
  background-image: url("../assets/scar-top.png");
  padding: 24px 0 0 50px;
  background-size: 100%;
  height: 170px;
}
.paydone .top > div {
  border-left: 5px solid #000;
  height: 46px;
  padding: 8px;
  padding-left: 15px;
  color: #2b2e33;
  font-size: 24px;
}
.paydone .top > ul {
  display: flex;
  justify-content: space-between;
  height: 46px;
  align-items: center;
  margin-right: 52px;
}
.paydone .top > ul > li {
  padding-bottom: 5px;
  border-bottom: 2px solid #000;
  margin-left: 6px;
  cursor: pointer;
}
.paydone .top > ul > li > span {
  color: #000;
  font-size: 20px;
}
.paydone .top > ul > li:nth-child(3)>span{
  border-bottom: 5px solid #000;
  font-weight: bold;
}
.paydone .time {
  width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #2b2e33;
}
.paydone .time > div:first-child > span:first-child {
  display: block;
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.paydone .time > div:first-child > span:nth-child(2) {
  font-size: 14px;
  color: #2b2e33;
}
.paydone .time > div:first-child > span:nth-child(2) > span {
  font-size: 14px;
  color: #f9abab;
}
.paydone .time > div:last-child > span:last-child {
  font-size: 20px;
  color: #f10102;
}
.paydone .address {
  width: 1110px;
  margin: 0 auto;
  padding: 24px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #babeca;
}
.paydone .address > span:first-child {
  font-size: 16px;
  color: #2b2e33;
  font-weight: bold;
}
.paydone .address > div > div:first-child {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.paydone .paydonestyle {
  width: 1110px;
  margin: 0 auto;
  padding: 24px 0 22px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #2b2e33;
}
.paydone .paydonestyle > span:first-child {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-right: 16px;
}
.paydone .paydonestyle > img {
  display: block;
  width: 130px;
  height: 40px;
  border: 1px solid #babec9;
  margin-left: 20px;
}
.paydone .paydonestyle > img.active {
  border: 1px solid #fdd900;
}
.paydone .zhifu {
  user-select: none;
  display: block;
  width: 220px;
  height: 60px;
  line-height: 60px;
  background-color: #fdd900;
  position: absolute;
  right: 45px;
  margin-top: 30px;
  font-size: 26px;
  color: #000;
  text-align: center;
  cursor: pointer;
}
.paydone .bank {
  padding: 22px;
  position: fixed;
  top: 30%;
  left: 25%;
  z-index: 1000;
  width: 694px;
  background-color: #fff;
  border: 1px solid #ccc;
}
.paydone .bank .banktop {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.paydone .bank .banktop > span {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}
.paydone .bank .banktop > span:last-child {
  cursor: pointer;
}
.paydone .middle {
  padding: 70px 0 74px 0;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.paydone .middle > div {
  width: 452px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.paydone .middle > div > span,
.paydone .middle > div > a > span {
  display: block;
  width: 210px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  background-color: #2b2e33;
  text-align: center;
  cursor: pointer;
}
.paydone .middle > p {
  font-size: 14px;
  color: #000;
  width: 275px;
  margin: 0 auto;
  padding-bottom: 48px;
  text-align: center;
}
.paydone .other {
  display: block;
  padding: 30px 0;
  color: #019eeb;
  text-align: center;
  cursor: pointer;
}
</style>
