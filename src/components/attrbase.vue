<template>
  <div id="attrbase" class="textcolor">
    <el-form ref="form" label-width="80px">
      <el-form-item label="文本内容">
        <el-input size="mini" class="base-input" type="textarea"
          v-model="activeElement.text">
        </el-input>
      </el-form-item>
      <el-form-item label="字体颜色">
        <el-color-picker size="mini"></el-color-picker>
      </el-form-item>
      <el-form-item label="字体大小">
        <el-input-number class="my-size-num" size="mini"
          controls-position="right" :min="0" v-model="activeElement.text">
          <template slot="append">px</template>
        </el-input-number>
      </el-form-item>
      <el-form-item class="my-form-size" label="尺寸大小">
        <span>宽</span>
        <el-input-number class="my-size-num" size="mini"
          controls-position="right" :min="0" v-model="activeElement.text">
        </el-input-number>
        <span>高</span>
        <el-input-number class="my-size-num" size="mini"
          controls-position="right" :min="0" v-model="activeElement.text">
        </el-input-number>
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-tooltip class="item" effect="dark" content="左对齐" placement="bottom">
          <el-button class="my-align-btn">
            <i class="iconfont align-icon">&#xe600;</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="下对齐" placement="bottom">
          <el-button class="my-align-btn">
            <i class="iconfont align-icon">&#xe63b;</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="右对齐" placement="bottom">
          <el-button class="my-align-btn">
            <i class="iconfont align-icon">&#xe601;</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="上对齐" placement="bottom">
          <el-button class="my-align-btn">
            <i class="iconfont align-icon">&#xe66d;</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="水平居中对齐"
          placement="bottom">
          <el-button class="my-align-btn">
            <i class="iconfont align-icon">&#xe60f;</i>
          </el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="垂直居中对齐"
          placement="bottom">
          <el-button class="my-align-btn">
            <i class="iconfont align-icon">&#xe602;</i>
          </el-button>
        </el-tooltip>
      </el-form-item>
      <el-form-item class="my-form-size" label="坐标位置">
        <span>X</span>
        <el-input-number class="my-size-num" size="mini"
          controls-position="right" :min="0" v-model="activeElement.text">
        </el-input-number>
        <span>Y</span>
        <el-input-number class="my-size-num" size="mini"
          controls-position="right" :min="0" v-model="activeElement.text">
        </el-input-number>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "attrbase",
  data() {
    return {
      uu: "",
      activeElement: {}
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
#attrbase {
}
.textcolor {
  color: rgba(255, 255, 255, 0.8);
}
.align-icon {
  font-size: 18px;
}
</style>
<style lang="scss">
#attrbase {
  .el-input--mini {
    .el-input__inner,
    .el-textarea__inner {
      border: 0;
      background: #282828;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .el-form-item {
    margin-bottom: 3px;
  }
  .el-form-item__label {
    color: rgba(255, 255, 255, 0.8);
  }
  .my-size-num {
    margin: 0 10px;
    &.el-input-number--mini {
      width: 90px;
    }
    .el-input__inner {
      box-sizing: border-box;
      padding: 0;
      width: 60px;
      text-align: center;
    }
  }
  .my-align-btn {
    padding: 5px;
  }
}
</style>
