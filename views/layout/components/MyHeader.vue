<template>
  <div class="my-header">
    <div class="b-navbar">
      <div class="b-place"></div>
      <div class="b-bottom">
        <img class="img-go-back" src="/assets/images/title/left_arrow.png" alt="返回" @click="goBack">
        <div class="t-title">{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'MyHeader',
  props: {
    // 标题
    title: {
      type: String,
      default: '.'
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
}
</script>

<style scoped>
  .my-header {
    height: 75px;
  }
  .my-header .b-place {
    height: 25px;
  }
  .my-header .b-bottom {
    position: relative;
    height: 50px;
  }
  .my-header .b-bottom .img-go-back {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 15px;
  }
  .my-header .b-bottom .t-title {
    line-height: 50px;
    text-align: center;
    color: #233459;
    font-size: 20px;
    font-weight: bold;
  }
</style>
