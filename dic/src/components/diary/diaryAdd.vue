<template>
  <el-form label-position="top" label-width="100px">
    <el-form-item label="标题">
      <el-input v-model="formMess.title" placeholder="默认为 {年月日}日记" />
    </el-form-item>
    <el-form-item label="日期">
      <el-input v-model="formMess.diaryDate" placeholder="yyyy-MM-dd,默认为今日" />
    </el-form-item>
    <el-form-item label="请输入面试相关">
      <el-input type="textarea" v-model="formMess.contentInterview" />
    </el-form-item>
    <el-form-item label="请输入工作相关">
      <el-input type="textarea" v-model="formMess.contentSkill" />
    </el-form-item>
    <el-form-item label="请输入工作相关">
      <el-input type="textarea" v-model="formMess.contentWork" />
    </el-form-item>
    <el-form-item label="请输入其他">
      <el-input type="textarea" v-model="formMess.contentOther" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import axios from "axios";

export default {
  name: "from",
  data() {
    return {
      formMess: {
        contentInterview: "",
        contentOther: "",
        contentSkill: "",
        contentWork: "",
        diaryDate: "",
        title: ""
      }
    };
  },
  methods: {
    onSubmit() {
      /* json格式提交： */
      let formData = JSON.stringify(this.formMess);

      /* formData格式提交： */
      //   let formData = new FormData();
      //   for (var key in this.formMess) {
      //     formData.append(key, this.formMess[key]);
      //   }

      axios({
        method: "post",
        url: "/api/zpq/diary",
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
        data: formData
      }).then(res => {
        if (res.data.code != 200) {
          this.$message({
            message: res.data.msg,
            type: "error"
          });
        } else {
          this.$message({
            message: res.data.msg,
            type: "success"
          });
        }
      });
    }
  }
};
</script>
 