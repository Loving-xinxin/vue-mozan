<template>
  <div class="order">
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
      <div class="address">
        <ul class="up">
          <li>收货地址</li>
          <li>
            <img src="../assets/order-edit.png" alt @click="showdizhi()" />
            <span @click="showdizhi()">新增地址</span>
            <div :class="showAddress?'mask':''">
              <div class="newaddress" v-if="showAddress">
                <div class="up">
                  <span>新增地址</span>
                  <span @click="showdizhi()">x</span>
                </div>
                <div class="user">
                  <div class="left">
                    <span>
                      <span>*</span>
                      收货人
                    </span>
                    <span>请填写收货人！</span>
                    <input type="text" />
                  </div>
                  <div class="right">
                    <span>
                      <span>*</span>
                      联系电话
                    </span>
                    <span>填写的手机号格式错误！</span>
                    <input type="text" />
                  </div>
                </div>
                <div class="location">
                  <div class="tou">
                    <span>
                      <span>*</span>
                      所在地区
                    </span>
                    <div>请填写完整的所在地区！</div>
                  </div>
                  <div>
                    <div class="capital">
                      <div class="block">
                        <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
                      </div>
                    </div>
                    <div class="city">
                      <div class="block">
                        <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
                      </div>
                    </div>
                    <div class="country">
                      <div class="block">
                        <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="detail">
                  <div>
                    <span>
                      <span>*</span>详细信息
                    </span>
                    <span>请填写详细信息！</span>
                  </div>
                  <input type="text" />
                </div>
                <div class="other">
                  <div>
                    <span>地址别名</span>
                    <input type="text" />
                  </div>
                  <div>
                    <span>常用别名</span>
                    <div>
                      <span>家</span>
                      <span>公司</span>
                      <span>父母家</span>
                    </div>
                  </div>
                </div>
                <div class="default">
                  <div>
                    <span @click="showGou()">
                      <span v-if="gou">√</span>
                    </span>
                    <span>设为默认地址</span>
                  </div>
                  <div @click="showdizhi()">保存地址</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul class="list" v-if="address">
          <li
            v-for="addres in address"
            :key="addres.id"
            :class="addres.checkedLi?'active':''"
            @click="checkedshouhuo(addres.id)"
          >
            <div class="left">
              <div class="user">
                <span class="iconfont icon-caidan07"></span>
                <span>{{addres.name}}</span>
              </div>
              <div class="local">
                <span class="iconfont icon-location"></span>
                <span>{{addres.local}}</span>
              </div>
              <div class="phone">
                <span class="iconfont icon-phone"></span>
                <span>{{addres.phone}}</span>
              </div>
            </div>
            <div class="right">
              <span
                @click="changefont(addres.id)"
                :class="addres.changeDefault?'active':''"
              >{{addres.changeDefault?'默认':'设为默认'}}</span>
              <div class="edit">
                <span class="iconfont icon-edit"></span>
                <span>编辑</span>
              </div>
              <div class="delete">
                <span class="iconfont icon-delete"></span>
                <span @click="delwin(addres.id)">删除</span>
                <div v-if="addres.showdel" class="del-show">
                  <img src="../assets/sanjiao.png" alt />
                  <div>
                    <span class="del" @click="delAddress(addres.id)">确定删除</span>
                    <span class="undel" @click="delwin(addres.id)">不删除</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="goodsInfo">
        <ul class="info-top">
          <li>商品信息</li>
          <li>
            <router-link to="/shopcart">返回购物车修改</router-link>
          </li>
        </ul>
        <ul class="goods">
          <li v-for="cart in checkedGoods" :key="cart.id">
            <div class="left">
              <img :src="cart.img" alt />
              <span>{{cart.name}}</span>
            </div>
            <div class="right">
              <div>
                <span>款式：{{cart.style}}</span>
                <span>尺码:{{cart.size}}</span>
              </div>
              <div>
                <span>￥{{cart.price}}</span>
                <span>x{{cart.qty}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="paystyle">
        <div>
          <span>支付方式</span>
          <span @click="selectPay()" :class="selectP?'active':''">
            在线支付
            <img src="../assets/gou .png" alt v-if="selectP" />
          </span>
        </div>
        <div>
          <span>物流方式</span>
          <span @click="selectStyle()" :class="selectS?'active':''">
            普通快递
            <img src="../assets/gou .png" alt v-if="selectS" />
          </span>
        </div>
        <div>
          <span>发票信息</span>
          <span @click="selectUbill()" :class="selectUb?'active':''">
            不开发票
            <img src="../assets/gou .png" alt v-if="selectUb" />
          </span>
          <span @click="selectBill()" :class="selectB?'active':''">
            开发票
            <img src="../assets/gou .png" alt v-if="selectB" />
          </span>
          <input type="text" placeholder="请输入个人/单位名称" />
          <span>保存</span>
        </div>
      </div>
      <img src="../assets/order-youhui.png" alt class="vip" />
      <div class="remark">
        <span>备注</span>
        <textarea cols="30" rows="10"></textarea>
        <div class="title">
          <span>数量</span>
          <span>单价</span>
          <span>小计</span>
          <span>优惠</span>
          <span>运费</span>
          <span>实际应付</span>
        </div>
        <div class="number">
          <span>{{goodsMoney.num}}</span>
          <span>x</span>
          <span>{{goodsMoney.price}}</span>
          <span>=</span>
          <span>{{goodsMoney.money}}</span>
          <span>-</span>
          <span>{{goodsMoney.youhui}}</span>
          <span>+</span>
          <span>{{goodsMoney.yunfei}}</span>
          <span>=</span>
          <span>{{goodsMoney.momeytotal}}</span>
        </div>
        <router-link to="/pay">提交订单</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "order",
  computed: {
    ...mapState({
      address: state => state.address.address,
      order: state => state.cart.order,
      selectS: state => state.address.selectS,
      selectP: state => state.address.selectP,
      selectB: state => state.address.selectB,
      selectUb: state => state.address.selectUb,
      gou: state => state.address.gou,
      value: state => state.address.value,
      options: state => state.address.options,
      showAddress: state => state.address.showAddress
    }),
    ...mapGetters(["checkedGoods", "goodsMoney"])
  },
  methods: {
    ...mapMutations([
      "selectStyle",
      "selectBill",
      "selectPay",
      "selectUbill",
      "delwin",
      "delAddress",
      "handleChange",
      "showdizhi",
      "checkedshouhuo",
      "changefont",
      "showGou"
    ])
  }
};
</script>

