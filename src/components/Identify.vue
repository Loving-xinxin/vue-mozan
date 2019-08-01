<template>
  <div class="join_formitem">
    <div class="captcha">
      <input type="text" placeholder="请输入验证码" class="yanzhengma_input" v-model="picLyanzhengma" />
      <input type="button" @click="createdCode" class="verification" v-model="checkCode" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      checkCode: "",
      picLyanzhengma: "" //..验证码图片
    };
  },
  created() {
    this.createdCode();
  },
  methods: {
    // 图片验证码
    createdCode() {
      // 先清空验证码输入
      this.code = "";
      this.checkCode = "";
      this.picLyanzhengma = "";
      // 验证码长度
      const codeLength = 4;
      // 随机数
      const random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (let i = 0; i < codeLength; i++) {
        // 取得随机数的索引(0~35)
        let index = Math.floor(Math.random() * 36);
        // 根据索引取得随机数加到code上
        this.code += random[index];
      }
      // 把code值赋给验证码
      this.checkCode = this.code;
    }
  }
};
</script>

<style>
.captcha {
  width: 395px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.yanzhengma_input {
  letter-spacing: 1px;
  font-size: 17px;
  border: 1px solid #babec9;
  color: #000;
  outline: none;
  border-radius: none;
  width: 230px;
  height: 46px;
  line-height: 46px;
}
.verification {
  width: 136px;
  height: 46px;
  line-height: 46px;
  letter-spacing: 5px;
  transform: translate(-15px, 0);
  border-radius: none;
  margin-left: 10px;
  outline: none;
  border: none;
  background-image: url("../assets/yz.png");
}
</style>