<template>
  <div :class="$style.container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppView',
  mounted () {
    if (!localStorage.getItem('useTime')) {
      localStorage.setItem('useTime', JSON.stringify(Date.now()))
      this.$router.replace('/welcome')
    }
  }
})
</script>

<style lang="scss" module>
.container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #000000ef;
  background-image: linear-gradient(90deg,rgba(255,255,255,.05) 3%,transparent 0),linear-gradient(1turn,rgba(255,255,255,.05) 3%,transparent 0);
  background-position: 50%;
  background-size: 20px 20px;
}
</style>
