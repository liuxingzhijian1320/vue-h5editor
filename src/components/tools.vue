<template>
  <ul class="tools">
    <li class="tools-item dc pointer" @click="checkoutTypeId(1)">
      <i class="iconfont seft-icon">&#xe649;</i>
      <div class="tools-label">文字</div>
    </li>
    <li class="tools-item dc pointer" @click="checkoutTypeId(2)">
      <i class="iconfont seft-icon">&#xe638;</i>
      <div class="tools-label">图片</div>
    </li>
    <li class="tools-item dc pointer" @click="checkoutTypeId(3)">
      <i class="iconfont seft-icon">&#xe814;</i>
      <div class="tools-label">视频</div>
    </li>
    <li class="tools-item dc pointer" @click="checkoutTypeId(4)">
      <i class="iconfont seft-icon">&#xe60b;</i>
      <div class="tools-label">预览</div>
    </li>
    <li class="tools-item dc pointer" @click="checkoutTypeId(5)">
      <i class="iconfont seft-icon">&#xe612;</i>
      <div class="tools-label">保存</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "tools",
  methods: {
    // 选择元素
    checkoutTypeId(id) {}
  }
};
</script>

<style scoped lang="scss">
.tools {
  display: flex;
  width: 400px;
  // background: red;
}
.tools-item {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  color: #999;
  list-style: none;
  .tools-label {
    font-size: 14px;
  }
  .seft-icon {
    display: inline-block;
    font-size: 24px;
  }
}
</style>
