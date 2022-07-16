<template>
  <el-calendar v-model="value">
    <template slot="dateCell" slot-scope="{date, data}">
      <p>{{ data.day }} {{ data.isSelected ? '✔️' : ''}}</p>
      <template v-for="(item,index) in calendarData">
        <el-popover
          v-if="(item.diaryDate)==data.day"
          :title="item.title"
          width="200"
          :key="index"
          trigger="hover"
          content="待定待定待定待定待定"
        >
          <el-button slot="reference">Detail</el-button>
        </el-popover>
        <!-- <el-tooltip class="item" effect="dark" :content="item.title" placement="right">
              <el-button slot="reference">hover 激活</el-button>
              <div>{{item.title}}</div>
        </el-tooltip>-->
      </template>
    </template>
  </el-calendar>
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
          id: ""
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