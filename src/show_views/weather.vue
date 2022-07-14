<template>
  <div>
    <h1>
      天气数据
    </h1>

    <div class="d1">
      心知天气 - 高精度气象数据 - 天气数据API接口 - https://www.seniverse.com/
    </div>

  </div>

  <div class='d2'>
    <span>
    城市
  </span>

    <el-select v-model="location" class="r-bu" placeholder="Select">

      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>

    <el-button class="e_button" @click="query" >查询</el-button>
  </div>

  <el-divider ></el-divider>

  <div>

    <div class="pic">

      <el-table :data="tableData" style="width: 100%">

        <el-table-column prop= location label="城市" width="90" />
        <el-table-column prop= datetime label="时间" width="170" />
        <el-table-column prop= atemp label="体感温度" width="80" />
        <el-table-column prop= temp label="温度" width="80" />
        <el-table-column prop= holiday label="节假日" width="90" />
        <el-table-column prop= humidity label="湿度" width="70" />
        <el-table-column prop= season label="季节" width="70" />
        <el-table-column prop= windspeed label="风速" width="70" />
        <el-table-column prop= workingday label="工作日" width="90" />
        <el-table-column prop= weather label="天气情况" width="150" />

      </el-table>

    </div>



  </div>







</template>

<script>
import axios from "axios";

export default {
  name: "weather",

  data(){
    return {
      location:'',
      datetime:'2022/07/13 11:00:00',

      tableData: [{
        atemp: "",
        datetime: "",
        holiday:"",
        humidity:"",
        location:"",
        season:"",
        temp:"",
        weather:"",
        windspeed:"",
        workingday:""
      }],

      options : [
        {
          value: 'beijing',
          label: '北京',
        },
        {
          value: 'shanghai',
          label: '上海',
        },
        // {
        //   value: 'tianjin',
        //   label: '天津',
        // },
        {
          value: 'xian',
          label: '西安',
        },
        // {
        //   value: 'taiyuan',
        //   label: '太原',
        // },
        // {
        //   value: 'huhehaote',
        //   label: '呼和浩特',
        // },
        // {
        //   value: 'nanjing',
        //   label: '南京',
        // },
        // {
        //   value: 'guangz',
        //   label: '广州',
        // },
        // {
        //   value: 'kunming',
        //   label: '昆明',
        // },
        // {
        //   value: 'taiwan',
        //   label: '台湾',
        // },
        // {
        //   value: 'dali',
        //   label: '大理',
        // },
        // {
        //   value: 'chongqing',
        //   label: '重庆',
        // },
        // {
        //   value: 'chengdu',
        //   label: '成都',
        // }
      ]

    }
  },


  methods: {



    async query(){
      if(this.location==''){
        this.$message({
          showClose: true,
          message: '请选择查询城市',
          type: 'error'
        });
      }else{
        // this.getInfo()
        let temp = ""
        const _this = this
        await
            axios({
              method: "post",
              url: 'http://localhost:8181/weather/addWeather',
              data: {
                location:this.location
              }
            }).then(function (resp){

              if(resp.data==''){
                this.$message({
                  showClose: true,
                  message: '获取数据失败',
                  type: 'error'
                });
              }

              temp = resp.data
              console.log(resp)
              _this.tableData = temp

            })

      }
    },



    // async getInfo(){
    //   let temp = ""
    //   await
    //       axios({
    //         method: "post",
    //         url: 'http://localhost:8181/weather/findWeather',
    //         data: {
    //           datetime:this.datetime,
    //           location:this.location
    //         }
    //       }).then(function (resp){
    //         temp = resp.data
    //         console.log(resp)
    //         console.log(1)
    //         console.log(temp)
    //       })
    //
    // }


  }

}
</script>

<style scoped>

.d1{
  border: 5px solid var(--el-border-color);
  margin-top:10px;
  margin-bottom:10px;
  font-family: 楷体;
  font-size:20px;
}
.d2{
  background:rgba(0,0,0,0.2);
  border-radius: 30px;
}


.r-bu{
  margin-left: 20px;
}
.e_button{

  color: #0a0a0a;
  width: 100px;
  background-color: #80D0C7;;

}
</style>