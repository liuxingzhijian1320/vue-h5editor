<template>
  <div class="home">
    <myheader></myheader>
    <div class="wrapper">
      <leftaside></leftaside>
      <contentbox></contentbox>
      <panel></panel>
    </div>
  </div>
</template>

<script>
import myheader from "@/components/myheader";
import panel from "@/components/panel";
import leftaside from "@/components/leftaside";
import contentbox from "@/components/contentbox";
export default {
  name: "home",
  components: {
    myheader,
    panel,
    leftaside,
    contentbox
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  height: 100vh;
  .wrapper {
    display: flex;
    flex: 1;
  }
}
</style>
