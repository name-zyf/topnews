<template>
  <div id="app">
    <!-- <el-***>这是全局下已经注册好了的组件，不需要额外（注册）挂载了，可以直接使用 -->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="less">
.el-card {
  width: 480px;
  height: 42px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
