<template>
  <el-container>
    <el-header class="home_header">
      <Head></Head>
    </el-header>
    <el-container>
      <el-aside width="200px">
      <Nav></Nav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>
<script type="text/ecmascript-6">
import Navi from "./nav/Navi";
import Head from "./head/head";
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
  },
  components:{
    Nav:Navi,
    Head:Head,
  }
};
</script>
<style>
.home_header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
