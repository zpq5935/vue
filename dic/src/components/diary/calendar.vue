<template>
  <el-container>
    <el-header>
      <el-button icon="el-icon-refresh-left" @click="refreshDiaryView()">Refresh</el-button>
    </el-header>
    <el-main>
      <el-calendar v-model="value">
        <template slot="dateCell" slot-scope="{date, data}">
          <p>{{ data.day }} {{ data.isSelected ? '✔️' : ''}}</p>
          <template v-for="(item,index) in calendarData">
            <el-popover v-if="(item.diaryDate)==data.day" :key="index" trigger="hover">
              <el-form label-width="100px">
                <el-form-item label="日期：">{{item.diaryDate}}</el-form-item>
                <el-form-item label="标题：">{{item.title}}</el-form-item>
                <el-form-item label="工作相关：">{{item.contentWork}}</el-form-item>
                <el-form-item label="技术相关：">{{item.contentSkill}}</el-form-item>
                <el-form-item label="面试相关：">{{item.contentInterview}}</el-form-item>
                <el-form-item label="其他：">{{item.contentOther}}</el-form-item>
              </el-form>
              <el-button slot="reference">Detail</el-button>
            </el-popover>
          </template>
        </template>
      </el-calendar>
    </el-main>
  </el-container>
</template>

<style>
.is-selected {
  color: red;
}
.has-diary {
  background-color: orange;
}
.right-top-corner {
  display: flex;
  justify-content: flex-end;
}
</style>


<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      value: new Date(),
      oldValue: new Date(),
      calendarData: [
        {
          title: "",
          diaryDate: "",
          id: "",
          contentInterview: "",
          contentOther: "",
          contentSkill: "",
          contentWork: ""
        }
      ]
    };
  },

  mounted() {
    this.refreshDiaryView();
  },

  methods: {
    getTitle(data) {
      for (var index in this.calendarData) {
        if (data.day == this.calendarData[index].diaryDate) {
          return this.calendarData[index].title;
        }
      }
      return "";
    },
    showTitle(data) {
      for (var index in this.calendarData) {
        if (data.day == this.calendarData[index].diaryDate) {
          console.log(this.calendarData[index].title);
          return;
        }
      }
    },
    refreshDiaryView() {
      axios({
        method: "get",
        url:
          "/api/zpq/diary/calendarView?" +
          "date=" +
          moment(this.value).format("yyyy-MM")
        // data: {"date":this.value}
      }).then(res => {
        this.calendarData = res.data.data;
      });
    }
  },

  watch: {
    value: function(val) {
      if (
        moment(this.oldValue).format("yyyyMM") != moment(val).format("yyyyMM")
      ) {
        this.refreshDiaryView();
      }
      this.oldValue = val;
    }
  }
};
</script>