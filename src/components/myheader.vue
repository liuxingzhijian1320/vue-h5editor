<template>
  <div class="myheader dc">
    <tools class="tools-content dc"></tools>
  </div>
</template>

<script>
import tools from "@/components/tools";

export default {
  name: "myheader",
  components: {
    tools
  }
};
</script>

<style scoped lang="scss">
.myheader {
  height: 60px;
  background: #0e1113;
}
</style>
