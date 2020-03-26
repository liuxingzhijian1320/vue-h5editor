<template>
  <section class="content dc">
    <div id="screen">
      <editShape :style="getCommonStyle(defaultStyle)"
        :defaultStyle="defaultStyle" @resize="handleElementResize">
        123
      </editShape>
    </div>
  </section>
</template>

<script>
import editShape from "./edit-shape";
export default {
  name: "contentbox",
  components: {
    editShape
  },
  data() {
    return {
      defaultStyle: {
        width: 200,
        height: 100,
        left: 20,
        top: 20,
        right: 0,
        bottom: 0
      }
    };
  },
  methods: {
    /**
     * 获取元素样式
     * @param styleObj
     * @param scalePoint 缩放比例
     */
    getCommonStyle(styleObj, scalingRatio = 1) {
      let needUnitStr = [
        "width",
        "height",
        "top",
        "left",
        "paddingTop",
        "paddingLeft",
        "paddingRight",
        "paddingBottom",
        "marginTop",
        "marginLeft",
        "marginRight",
        "marginBottom",
        "borderWidth",
        "fontSize",
        "borderRadius",
        "letterSpacing"
      ];
      let style = {};

      for (let key in styleObj) {
        if (needUnitStr.includes(key)) {
          style[key] = styleObj[key] * scalingRatio + "px";
        } else {
          style[key] = styleObj[key];
        }
      }
      style.transform = `rotate(${style.rotate}deg)`;
      style.backgroundImage = style.backgroundImage
        ? `url(${style.backgroundImage})`
        : "";
      return style;
    },
    handleElementResize(pos) {
      this.defaultStyle = {
        ...this.defaultStyle,
        ...pos
      };
    }
  }
};
</script>

<style scoped lang="scss">
.content {
  flex: 1;
  background: #282828;
  #screen {
    position: relative;
    overflow: hidden;
    width: 375px;
    height: 603px;
    background: #fff;
    background-image: url(../assets/images/transparent.jpg);
    background-position: 0 0;
    background-size: 16px 16px;
    background-repeat: repeat;
  }
}
</style>
