<template>
  <div class="pay">
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
      <div class="scan">
        <span>微信支付</span>
        <div class="weixin">
          <div>
            距离二维码过期还剩
            <Daojishi :currentTime="100000" :startTime="10000" :endTime="10000000" class="daoji"></Daojishi>秒过期之后请刷新页面重新获取二维码
          </div>
          <img src="../assets/qr.png" alt />
          <router-link to="/paydone">
            <div class="sao">请使用微信扫一扫扫描二维码支付！</div>
          </router-link>
        </div>
        <img src="../assets/qrweixin.png" alt class="phone" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Daojishi from "./Daojishi";
export default {
  name: "pay",
  components: {
    Daojishi
  },
  data() {
    return {
      currentTime: 0,
      startTime: 9,
      endTime: 0
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
    ])
  }
};
</script>

<style>
.pay {
  background-image: url("../assets/mainbgc.png");
  background-repeat: repeat;
}
.pay .inner {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 400px;
}
.pay .inner .top {
  display: flex;
  justify-content: space-between;
  background-image: url("../assets/scar-top.png");
  padding: 24px 0 0 50px;
  background-size: 100%;
  height: 170px;
}
.pay .top > div {
  border-left: 5px solid #000;
  height: 46px;
  padding: 8px;
  padding-left: 15px;
  color: #2b2e33;
  font-size: 24px;
}
.pay .top > ul {
  display: flex;
  justify-content: space-between;
  height: 46px;
  align-items: center;
  margin-right: 52px;
}
.pay .top > ul > li {
  padding-bottom: 5px;
  border-bottom: 2px solid #000;
  margin-left: 6px;
  cursor: pointer;
}
.pay .top > ul > li > a {
  color: #000;
  font-size: 20px;
}
.pay .top > ul > li.active {
  border-bottom: 5px solid #000;
  font-weight: bold;
}
.pay .time {
  width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #2b2e33;
}
.pay .time > div:first-child > span:first-child {
  display: block;
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.pay .time > div:first-child > span:nth-child(2) {
  font-size: 14px;
  color: #2b2e33;
}
.pay .time > div:first-child > span:nth-child(2) > span {
  font-size: 14px;
  color: #f9abab;
}
.pay .time > div:last-child > span:last-child {
  font-size: 20px;
  color: #f10102;
}
.pay .address {
  width: 1110px;
  margin: 0 auto;
  padding: 24px 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #babeca;
}
.pay .address > span:first-child {
  font-size: 16px;
  color: #2b2e33;
  font-weight: bold;
}
.pay .address > div > div:first-child {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.pay .scan {
  width: 890px;
  padding: 24px 0 22px 50px;
  display: flex;
  justify-content: space-between;
}
.pay .scan > span:first-child {
  font-size: 24px;
  color: #000;
}
.pay .scan > .weixin {
  width: 235px;
  text-align: center;
}
.pay .scan > .weixin > div:first-child {
  width: 210px;
  font-size: 12px;
  margin: 0 auto;
}
.pay .scan > .weixin > div:first-child > .daoji {
  display: inline-block;
  color: #ee0000;
  margin-right: 4px;
}
.pay .scan > .weixin > img {
  margin: 20px 0;
}
.pay .scan > .weixin .sao {
  color: #000;
  padding: 15px 50px;
  text-align: center;
  background-color: #fdd900;
}
.pay .scan .phone {
  width: 310px;
  height: 420px;
  font-size: 14px;
  color: #000;
}
</style>
