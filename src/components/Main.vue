<template>
  <div class="main">
    <Banner />
    <AdvanceSale />
    <Img />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import AdvanceSale from "../components/AdvanceSale";
import Img from "../components/Img";
export default {
  name: "contain",
  components: {
    Banner,
    AdvanceSale,
    Img
  }
};
</script>

<style>
.main {
  /* background-image: url("../assets/main-bgc.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: 140%; */
  /* background-size: contain; */
  background: url("../assets/headerbg.png") top no-repeat,
    url("../assets/bg.jpg");

  /* background-position: 50% 0;
  background-size: 140%; */
}
</style>
