<template>
  <div class="about">
    <img src="../assets/mf2.png" alt="" srcset="">
    <h3>This is an home page</h3>
    <div class="btn" @click="$router.push('/blog')">博客</div>
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
