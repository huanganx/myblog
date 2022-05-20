<template>
  <div :class="$style.container">
    <router-view v-slot="{Component}">
      <keep-alive>
        <transition :name="transitionName">
          <component :is="Component" />
        </transition>
       </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  watch: {
    $route (to, from) {
      if (to.meta.level < from.meta.level) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  data () {
    return {
      transitionName: 'slide-right' // 初始过渡动画方式
    }
  }
})
</script>

<style lang="scss" module>
.container {
  height: 100%;
  width: 100%;
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
    background: url('~@/assets/background.jpeg') no-repeat 50%/cover;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    content: "";
  }
  :global {
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
      width: 100%;
      height: 100%;
      will-change: transform;
      transition: all 300ms cubic-bezier(.55,0,.1,1);
      position: absolute;
      backface-visibility: hidden;
    }
    .slide-right-enter-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(3%, 0, 0);
    }
    .slide-left-enter-active{
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active{
      opacity: 0;
      transform: translate3d(-3%, 0, 0);
    }
  }
}
</style>
