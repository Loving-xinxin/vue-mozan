<template>
  <div class="successpay">
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
      <div class="content">
        <img src="../assets/successpay.png" alt />
        <div>
          <div>支付成功</div>
          <div class="danhao">
            <div>
              <span>订单号：123456789123456</span>
              <span>成功支付：￥168.00</span>
            </div>
            <div>
              <router-link to="/">
                <span>继续逛逛</span>
              </router-link>
              <span>查看订单</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "pay",
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
.successpay {
  background-image: url("../assets/mainbgc.png");
  background-repeat: repeat;
}
.successpay .inner {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding-bottom: 320px;
}
.successpay .inner .top {
  display: flex;
  justify-content: space-between;
  background-image: url("../assets/scar-top.png");
  padding: 24px 0 0 50px;
  background-size: 100%;
  height: 170px;
}
.successpay .top > div {
  border-left: 5px solid #000;
  height: 46px;
  padding: 8px;
  padding-left: 15px;
  color: #2b2e33;
  font-size: 24px;
}
.successpay .top > ul {
  display: flex;
  justify-content: space-between;
  height: 46px;
  align-items: center;
  margin-right: 52px;
}
.successpay .top > ul > li {
  padding-bottom: 5px;
  border-bottom: 2px solid #000;
  margin-left: 6px;
  cursor: pointer;
}
.successpay .top > ul > li > span {
  color: #000;
  font-size: 20px;
}
.successpay .top > ul > li:nth-child(3) {
  border-bottom: 5px solid #000;
  font-weight: bold;
  padding-bottom: 2px;
}
.successpay .content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 44px 50px 166px 44px;
}
.successpay .content > div > div:first-child {
  width: 795px;
  display: block;
  font-size: 26px;
  font-weight: bold;
  padding-bottom: 24px;
  border-bottom: 2px solid #000;
}
.successpay .content > div .danhao {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
.successpay .content > div .danhao > div:first-child > span {
  display: block;
  line-height: 20px;
  font-size: 16px;
  color: #000;
  font-weight: bold;
}
.successpay .content > div .danhao > div:last-child {
  display: flex;
  justify-content: space-between;
}
.successpay .content > div .danhao > div:last-child > span,
.successpay .content > div .danhao > div:last-child > a > span {
  width: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  display: block;
  background-color: #fdd900;
  margin-left: 10px;
  cursor: pointer;
  color: #000;
}
</style>