<template>
  <footer>
    <div class="inner">
      <div class="form">
        <div class="form-list">
          <h4>帮助信息</h4>
          <div class="list">
            <ul>
              <li>
                <img src="../assets/footicon1.png" alt srcset />
                <span>购物指南</span>
              </li>
              <li>
                <img src="../assets/footicon2.png" alt srcset />
                <span>支付方式</span>
              </li>
              <li>
                <img src="../assets/footicon3.png" alt srcset />
                <span>配送方式</span>
              </li>
              <li>
                <img src="../assets/footicon4.png" alt srcset />
                <span>售后服务</span>
              </li>
            </ul>
            <ul>
              <li>
                <img src="../assets/footicon5.png" alt srcset />
                <span>服务中国</span>
              </li>
              <li>
                <img src="../assets/footicon6.png" alt srcset />
                <span>关于我们</span>
              </li>
              <li>
                <img src="../assets/footicon7.png" alt srcset />
                <span>免费条款</span>
              </li>
              <li>
                <img src="../assets/footicon8.png" alt srcset />
                <span>友情链接</span>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div class="form-list">
          <h4>关注我们</h4>
          <div>
            <img src="../assets/footicon9.png" alt srcset />
            <img src="../assets/footicon10.png" alt srcset />
          </div>
        </div>
        <div class="form-list">
          <h4>客服热线</h4>
          <div>
            <img src="../assets/footicon5.png" alt srcset />
            <p>
              <span>400 113 5353</span>
              <span>[周一至周五 9：00-18：00]</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="inner">
        <img src="../assets/logo.png" alt />
        <p>
          <span>北京开普勒科技有限公司版权所有 Copyright 2015-2025 Morethan.oc All rights reserved</span>
          <span>地址：北京市朝阳区建国路93号院4号楼505</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "foot"
};
</script>

<style>
footer {
  background-color: #000;
}
footer .inner {
  width: 1200px;
  margin: 0 auto;
  padding: 62px 0 50px 0;
}
footer .inner .form {
  display: flex;
  justify-content: space-between;
}
footer .inner .form .form-list .list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
footer .inner .form .form-list h4 {
  color: #fff;
}
footer .inner .form .form-list .list > ul {
  margin: 0;
  padding: 0;
  margin-top: 20px;
}
footer .inner .form .form-list .list > ul > li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
}
footer .inner .form .form-list .list > ul > li > span {
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
}
footer .inner .form .form-list .list > ul:last-child {
  margin-left: 50px;
}
footer .inner .form .form-list .list > ul:first-child > li:first-child span {
  margin-left: 15px;
}
footer .inner .form .form-list:nth-child(2) > div {
  margin-top: 28px;
}
footer .inner .form .form-list:nth-child(2) > div > img {
  margin-left: 20px;
}
footer .inner .form .form-list:nth-child(3) {
  margin-right: 100px;
}
footer .inner .form .form-list:nth-child(3) > div {
  margin-top: 28px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
footer .inner .form .form-list:nth-child(3) > div > p {
  color: #fff;
  margin-left: 10px;
}
footer .inner .form .form-list:nth-child(3) > div > p > span:first-child {
  display: block;
  font-size: 18px;
}
footer .inner .form .form-list:nth-child(3) > div > p > span:last-child {
  display: block;
  font-size: 12px;
}
footer .foot {
  background-color: #2b2e33;
}
footer .foot .inner {
  width: 1200;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
}
footer .foot .inner p > span {
  display: block;
  color: #6f7277;
  text-align: right;
}
</style>
