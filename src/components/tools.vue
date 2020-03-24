<template>
  <div class="tools" id="tools">
    <el-tooltip
      class="tools-item dc pointer"
      effect="dark"
      content="文字"
      placement="left"
    >
      <el-button>
        <i class="iconfont seft-icon">&#xe649;</i>
      </el-button>
    </el-tooltip>
    <el-tooltip
      class="tools-item dc pointer"
      effect="dark"
      content="图片"
      placement="left"
    >
      <el-button>
        <i class="iconfont seft-icon">&#xe638;</i>
      </el-button>
    </el-tooltip>
    <el-tooltip
      class="tools-item dc pointer"
      effect="dark"
      content="视频"
      placement="left"
    >
      <el-button>
        <i class="iconfont seft-icon">&#xe60f;</i>
      </el-button>
    </el-tooltip>
    <el-tooltip
      class="tools-item dc pointer"
      effect="dark"
      content="预览"
      placement="left"
    >
      <el-button>
        <i class="iconfont seft-icon">&#xe60b;</i>
      </el-button>
    </el-tooltip>
    <el-tooltip
      class="tools-item dc pointer"
      effect="dark"
      content="保存"
      placement="left"
    >
      <el-button>
        <i class="iconfont seft-icon">&#xe612;</i>
      </el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'tools',
};
</script>

<style scoped lang="scss">
.tools {
  padding-top: 30px;
}
.tools-item {
  margin-bottom: 10px;
  margin-left: 0 !important;
  padding: 0 !important;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background: #fff;
  list-style: none;

  .seft-icon {
    color: #999;
    font-size: 28px;
  }
}
</style>
