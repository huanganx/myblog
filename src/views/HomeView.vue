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
  .btn {
    margin: 20px 0;
    cursor: pointer;
  }
}
</style>
