<template>
  <div class="wrap">
    <div class="inner">
      <Header />

      <router-view></router-view>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style>
.wrap {
  margin: 0;
  padding: 0;
}
</style>