<style>
.order {
  background-image: url("../assets/mainbgc.png");
  background-repeat: repeat;
}
.order .inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.order .inner .top {
  display: flex;
  justify-content: space-between;
  background-image: url("../assets/scar-top.png");
  padding: 24px 0 0 50px;
  background-size: 100%;
  height: 170px;
}
.order .top > div {
  border-left: 5px solid #000;
  height: 46px;
  padding: 8px;
  padding-left: 15px;
  color: #2b2e33;
  font-size: 24px;
}
.order .top > ul {
  display: flex;
  justify-content: space-between;
  height: 46px;
  align-items: center;
  margin-right: 52px;
}
.order .top > ul > li {
  padding-bottom: 5px;
  border-bottom: 2px solid #000;
  margin-left: 6px;
  cursor: pointer;
}
.order .top > ul > li > span {
  color: #000;
  font-size: 20px;
}
.order .top > ul > li:nth-child(2) > span {
  border-bottom: 5px solid #000;
  font-weight: bold;
  padding-bottom: 2px;
}
.order .address {
  padding: 0px 50px;
}
.order .address .up {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 2px solid #2b2e33;
}
.order .address .up > li {
  font-size: 18px;
  color: #2b2e33;
}
.order .address .up > li:last-child {
  cursor: pointer;
}
.order .address .list > li {
  position: relative;
  width: 1110px;
  height: 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 20px 20px 24px;
  border-bottom: 1px solid #d1d7e3;
  cursor: pointer;
  user-select: none;
}
.order .address .list > li.active {
  margin-top: -2px;
  border: 3px solid #fcda00;
  background-image: url("../assets/gou .png");
  background-repeat: no-repeat;
  background-position: 0 109px;
}
.order .address .list > li > .left {
  width: 700px;
  height: 70px;
}
.order .address .list > li > .right {
  width: 286px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order .address .list > li > .left > .user > span,
.order .address .list > li > .left > .local > span,
.order .address .list > li > .left > .phone > span {
  font-size: 16px;
  color: #000;
  margin-left: 6px;
}
.order .address .list > li > .left > .user,
.order .address .list > li > .left > .local,
.order .address .list > li > .left > .phone {
  width: 700px;
  height: 22px;
  margin-bottom: 6px;
}
.order .address .list > li > .left > .user > img,
.order .address .list > li > .left > .local > img,
.order .address .list > li > .left > .phone > img {
  display: inline-block;
  width: 14px;
  height: 18px;
  line-height: 18px;
  margin-right: 6px;
}
.order .address .list > li > .right > .edit,
.order .address .list > li > .right > .delete {
  width: 62px;
  height: 38px;
}
.order .address .list > li > .right > .edit > span,
.order .address .list > li > .right > .delete > span,
.order .address .list > li > .right > span {
  font-size: 16px;
  color: #000;
  cursor: pointer;
  margin-left: 6px;
  text-align: center;
  width: 96px;
  height: 36px;
  line-height: 36px;
}
.order .inner .address .list > li > .right > span.active {
  background-color: #2b2e33;
  color: #fff;
  font-size: 14px;
  line-height: 36px;
  width: 96px;
  height: 36px;
}
.order .goodsInfo {
  padding: 0px 50px;
}
.order .goodsInfo .info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  margin-top: 64px;
  border-bottom: 1px solid #000;
}
.order .goodsInfo .info-top > li:first-child {
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.order .goodsInfo .info-top > li:nth-child(2) > a {
  color: #000;
}
.order .goodsInfo .goods {
  border-bottom: 1px solid #000;
}
.order .goodsInfo .goods > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 24px;
  border-bottom: 1px solid #d1d7e3;
}
.order .goodsInfo .goods > li > .left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.order .goodsInfo .goods > li > .left > img {
  display: inline-block;
  width: 66px;
  height: 66px;
  margin-right: 10px;
}
.order .goodsInfo .goods > li > .right {
  width: 436px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order .goodsInfo .goods > li > .right > div:first-child {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #000;
}
.order .goodsInfo .goods > li > .right > div:last-child {
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order .paystyle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 50px;
}
.order .paystyle > div > span:first-child {
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.order .paystyle > div > span:nth-child(2),
.order .paystyle > div > span:nth-child(3) {
  position: relative;
  display: inline-block;
  border: 3px solid #babec9;
  width: 126px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  margin-left: 10px;
}
.order .paystyle > div > span:nth-child(2).active,
.order .paystyle > div > span:nth-child(3).active {
  border: 3px solid #fdd900;
}
.order .paystyle > div > span:nth-child(2) > img,
.order .paystyle > div > span:nth-child(3) > img {
  position: absolute;
  left: 0;
  bottom: 0;
}
.order .paystyle > div:last-child input {
  width: 174px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #babec9;
  outline: none;
}
.order .paystyle > div:last-child > span:last-child {
  width: 56px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: block;
  background-color: #fdd900;
  color: #000;
  font-size: 14px;
  cursor: pointer;
}
.order .paystyle > div:nth-child(2) {
  margin-right: 60px;
  margin-left: 20px;
}
.order .paystyle > div:nth-child(3) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  cursor: pointer;
}
.order .vip {
  padding: 0 50px;
}
.order .remark {
  padding: 0 50px;
  position: relative;
}
.order .remark > span:first-child {
  display: block;
}
.order .remark > textarea {
  border: 1px solid #babec9;
  width: 1110px;
  height: 110px;
  margin: 0 auto;
  resize: none;
}
.order .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 10px 0;
  border-bottom: 2px solid #2d2d35;
}
.order .number {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 200px 0;
}
.order .number > span:nth-child(1) {
  margin-left: 10px;
}
.order .number > span:nth-child(2) {
  margin-left: 15px;
}
.order .remark > a:last-child {
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 100px;
  text-align: center;
  display: block;
  width: 222px;
  height: 60px;
  line-height: 60px;
  background-color: #fdd900;
  font-size: 24px;
  color: #000;
  margin-right: 50px;
}
.order .address .list > li > .right .del-show {
  position: absolute;
  right: 0;
}
.order .address .list > li > .right .del-show > img {
  display: block;
  width: 200px;
  height: 9px;
}
.order .address .list > li > .right .del-show > div > .del {
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
.order .address .list > li > .right .del-show > div > .undel {
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
.newaddress {
  z-index: 1000000;
  width: 694px;
  margin: 0 auto;
  position: fixed;
  top: 25%;
  left: 30%;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 20px;
}
.newaddress .up {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2px;
  border-bottom: 2px solid #000;
}
.newaddress .up > span {
  font-size: 18px;
  color: #000;
  font-weight: bold;
}
.newaddress .user {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.newaddress .user > .left > span > span {
  color: red;
}
.newaddress .user > .left > span:nth-child(2) {
  color: red;
  margin-left: 12px;
}
.newaddress .user > .left > input:nth-child(3) {
  width: 208px;
  height: 24px;
  border: 1px solid #babec9;
  outline: none;
}
.newaddress .user > .right > span > span {
  color: red;
}
.newaddress .user > .right > span:nth-child(2) {
  color: red;
  margin-left: 142px;
}
.newaddress .user > .right > input:nth-child(3) {
  width: 430px;
  height: 24px;
  border: 1px solid #babec9;
  outline: none;
}
.location {
  margin-top: 20px;
}
.location .tou {
  display: flex;
  justify-content: space-between;
}
.location .tou > span > span {
  color: #f50000;
}
.location .tou > div:last-child {
  color: #f50000;
}
.location > div {
  display: flex;
  justify-content: space-between;
}
.el-input--suffix .el-input__inner {
  padding-right: 10px;
}
.detail {
  margin-top: 20px;
}
.detail > div {
  display: flex;
  justify-content: space-between;
}
.detail > div > span > span {
  color: #f50000;
}
.detail > div > span:last-child {
  color: #f50000;
}
.detail > input {
  width: 648px;
  height: 24px;
  margin-top: 10px;
  outline: none;
}
.other {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.other > div:first-child > span {
  display: block;
  margin-bottom: 10px;
}
.other > div:first-child > input {
  width: 428px;
  height: 24px;
  display: block;
  outline: none;
}
.other > div:last-child > span:first-child {
  display: block;
  margin-bottom: 10px;
}
.other > div:last-child > div > span {
  display: inline-block;
  width: 66px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border: 1px solid #babec9;
  margin-left: 6px;
}
.default {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.default > div:first-child {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.default > div:last-child {
  width: 210px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  background-color: #fdd900;
  font-size: 20px;
  color: #000;
}
.default > div:first-child > span:first-child {
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #babec9;
  margin-right: 10px;
}
.default > div:first-child > span:first-child > span {
  font-size: 14px;
  display: block;
  text-align: center;
  margin-top: -2px;
}
.order .mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.3);
}
</style>
