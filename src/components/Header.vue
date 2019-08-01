<template>
  <header>
    <div class="header-inner">
      <img src="../assets/leftside.png" alt />
      <router-link to="/">
        <img src="../assets/logo.png" alt />
      </router-link>
      <div class="login">
        <img src="../assets/search.png" alt />
        <img src="../assets/rightside.png" alt />
        <span>登录/注册</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "tou"
};
</script>

<style>
header {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #2b2e33;
}
header .header-inner {
  width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0px;
}
header .header-inner > img:nth-child(1) {
  display: inline-block;
  width: 44px;
  height: 25px;
  cursor: pointer;
}
header .header-inner > a > img {
  display: inline-block;
  width: 109px;
  cursor: pointer;
  height: 60px;
}
header .header-inner > .login {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .header-inner > .login > img:nth-child(1) {
  display: inline-block;
  width: 28px;
  cursor: pointer;
  height: 36px;
}
header .header-inner > .login > img:nth-child(2) {
  display: inline-block;
  width: 28px;
  cursor: pointer;
  height: 36px;
}
header .header-inner > .login > span:nth-child(3) {
  cursor: pointer;
  color: #707378;
}
</style>
