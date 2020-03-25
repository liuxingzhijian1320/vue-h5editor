<template>
  <section class="content dc">
    <div id="screen">

    </div>
  </section>
</template>

<script>
export default {
  name: "contentbox"
};
</script>

<style scoped lang="scss">
.content {
  flex: 1;
  background: #282828;
  #screen {
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
