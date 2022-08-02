<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    style="min-height:800px"
    router
  >
    <el-menu-item index="/hello">
      <i class="el-icon-message"></i>hello
    </el-menu-item>
    <el-menu-item index="/HelloWorld">
      <i class="el-icon-menu"></i>HelloWorld
    </el-menu-item>
    <el-menu-item>
      <i class="el-icon-tickets"></i>日记
      <el-menu-item>
        <i class="el-icon-s-home"></i>日记首页
      </el-menu-item>
      <el-menu-item index="/diaryAdd">
        <i class="el-icon-plus"></i>日记新增
      </el-menu-item>
      <el-menu-item index="/calendar">
        <i class="el-icon-date"></i>日历
      </el-menu-item>
    </el-menu-item>
  </el-menu>

</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
    };
  },

  methods: {
    handleIconClick(ev) {
      console.log(ev);
    }
  }
};
</script>
