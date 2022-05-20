<template>
  <div class="about">
    <h1>This is an home page</h1>
    <div class="btn" @click="$router.go(-1)">返回欢迎页</div>
  </div>
</template>

<style lang="scss">
.about {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  & > * {
    position: relative;
    z-index: 1;
  }
  &::after {
    position: absolute;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    background: url('~@/assets/background-home.jpeg') no-repeat 50%/cover;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    content: "";
  }
  .btn {
    margin: 20px 0;
    cursor: pointer;
  }
}
</style>
