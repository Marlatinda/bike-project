<template>
  <div>
    <h1>
      历史数据展示
    </h1>

    <div class="b">

      <el-button  class="bu"  @click="register_num">
        注册人数
      </el-button>
        <el-select v-model="select_item" class="r-bu" placeholder="Select">

          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>


      <el-button  class="bu"  @click="rent">
        租车人数
      </el-button>
      <el-select v-model="select_item2" class="r-bu" placeholder="Select">

        <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

<!--      <el-button  class="bu" @click="week">-->
<!--        每周每天-->
<!--      </el-button>-->
<!--      <el-button  class="bu" @click="weather1">-->
<!--        不同天气-->
<!--      </el-button>-->


    </div>




  </div>



  <div class="pic">

    <div id='showorders' style='width:100%; height:100%'></div>

  </div>



</template>


<script>
import { ref, onMounted } from "vue";
import * as echarts from 'echarts';
import axios from "axios";
onMounted(
    () => {
      init()
    }
)
export default {
  // created(){
  //   const _this = this
  //
  //   // axios({
  //   //   method: "get",
  //   //   url: 'http://localhost:8181/data/findCountByWeatherIndex',
  //   // }).then(function (resp){
  //   //   console.log(resp)
  //   //   _this.tableData = resp.data
  //   // })
  //   axios({
  //     method: "post",
  //     url: 'http://localhost:8181/data/findCountByWeatherIndexOnPage',
  //     data: {
  //       pageNow: '1',
  //       pageSize: '10',
  //     }
  //   }).then(function (resp){
  //     _this.tableData = resp.data
  //     console.log(resp)
  //     console.log(_this.tableData)
  //   })
  //
  // },

  data(){

    return {
      // totalItem:731,
      // tableData: [{
      //   airTemperature: "",
      //   count: "",
      //   humidity:"",
      //   temperature:"",
      //   windSpeed:""
      // }],

      select_item:"",
      select_item2:"",

      x_data: [],
      y_data: [],

        options : [
      {
        value: 'all',
        label: '总览',
      },
      {
        value: 'month',
        label: '月份查询',
      },
      {
        value: 'season',
        label: '季节查询',
      }
    ],
      options2 : [
        {
          value: 'week',
          label: '每周每天',
        },
        {
          value: 'weather',
          label: '不同天气',
        }
      ]
    }
  },
  methods:{

    // created() {
    //   const _this = this
    //   axios({
    //     method: "get",
    //     url: 'http://localhost:8181/data/findCountByWeatherIndexOnPage',
    //     data: {
    //       pageNow: '1',
    //       pageSize: '10',
    //     }
    //   }).then(function (resp){
    //     _this.tableData = resp.data
    //     console.log(resp)
    //     console.log(_this.tableData)
    //   })
    // },

    // async page(currentPage){
    //   const _this = this
    //   await
    //   axios({
    //     method: "post",
    //     url: 'http://localhost:8181/data/findCountByWeatherIndexOnPage',
    //     data: {
    //       pageNow: currentPage,
    //       pageSize: '10',
    //     }
    //   }).then(function (resp){
    //     _this.tableData = resp.data
    //     console.log(resp)
    //   })
    // },

    async register_num(){
      if(this.select_item==''){
        this.$message({
          showClose: true,
          message: '请选择查询条件',
          type: 'error'
        });
      }else if(this.select_item=='all'){

        let temp = ""
        const _this = this

        this.x_data=[]
        this.y_data=[]

        await
            axios({
              method: "get",
              url: 'http://localhost:8181/data/findVip',
            }).then(function (resp){
              temp = resp.data
              console.log(resp)

              _this.x_data[0]='casual'
              _this.x_data[1]='registered'

              _this.y_data[0]=temp[0]["sum(casual)"]
              _this.y_data[1]=temp[0]["sum(registered)"]


            })

        console.log(this.x_data,this.y_data)



        this.showorders();
      }else if(this.select_item=='month'){
        let temp = ""
        const _this = this

        this.x_data=[]
        this.y_data=[]

        await
            axios({
              method: "get",
              url: 'http://localhost:8181/data/findVipByMonth',
            }).then(function (resp){
              temp = resp.data
              console.log(resp)

              for(var i = 0; i < temp.length; i++){

                var x=i+1
                _this.x_data.push(x+' c')
                _this.x_data.push(x+' r')

                _this.y_data.push(temp[i]['sum(casual)'])
                _this.y_data.push(temp[i]['sum(registered)'])
              }


            })

        console.log(this.x_data,this.y_data)


        this.showorders();
      }else if(this.select_item=='season'){
        let temp = ""
        const _this = this

        this.x_data=[]
        this.y_data=[]

        await
            axios({
              method: "get",
              url: 'http://localhost:8181/data/findVipBySeason',
            }).then(function (resp){
              temp = resp.data
              console.log(resp)

              for(var i = 0; i < temp.length; i++){

                var x=i+1
                _this.x_data.push(x+' cas')
                _this.x_data.push(x+' reg')

                _this.y_data.push(temp[i]['sum(casual)'])
                _this.y_data.push(temp[i]['sum(registered)'])
              }


            })

        console.log(this.x_data,this.y_data)


        this.showorders();
      }

    },


    async rent(){
      if(this.select_item2==''){
        this.$message({
          showClose: true,
          message: '请选择查询条件',
          type: 'error'
        });
      }else if(this.select_item2=='week'){
        let temp = ""
        const _this = this

        this.x_data=[]
        this.y_data=[]

        await
            axios({
              method: "get",
              url: 'http://localhost:8181/data/findCountByWeekday',
            }).then(function (resp){
              temp = resp.data
              console.log(resp)

              for (var i = 0; i < temp.length; i++) {
                var x=temp[i]["weekday"]+1
                // _this.x_data[i]=temp[i]["weekday"]
                _this.x_data[i]='星期'+x
                _this.y_data[i]=temp[i]["sum(cnt)"]

              }


            })

        console.log(this.x_data,this.y_data)

        this.showorders();
      }else if(this.select_item2=='weather'){

        let temp = ""
        const _this = this

        this.x_data=[]
        this.y_data=[]

        await
            axios({
              method: "get",
              url: 'http://localhost:8181/data/findCountByWeather',
            }).then(function (resp){
              temp = resp.data
              console.log(resp)


              for (var i = 0; i < temp.length; i++) {
                // _this.x_data[i]=temp[i]["weather"]
                _this.y_data[i]=temp[i]["sum(cnt)"]

              }
              _this.x_data[0]='晴天'
              _this.x_data[1]='雨天'
              _this.x_data[2]='雪天'
            })

        console.log(this.x_data,this.y_data)
        this.showorders();

      }
    },

    //每周每天
    // async week(){
    //   let temp = ""
    //   const _this = this
    //
    //   this.x_data=[]
    //   this.y_data=[]
    //
    //   await
    //       axios({
    //         method: "get",
    //         url: 'http://localhost:8181/data/findCountByWeekday',
    //       }).then(function (resp){
    //         temp = resp.data
    //         console.log(resp)
    //
    //         for (var i = 0; i < temp.length; i++) {
    //           var x=temp[i]["weekday"]+1
    //           // _this.x_data[i]=temp[i]["weekday"]
    //           _this.x_data[i]='星期'+x
    //           _this.y_data[i]=temp[i]["sum(cnt)"]
    //
    //         }
    //
    //
    //       })
    //
    //
    //   // this.x_data[0]=temp[0]["weekday"]
    //   // this.y_data[0]=temp[0]["sum(ccnt)"]
    //
    //   // for (var i = 0; i < temp.length; i++) {
    //   //   this.x_data[i]=temp[i]["weekday"]
    //   //   this.y_data[i]=temp[i]["sum(cnt)"]
    //   //
    //   // }
    //   //
    //   // // t_x=[9,5]
    //   // console.log(t_x, t_y)
    //   // //
    //   // for (var i = 0; i < t_x.length; i++) {
    //   //   this.x_data[i]=t_x[i]
    //   // }
    //   // for (var i = 0; i < t_y.length; i++) {
    //   //   this.y_data.push(t_y[i])
    //   // }
    //
    //   console.log(this.x_data,this.y_data)
    //
    //   this.showorders();
    // },


    //不同天气
    // async weather1(){
    //
    //   let temp = ""
    //   const _this = this
    //
    //   this.x_data=[]
    //   this.y_data=[]
    //
    //   await
    //       axios({
    //         method: "get",
    //         url: 'http://localhost:8181/data/findCountByWeather',
    //       }).then(function (resp){
    //         temp = resp.data
    //         console.log(resp)
    //
    //
    //         for (var i = 0; i < temp.length; i++) {
    //           // _this.x_data[i]=temp[i]["weather"]
    //           _this.y_data[i]=temp[i]["sum(cnt)"]
    //
    //         }
    //         _this.x_data[0]='晴天'
    //         _this.x_data[1]='雨天'
    //         _this.x_data[2]='雪天'
    //       })
    //
    //   console.log(this.x_data,this.y_data)
    //   this.showorders();
    // },
    // //不同天气指数




    showorders(){
      // 基于准备好的dom，初始化echarts实例
      var chartDom = document.getElementById('showorders');
      var myChart = echarts.init(chartDom);
      // 指定图表的配置项和数据
      var option;

      option = {
    // x轴
      xAxis: {
        type: 'category',
        data: this.x_data,
        axisLine: {  //这是x轴文字颜色
          lineStyle: {
            color: "#fff",
          }
        }
      },
    // y 轴
      yAxis: {
        type: 'value',
        axisLine: {  //这是x轴文字颜色
          lineStyle: {
            color: "#fff",
          }
        }

      },
    // 类型
      series: [
        {
          data:this.y_data,
          type: 'bar',
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: 'black',
                  fontSize: 12
                }
              },
              // //这里是重点
              // color: function(params) {
              //   //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
              //   var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
              //   return colorList[params.dataIndex]
              // }
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FFDEE9'
              }, {
                offset: 1,
                color: '#97D9E1'
              }]),

            }
          },


        }
      ]
    };
      option && myChart.setOption(option);
    },

  },
  mounted() {
    this.showorders()
  },

}
</script>



<style scoped>


.d{
  margin-top:10px;
}


.bu{

  color: #0a0a0a;
  width: 150px;
  background-color: #80D0C7;;

}

.pic{
  width: 100%;
  height: 375px;
  border: 7px solid var(--el-border-color);
  margin-top: 2px;
  border-radius: 30px;
  /*margin-left: 40px;*/
}

#showorders{
  background:rgba(0,0,0,0.3);
  border-radius: 30px;
}

.r-bu{
  width:100px;
  margin-left: 5px;
  margin-right:80px;
}
</style>