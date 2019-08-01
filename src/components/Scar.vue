<template>
  <div class="scar">
    <div class="inner">
      <div class="top">
        <div>已加入购物车！</div>
      </div>
      <div class="goods">
        <div>
          <img src="../assets/scar.png" alt />
          <p>{{presell.name}}</p>
        </div>
        <div>
          <span>款式：{{presell.style}}</span>
          <span>尺码：{{presell.size}}</span>
          <span>数量：{{presell.qty}}</span>
        </div>
        <div>
          <span @click="$router.back(-1)">返回</span>
          <span>
            <router-link to="/shopcart">去购物车结算</router-link>
          </span>
        </div>
      </div>
      <div class="liked">
        <div class="like-top">
          <span>您可能还需要</span>
          <span></span>
        </div>
        <div class="like-bottom">
          <div class="goods-list">
            <div>
              <img src="../assets/scar-goods.png" alt />
              <p>{{presell.name}}</p>
              <div>
                <span>{{presell.price}}</span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="goods-list">
            <div>
              <img src="../assets/scar-goods.png" alt />
              <p>{{presell.name}}</p>
              <div>
                <span>￥{{presell.price}}</span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="goods-list">
            <div>
              <img src="../assets/scar-goods.png" alt />
              <p>{{presell.name}}</p>
              <div>
                <span>￥{{presell.price}}</span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="goods-list">
            <div>
              <img src="../assets/scar-goods.png" alt />
              <p>{{presell.name}}</p>
              <div>
                <span>￥{{presell.price}}</span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="goods-list">
            <div>
              <img src="../assets/scar-goods.png" alt />
              <p>{{presell.name}}</p>
              <div>
                <span>￥{{presell.price}}</span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "scar",
  computed: {
    ...mapState({
      presell: state => state.ShowGoods.presell
    })
  }
};
</script>

<style>
.scar {
  background-image: url("../assets/mainbgc.png");
  background-repeat: repeat;
}
.scar .inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.scar .top {
  background-image: url("../assets/scar-top.png");
  padding: 24px 0 0 50px;
  background-size: 100%;
  height: 170px;
}
.scar .top > div {
  border-left: 5px solid #000;
  padding: 8px;
  padding-left: 15px;
  color: #2b2e33;
  font-size: 24px;
}
.scar .goods {
  display: flex;
  justify-content: space-around;
  width: 1110px;
  margin: 0 auto;
  padding: 10px 0;
  border-top: 2px solid #babec9;
  border-bottom: 2px solid #babec9;
}
.scar .goods > div:first-child {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-right: 2px solid #fdd900;
  padding-right: 20px;
}
.scar .goods > div:first-child > p {
  width: 200px;
  margin-left: 10px;
}
.scar .goods > div:nth-child(2) {
  margin: 20px 250px 0 0;
}
.scar .goods > div:nth-child(2) > span {
  width: 150px;
  display: block;
  color: #6f7277;
}
.scar .goods > div:nth-child(3) {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.scar .goods > div:nth-child(3) > span {
  display: block;
  padding: 14px 50px;
}
.scar .goods > div:nth-child(3) > span:first-child {
  background-color: #2b2e33;
  margin-right: 14px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
.scar .goods > div:nth-child(3) > span:last-child {
  background-color: #fdd900;
  font-size: 14px;
  cursor: pointer;
  color: #000;
}
.scar .goods > div:nth-child(3) > span:last-child > a {
  color: #000;
}
.scar .liked {
  width: 1110px;
  margin: 0 auto;
  margin-top: 74px;
}
.scar .liked .like-top {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.scar .liked .like-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.scar .liked .like-top > span:first-child {
  width: 100px;
  color: #2a2d32;
  font-size: 14px;
}
.scar .liked .like-top > span:last-child {
  display: block;
  background-color: #fdd901;
  width: 1016px;
  height: 2px;
  line-height: 2px;
  margin-left: 10px;
}
.scar .liked .goods-list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.scar .liked .goods-list > div {
  border: 1px solid #d1d7e3;
  margin: 30px 0 122px 0;
}
.scar .liked .goods-list > div > p {
  width: 140px;
  color: #000;
  font-size: 14px;
  margin: 10px 0px 48px 10px;
}
.scar .liked .goods-list > div > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-bottom: 15px;
}
.scar .liked .goods-list > div > div > span:first-child {
  color: #dd2422;
  font-size: 18px;
  font-weight: bold;
}
.scar .liked .goods-list > div > div > span:last-child {
  width: 64px;
  height: 26px;
  line-height: 26px;
  border: 2px solid #fdd900;
  display: block;
  background-image: url("../assets/delect.png");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}
</style>

     <!-- <ul>
          <li>购物车</li>
          <li>填写订单</li>
          <li>付款，购买成功</li>
        </ul>-->