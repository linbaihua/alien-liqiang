<template>
  <el-row class="container">
    <!-- left -->
    <el-col :span="8" class="l-container" style="padding-right: 10px">
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/user.png" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login">
          <p>上次登录时间： <span>2021-7-21</span></p>
          <p>上次登录地点： <span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :prop="key"
            :label="val"
            :key="key"
          />
        </el-table>
      </el-card>
    </el-col>
    <!-- right -->
    <el-col :span="16" class="r-container" style="padding-left: 10px">
      <!-- order -->
      <div class="num">
        <el-card v-for="item in countData" :key="item.name">
          <div class="card">
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ backgroundColor: item.color }"
            ></i>
            <div class="detail">
              <p class="ivalue">￥{{ item.value }}</p>
              <p class="iname">{{ item.name }}</p>
            </div>
          </div>
        </el-card>
      </div>
      <!-- 折线图 使用echarts-->
      <el-card style="height: 280px">
        <div ref="echarts1" style="height: 280px; width: auto"></div>
      </el-card>
      <!-- chart-bottom -->
      <div class="chartdown">
        <!-- 柱状图 -->
        <el-card style="height: 260px">
          <div ref="echarts2" style="height: 240px"></div>
        </el-card>
        <!-- 统计图 -->
        <el-card style="height: 260px">
          <div ref="echarts3" style="height: 240px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getDate } from "../api";
import * as echarts from "echarts";
export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getDate().then(({ data }) => {
      const { tableData } = data.data;
      this.tableData = tableData;
      const { orderData, userData, videoData } = data.data;
      console.log(data);

      //echarts折线图
      const myChart = echarts.init(this.$refs.echarts1);
      const myChartOption2 = {};
      const xAxis = Object.keys(orderData.data[0]);
      myChartOption2.legend = { data: xAxis };
      myChartOption2.series = [];
      xAxis.forEach((item) => {
        myChartOption2.series.push({
          name: item,
          data: orderData.data.map((element) => element[item]),
          type: "line",
        });
      });
      myChartOption2.xAxis = { data: xAxis };
      myChartOption2.yAxis = {};
      myChart.setOption(myChartOption2);

      // 柱状图
      const echarts2 = echarts.init(this.$refs.echarts2);
      const eachrts2Option = {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: userData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            data: userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      echarts2.setOption(eachrts2Option);

      // 统计图
      const echarts3 = echarts.init(this.$refs.echarts3);
      const eachrts3Option = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: videoData,
            type: "pie",
          },
        ],
      };
      echarts3.setOption(eachrts3Option);
    });
  },
};
</script>

<style lang="less" scoped>
.container {
  // 首页左边区域
  .l-container {
    .user {
      height: 60%;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #878787;
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-left: 30px;
      }
      .userinfo {
        margin-left: 50px;
        .name {
          font-size: 32px;
          margin-bottom: 10px;
        }
        .access {
          color: #999;
        }
      }
    }
    .login {
      margin-left: 30px;
      // background-color: aquamarine;
      p {
        color: #000000;
        margin: 10px 0;
        span {
          // background-color: aqua;
          margin-left: 80px;
          color: #878787;
        }
      }
    }
  }
  // 首页右边区域
  .r-container {
    .num {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .el-card {
        width: 32%;
        margin-bottom: 10px;
        .card {
          display: flex;
          .icon {
            width: 80px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            color: #fff;
            font-size: 36px;
          }
          .detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 15px;
            .ivalue {
              margin-bottom: 10px;
              font-size: 30px;
            }
            .iname {
              font-size: 14px;
              color: #999;
              text-align: center;
            }
          }
        }
      }
    }
    .el-card {
    }
    .chartdown {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .el-card {
        width: 48%;
        height: 240px;
      }
    }
  }
}
</style>