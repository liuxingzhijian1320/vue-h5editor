<template>
  <div class="panel">
    <div class="input-div width">
      <div class="input-label dc">画布背景：</div>
      <el-input class="input-value" size="mini" placeholder="背景色"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',
};
</script>

<style scoped lang="scss">
.panel {
  padding: 30px;
}
.width {
  width: 200px;
}
.input-div {
  display: flex;
  color: rgb(221, 221, 221);
  .input-label {
  }
  .input-value {
    flex: 1;
    background: #454545;
  }
}
</style>
