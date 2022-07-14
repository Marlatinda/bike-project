<template>
  <div>
<!--    <h1>-->
<!--      天气数据-->
<!--    </h1>-->

<!--    <div class="d1">-->
<!--      心知天气 - 高精度气象数据 - 天气数据API接口 - https://www.seniverse.com/-->
<!--    </div>-->

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


    <span class="demonstration">日期</span>
    <el-select v-model="select_data" class="m-2" placeholder="Select" >

      <el-option
          v-for="item in options3"
          :key="item"
          :label="item"
          :value="item"
      />
    </el-select>
    <el-button class="e_button" @click="queryByDate" >按日查询</el-button>
<!--    <el-date-picker-->

<!--        :picker-options="expireTimeOPtime"-->
<!--        v-model="select_data"-->
<!--        format="YYYY/MM/DD"-->
<!--        value-format="YYYY/MM/DD"-->
<!--        type="date"/>-->
<!--    <span class="demonstration">时间</span>-->
    <el-select v-model="timedata" class="m-2" placeholder="Select" >

      <el-option
          v-for="item in options2"
          :key="item"
          :label="item"
          :value="item"
      />
    </el-select>


    <el-button class="e_button" @click="queryByhour" >小时查询</el-button>
  </div>

  <el-divider ></el-divider>

  <div>

    <div class="pic">
      <h1>天气数据</h1>

      <span>城市 ：                 </span><span> {{location}}         </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>季节 ：                      </span><span> {{season}}         </span><br>
      <span>体感温度 ：                      </span><span> {{atemp}}         </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>温度 ：                      </span><span> {{temp}}         </span><br>
      <span>风速 ：                      </span><span> {{windspeed}}         </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>湿度 ：                      </span><span> {{humidity}}         </span><br>
      <span>工作日 ：                      </span><span> {{workingday}}         </span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span>节假日 ：                      </span><span> {{holiday}}         </span><br>
      <span>天气情况 ：                      </span><span> {{weather}}         </span>

