<template>
  <div class="img">
    <div class="top">
      <div>
        <img src="../assets/img_01.png" alt />
        <img src="../assets/img_02.png" alt />
      </div>
      <div>
        <img src="../assets/img_03.png" alt />
        <img src="../assets/img_04.png" alt />
      </div>
      <div>
        <img src="../assets/img_05.png" alt />
        <img src="../assets/img_06.png" alt />
      </div>
    </div>
    <div class="bottom">
      <img src="../assets/imgg_01.png" alt />
      <img src="../assets/imgg_02.png" alt />
      <img src="../assets/imgg_03.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "pic"
};
</script>

<style>
.img > .top > div {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.img > .bottom > img {
  display: block;
  width: 1200px;
  margin: 0 auto;
}
</style>
