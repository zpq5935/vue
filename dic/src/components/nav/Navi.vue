
<template>
  <div style="background-color: #EBEBEB;min-height:800px">
    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
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
              <el-menu-item >
                <i class="el-icon-tickets"></i>日记
                <el-menu-item >
                  <i class="el-icon-s-home"></i>日记首页
                </el-menu-item>
                <el-menu-item  index="/diaryAdd">
                  <i class="el-icon-plus"></i>日记新增
                </el-menu-item>
                <el-menu-item index="/calendar">
                  <i class="el-icon-date"></i>日历
                </el-menu-item>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div>
            <div
              style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white"
            >
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in breadcrumbItems" :key="item.id">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div style="margin-top:10px">
              <router-view></router-view>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      searchCriteria: "",
      breadcrumbItems: ["导航一"]
    };
  },

  methods: {
    handleIconClick(ev) {
      console.log(ev);
    }
  }
};
</script>