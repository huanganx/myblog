<template>
  <div :class="$style.container">
    <h1 class="welcome">
      <span class="first-line">I Am HuangAnXuan</span>
      <span class="second-line">Welcome To My Website</span>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
})
</script>

<style lang="scss" module>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    position: absolute;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    background: url('~@/assets/background.jpeg') no-repeat 50%/cover;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    content: "";
  }
  & > * {
    position: relative;
    z-index: 1;
  }
}
</style>
<style lang="scss">
@keyframes typing {
  from { width: 0 }
}

@keyframes caret {
  50% { border-right-color: currentColor; }
}

h1.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 70px;
  font-weight: 700;
  font-size: 50px;
  color: #fff;
  .first-line, .second-line {
    font: bold 100% Consolas, Monaco, monospace;
    overflow: hidden;
    border-right: 1px solid transparent;
    font-family: Consolas,Monaco,Monospace;
    white-space: nowrap;
    text-shadow: 3px 3px 5px rgb(0 0 0 / 50%);
  }
  .first-line {
    width: 16ch;
    animation: typing 2s steps(16) 0s backwards,caret .5s steps(1) 0s 4 forwards;
  }
  .second-line {
    width: 22ch;
    animation: typing 2s steps(22) 2s backwards,caret .5s steps(1) 2s 4 forwards;
  }
}
</style>
