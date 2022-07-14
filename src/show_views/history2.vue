<template>

  <div class="down">
  <h1>
    不同天气指数数据
  </h1>
  </div>

  <div class="d" >

    <el-table :data="tableData" style="width: 100%"  >

      <el-table-column prop= count label="count" width="180" />
      <el-table-column prop= airTemperature label="airTemperature" width="180" />
      <el-table-column prop= humidity label="humidity" width="180" />
      <el-table-column prop= temperature label="temperature" width="180" />
      <el-table-column prop= windSpeed label="windSpeed" width="180" />

    </el-table>

    <el-pagination
        background
        layout="prev,pager,next"
        page-size="20"
        :total="totalItem"
        @current-change="page">

    </el-pagination>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "history2",

  created(){
    const _this = this

    // axios({
    //   method: "get",
    //   url: 'http://localhost:8181/data/findCountByWeatherIndex',
    // }).then(function (resp){
    //   console.log(resp)
    //   _this.tableData = resp.data
    // })
    axios({
      method: "post",
      url: 'http://localhost:8181/data/findCountByWeatherIndexOnPage',
      data: {
        pageNow: '1',
        pageSize: '10',
      }
    }).then(function (resp){
      _this.tableData = resp.data
      console.log(resp)
      console.log(_this.tableData)
    })

  },

  data(){
    return{
      totalItem:731,
      tableData: [{
        airTemperature: "",
        count: "",
        humidity:"",
        temperature:"",
        windSpeed:""
      }],
    }

  },
  methods:{
    async page(currentPage){
      const _this = this
      await
          axios({
            method: "post",
            url: 'http://localhost:8181/data/findCountByWeatherIndexOnPage',
            data: {
              pageNow: currentPage,
              pageSize: '10',
            }
          }).then(function (resp){
            _this.tableData = resp.data
            console.log(resp)
          })
    },
  }
}
</script>

<style scoped>
.d{
  background:rgba(0,0,0,0.3);
  border-radius: 18px;
}

.down{
  margin-top:3px;
}
</style>