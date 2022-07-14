<template>
  <el-calendar>
    <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
    <template slot="dateCell" slot-scope="{date, data}">
      <p
        :class="data.isSelected ? 'is-selected' : ''"
      >{{ data.day }} {{ data.isSelected ? '✔️' : ''}} </p>
      <div v-for="item in calendarData" @click="printDiares">
        <div v-if="(item.diaryDate)==data.day" class="is-selected">{{item.title}}</div>
      </div>
    </template>
  </el-calendar>
</template>

<style>
.is-selected {
  color: red;
}
</style>


<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      value: new Date(),
      calendarData: [
        {
          title: "",
          diaryDate: "",
          id: ""
        }
      ]
    };
  },

  mounted() {
    console.log(this.value);
    console.log(moment(this.value).format("yyyy-MM"));
    axios({
      method: "get",
      url:
        "/api/zpq/diary/calendarView?" +
        "date=" +
        moment(this.value).format("yyyy-MM")
      // data: {"date":this.value}
    }).then(res => {
      console.log(res);
      this.calendarData = res.data.data;
      for (var index in res.data.data) {
        console.log(res.data.data[index]);
      }
    });
  },

  methods: {
    printDiares() {
      console.log("diaries", this.calendarData);
    }
  }
};
</script>