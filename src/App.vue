<template>
  <div :class="$style.container">
    <router-view />
  </div>
</template>

<style lang="scss" module>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
