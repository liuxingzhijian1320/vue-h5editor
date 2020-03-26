<template>
  <div class="editText" :style="getCommonStyle(activeElement.styles)">
    {{activeElement.value}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "editText",
  computed: {
    ...mapGetters({
      activeElement: "editor/activeElement"
    })
  },
  mounted() {
    console.info(9999999, this.activeElement);
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
    }
  }
};
</script>

<style scoped lang="scss">
</style>
