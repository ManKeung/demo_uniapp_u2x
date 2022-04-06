<template>
  <view>
    <u-button
      text="关于我"
      size="normal"
      type="primary"
      @click="handleClick"
    ></u-button>
    <u-button
      text="404"
      size="normal"
      type="primary"
      @click="
        $Router.push({
          path: '/404',
          query: {
            id: 5
          }
        })
      "
    ></u-button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  onLoad() {
    // this.$Router.$lockStatus = true
  },
  methods: {
    handleClick() {
      this.$Router.push({
        name: 'about',
        params: {
          id: 12
        }
      })
    }
  }
}
</script>

<style></style>
