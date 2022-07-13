<template>
  <div>
    <h1>diary</h1>
    <form method="POST">
      标题 <input type="text" v-model="formMess.title" placeholder="默认为 {年月日}日记">
      日记日期 <input type="text" v-model="formMess.diaryDate" placeholder="默认为今日">
      <textarea placeholder="请输入面试相关" rows="5" cols="100" v-model="formMess.contentInterview" />
      <br />
      <textarea placeholder="请输入技术相关" rows="5" cols="100" v-model="formMess.contentSkill"/>
      <br />
      <textarea placeholder="请输入工作相关" rows="5" cols="100" v-model="formMess.contentWork"/>
      <br />
      <textarea placeholder="请输入其他" rows="5" cols="100" v-model="formMess.contentOther"/>
      <br />
      <input type="button" @click="onSubmit()" value="提交" />
    </form>
  </div>
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
        url: "/zpq/diary",
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
        data: formData
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
 