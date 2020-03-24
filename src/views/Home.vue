<template>
  <div class="home">
    <section class="aside"></section>
    <section class="content dc">
      <div id="screen">
        <i class="iconfont wenzi-icon">&#xe60b;</i>
      </div>
    </section>
    <section class="tools-wrapper">
      <tools class="tools-content"></tools>
      <panel class="panel-content"></panel>
    </section>
  </div>
</template>

<script>
import tools from '@/components/tools';
import panel from '@/components/panel';
export default {
  name: 'home',
  components: {
    tools,
    panel,
  },
};
</script>
<style lang="scss">
.home {
  display: flex;
  height: 100vh;
  .aside {
    width: 200px;
    background: #4d4d4d;
  }
  .content {
    width: 400px;
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
  .tools-wrapper {
    display: flex;
    flex: 1;
    background: #4d4d4d;
    .tools-content {
      padding-left: 30px;
      width: 80px;
    }
    .panel-content {
      flex: 1;
    }
  }
}
</style>
