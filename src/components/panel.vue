<template>
  <div class="panel">
    <ul class="panel-ul">
      <li @click="handleClick(1)" class="panel-li pointer"
        :class="{'active': activeIndex==1}">图层属性</li>
      <li @click="handleClick(2)" class="panel-li pointer"
        :class="{'active': activeIndex==2}">图层动画</li>
      <li @click="handleClick(3)" class="panel-li pointer"
        :class="{'active': activeIndex==3}">画布设置</li>
    </ul>
    <ul class="panel-content">
      <li class="panel-box box1" :class="{'active': activeIndex==1}"
        v-if="activeIndex == 1">
        <baseProps />
      </li>
      <li class="panel-box box2" :class="{'active': activeIndex==2}"
        v-if="activeIndex == 2">
        2
      </li>
      <li class="panel-box box3" :class="{'active': activeIndex==3}"
        v-if="activeIndex == 3">
        3
      </li>
    </ul>
    <!-- <div class="input-div width">
      <div class="input-label dc">画布背景：</div>
      <el-input class="input-value" size="mini" placeholder="背景色"></el-input>
    </div> -->
  </div>
</template>

<script>
import baseProps from "./base-props";
export default {
  name: "panel",
  components: {
    baseProps
  },
  data() {
    return {
      activeIndex: 1
    };
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 0 0px;
  width: 350px;
  background: #4d4d4d;
}
.panel-ul {
  display: flex;
  .panel-li {
    position: relative;
    padding: 12px 16px 12px 16px;
    color: #a5b6c8;
    &:after {
      position: absolute;
      right: 0px;
      bottom: 0;
      left: 0px;
      display: inline-block;
      height: 2px;
      content: "";
    }
    &.active::after {
      background: #ff5402;
    }
  }
}
.panel-content {
  position: relative;
  flex: 1;

  .panel-box {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    overflow-y: scroll;
    padding: 10px;
    // opacity: 0;
    &.box1 {
    }
    &.box2 {
      background: green;
    }
    &.box3 {
      background: red;
    }
    &.active {
      display: block;
      // opacity: 1;
      // animation: slideRightToLeft 0.3s ease-in;
    }
  }
}
@keyframes slideRightToLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
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
