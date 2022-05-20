<template>
  <div :class="$style.container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  mounted () {
    this.$router.replace('/welcome')
  }
})
</script>

<style lang="scss" module>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
