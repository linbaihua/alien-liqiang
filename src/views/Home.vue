<template>
  <el-row class="container">
    <!-- left -->
    <el-col :span="8" class="l-container" style="padding-right:10px">
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
    <el-col :span="16" class="r-container" style="padding-left:10px">
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
      <!-- chart-top -->
      <el-card style="height:280px">

      </el-card>
      <!-- chart-bottom -->
      <div class="chartdown">
        <el-card></el-card>
        <el-card></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getDate} from '../api';
export default {
  data() {
    return {
      tableData:[],
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
    getDate().then(({data}) => {
      const {tableData} = data.data
      this.tableData = tableData
      console.log(tableData);
    })
  },
};
</script>

<style lang="less" scoped>
.container {
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
    .el-card{
    }
    .chartdown{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .el-card{
        width: 48%;
        height: 240px;
      }
    }
  }
}
</style>