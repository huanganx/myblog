<template>
  <div :class="$style.container">
    <h1 class="welcome">
      <span class="first-line">I Am HuangAnXuan</span>
      <span class="second-line">Welcome To My Website</span>
    </h1>
    <p class="motto" :class="{ show: show }">认真做好每一份细节，用心写好每一段代码</p>
    <div class="into" :class="{ show: showbtn }" @click="$router.push('/')">
      <i class="iconfont icon-jinru"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      show: false,
      showbtn: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 4000)
    setTimeout(() => {
      this.showbtn = true
    }, 4200)
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
  flex-direction: column;
  :global {
    .motto {
      margin: 20px 0;
      font-size: 20px;
      color: #fff;
      text-shadow: 1px 1px 5px rgb(0 0 0 / 50%);
      opacity: 0;
      transition: ease-in .2s opacity;
      &.show {
        opacity: 1;
      }
    }
    .into {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      width: 44px;
      font-weight: 800;
      color: #909398;
      background-color: #fff;
      border-radius: 24px;
      box-shadow: 1px 1px 5px rgb(0 0 0 / 50%);
      opacity: 0;
      transition: ease .2s;
      cursor: pointer;
      .iconfont {
        font-size: 18px;
      }
      &.show {
        opacity: 1;
      }
      &:hover {
        width: 80px;
        color: #666;
        background-color: #f4f4f5;
        .iconfont {
          display: none;
        }
        &::after {
          content: '进入';
          white-space: nowrap;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
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
