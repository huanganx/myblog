<template>
  <div :class="$style.container">
    <div class="blog-header">
      <h1>Huang AnXuan Website</h1>
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  :global {
    height: 100%;
    overflow: auto;
    .blog-header {
      width: 100%;
      height: 250px;
      background: url('~@/assets/background-scale.jpeg') no-repeat 50%/100% auto;
      -webkit-animation: scale-bg 10s infinite;
      animation: scale-bg 10s infinite;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.6);
        content: "";
      }
      h1 {
        position: relative;
        z-index: 1;
        font-size: 60px;
        color: #fff;
        font-family: Optima-Regular,Optima,PingFangTC-Light,PingFangSC-light,PingFangTC-light;
      }
    }
  }
}
</style>

<style lang="scss">
@keyframes scale-bg {
  50% {
    background-size: 120% auto;
  }
}
</style>