<!--      <el-descriptions title="天气数据"  class="descrip">-->
<!--        <el-descriptions-item label="城市">{{location}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="体感温度">{{atemp}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="温度">{{temp}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="风速">{{windspeed}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="湿度">{{humidity}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="季节">{{season}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="节假日">{{holiday}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="工作日">{{workingday}}</el-descriptions-item>-->
<!--        <el-descriptions-item label="天气情况">{{weather}}</el-descriptions-item>-->
<!--      </el-descriptions>-->

    </div>

    <div  class="m2">
      <h1>符号说明</h1>

       <span>节假日 holiday:&nbsp;&nbsp;&nbsp;&nbsp; 1（节假日）&nbsp&nbsp;2（工作日）<br>
  </span>

      <span> <br>工作日 workingday:&nbsp;&nbsp;&nbsp;&nbsp; 1（工作日）&nbsp&nbsp;2（周末）<br>
  </span>

      <span> <br>季节 season:&nbsp&nbsp;&nbsp; 1（spring）&nbsp&nbsp;2（summer）&nbsp&nbsp;3（autumn）&nbsp&nbsp;4（winter）
  <br></span>

      <span> <br>天气情况 weather:&nbsp&nbsp;&nbsp; 1（晴，多云）&nbsp&nbsp;2（有雾，阴天）&nbsp&nbsp;3（小雨，小雪）&nbsp&nbsp;4（大雾，大雨，大雪）
  <br></span>

    </div>

  </div>







</template>

<script>
import axios from "axios";

export default {
  name: "weather2",

  created() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let hour= date.getHours()

    let str1=year+'/0'+month+'/'+day
    let x=day+1
    let str2=year+'/0'+month+'/'+x

    this.options3[0]=str1
    this.options3[1]=str2

    let i=0
    //第一天
    if(hour<=9){
      for(var k=hour;k<=9;k++){
        this.options2[i]=str1+' 0'+k+':00:00'
        i++
      }
      for(var k=10;k<24;k++){
        this.options2[i]=str1+' '+k+':00:00'
        i++
      }
    }else{
      for(var k=hour;k<24;k++){
        this.options2[i]=str1+' '+k+':00:00'
        i++
      }
    }
    //第二天
    if(hour<=9){
      for(var k=0;k<hour;k++){
        this.options2[i]=str2+' 0'+k+':00:00'
        i++
      }
      // for(){
      //
      // }
    }else{
      for(var k=0;k<=9;k++){
        this.options2[i]=str2+' 0'+k+':00:00'
        i++
      }
      for(var k=10;k<hour;k++){
        this.options2[i]=str2+' '+k+':00:00'
        i++
      }
    }


  },

  data(){
    return {
       location:'',
       select_data:'',
       timedata:'',


        atemp: "",
        holiday:"",
        humidity:"",
        season:"",
        temp:"",
        weather:"",
        windspeed:"",
        workingday:"",


      options : [
        {
          value: 'beijing',
          label: '北京',
        },
        {
          value: 'shanghai',
          label: '上海',
        },
        {
          value: 'xian',
          label: '西安',
        },

      ],
      options2:[],
      options3:[],
      // options2:[
      //   {
      //     value: '',
      //     label: 'null',
      //   },
      //   {
      //     value: '01:00:00',
      //     label: '01:00:00',
      //   },
      //   {
      //     value: '02:00:00',
      //     label: '02:00:00',
      //   },
      //   {
      //     value: '03:00:00',
      //     label: '03:00:00',
      //   },
      //   {
      //     value: '04:00:00',
      //     label: '04:00:00',
      //   },
      //   {
      //     value: '05:00:00',
      //     label: '05:00:00',
      //   },
      //   {
      //     value: '06:00:00',
      //     label: '06:00:00',
      //   },
      //   {
      //     value: '07:00:00',
      //     label: '07:00:00',
      //   },
      //   {
      //     value: '08:00:00',
      //     label: '08:00:00',
      //   },
      //   {
      //     value: '09:00:00',
      //     label: '09:00:00',
      //   },
      //   {
      //     value: '10:00:00',
      //     label: '10:00:00',
      //   },
      //   {
      //     value: '11:00:00',
      //     label: '11:00:00',
      //   },
      //   {
      //     value: '12:00:00',
      //     label: '12:00:00',
      //   },
      //   {
      //     value: '13:00:00',
      //     label: '13:00:00',
      //   },
      //   {
      //     value: '14:00:00',
      //     label: '14:00:00',
      //   },
      //   {
      //     value: '15:00:00',
      //     label: '15:00:00',
      //   },
      //   {
      //     value: '16:00:00',
      //     label: '16:00:00',
      //   },
      //   {
      //     value: '17:00:00',
      //     label: '17:00:00',
      //   },
      //   {
      //     value: '18:00:00',
      //     label: '18:00:00',
      //   },
      //   {
      //     value: '19:00:00',
      //     label: '19:00:00',
      //   },
      //   {
      //     value: '20:00:00',
      //     label: '20:00:00',
      //   },
      //   {
      //     value: '21:00:00',
      //     label: '21:00:00',
      //   },
      //   {
      //     value: '22:00:00',
      //     label: '22:00:00',
      //   },
      //   {
      //     value: '23:00:00',
      //     label: '23:00:00',
      //   }
      // ]

    }
  },


  methods: {



    async queryByDate(){

      if(this.location==''){
        this.$message({
          showClose: true,
          message: '请选择查询城市',
          type: 'error'
        });
      }else if(this.select_data==''){
        this.$message({
          showClose: true,
          message: '请选择查询日期',
          type: 'error'
        });
      }
      else {
        const _this = this
        await
            axios({
              method: "post",
              url: 'http://localhost:8181/weather/findWeatherByDate',
              data: {
                location:this.location,
                date:this.select_data
              }
            }).then(function (resp){

              if(resp.data==''){
                this.$message({
                  showClose: true,
                  message: '获取数据失败',
                  type: 'error'
                });
              }

              console.log(resp)
              _this.atemp=resp.data.atemp
              _this.humidity=resp.data.humidity
              _this.holiday=resp.data.holiday
              _this.workingday=resp.data.workingday
              _this.windspeed=resp.data.windspeed
              _this.temp=resp.data.temp
              _this.season=resp.data.season
              _this.weather=resp.data.weather
              // _this.tableData =resp.data


            })

      }
    },

    async queryByhour(){
      if(this.location==''){
        this.$message({
          showClose: true,
          message: '请选择查询城市',
          type: 'error'
        });
      }else if(this.timedata==''){
        this.$message({
          showClose: true,
          message: '请选择时间',
          type: 'error'
        });
      }else {
        const _this = this
        await
            axios({
              method: "post",
              url: 'http://localhost:8181/weather/findWeather',
              data: {
                location:this.location,
                datetime:this.timedata
              }
            }).then(function (resp){

              if(resp.data==''){
                this.$message({
                  showClose: true,
                  message: '获取数据失败',
                  type: 'error'
                });
              }


              console.log(resp)
              _this.atemp=resp.data.atemp
              _this.humidity=resp.data.humidity
              _this.holiday=resp.data.holiday
              _this.workingday=resp.data.workingday
              _this.windspeed=resp.data.windspeed
              _this.temp=resp.data.temp
              _this.season=resp.data.season
              _this.weather=resp.data.weather
              _this.tableData =resp.data


            })

      }

    }


  }

}
</script>

<style scoped>

.d1{
  border: 10px solid var(--el-border-color);
  margin-top:10px;
  margin-bottom:10px;
  font-family: 楷体;
  font-size:13px;
}
.d2{

}


.r-bu{
  margin-left: 20px;
}
.e_button{

  color: #0a0a0a;
  width: 70px;
  background-color: #80D0C7;;

}
/*.m2{*/
/*  margin-left: 100px;*/
/*  margin-right: 100px;*/
/*  margin-top: 20px;*/
/*  border: 10px solid var(--el-border-color);*/
/*  margin-bottom:10px;*/
/*  font-family: 楷体;*/
/*  font-size:15px;*/
/*  text-align: center;*/

/*}*/
.m2{
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 10px;
  /*border: 10px solid var(--el-border-color);*/
  margin-bottom:10px;
  font-family: 黑体;
  font-size:17px;
  text-align: center;
  background: rgba(0,0,0,0.1);
  border-radius:35px;
  height: 185px;
}

.pic{
  width: 100%;
  height: 200px;
  border: 7px solid var(--el-border-color);
  margin-top: 2px;
  border-radius: 30px;
  /*margin-left: 40px;*/
}
</style>