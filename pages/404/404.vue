<template>
  <view>
    <u-button
      text="返回上一页"
      size="normal"
      type="primary"
      @click="handleClick"
    ></u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$Router.back(1, {
        success: (...arg) => {
          console.log(arg)
        }
      })
    }
  }
}
</script>

<style></style>
