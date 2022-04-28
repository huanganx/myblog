<template>
  <el-container :class="$style.container">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Hello World</el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" module>
.container {
  height: 100%;
  width: 100%;
  :global {
    .el-aside {
      background-color: #001529;
      box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    }
    .el-header {
      height: 48px;
      line-height: 48px;
      background: #fff;
      box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    }
    .el-main {
      background-color: #eff2f5;
    }
  }
}
</style>
