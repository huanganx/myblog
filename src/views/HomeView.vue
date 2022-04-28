<template>
  <div :class="$style.container">
    <el-skeleton :loading="loading" :rows="5" animated>
      <el-empty>
        <el-button type="primary">Button</el-button>
      </el-empty>
    </el-skeleton>
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
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
}
</style>
