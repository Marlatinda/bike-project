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

      <el-button  class="bu" @click="week">
        每周每天
      </el-button>
      <el-button  class="bu" @click="weather1">
        不同天气
      </el-button>
      <el-button  class="bu" @click="weather2">
        不同天气指数
      </el-button>

    </div>




  </div>



  <div class="pic">

    <div id='showorders' style='width:790px; height:380px'></div>

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
  data(){

    return {

      select_item:"",

      x_data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      y_data: [150, 230, 224, 218, 135, 147, 260],

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
    ]
    }
  },
  methods:{
    register_num(){

      if(this.select_item=='all'){
        this.x_data=[1,2,3,4,5,6,8];


        this.showorders();
      }else if(this.select_item=='month'){
        this.x_data=[1,2,3,4,5,6,9];


        this.showorders();
      }else if(this.select_item=='season'){
        this.x_data=[1,2,3,4,5,6,10];


        this.showorders();
      }

    },

    //每周每天
    week(){
      let temp = ""
          axios({
            method: "get",
            url: 'http://localhost:8181/data/findCountByWeekday',
          }).then(function (resp){
            temp = resp.data
            console.log(resp)
          })


      this.x_data=[1,2,3,4,5,6,7];


      this.showorders();
    },
    //不同天气
    async weather1(){

      this.x_data=[8,2,3,4,5,6,7];


      this.showorders();
    },
    //不同天气指数
    async weather2(){
      this.x_data=[9,2,3,4,5,6,7];



      this.showorders();
    },



    async showorders(){
      // 基于准备好的dom，初始化echarts实例
      var chartDom = document.getElementById('showorders');
      var myChart = echarts.init(chartDom);
      // 指定图表的配置项和数据
      var option;

      option = {
    // x轴
      xAxis: {
        type: 'category',
            data: this.x_data
      },
    // y 轴
      yAxis: {
        type: 'value'
      },
    // 类型
      series: [
        {
          data:this.y_data,
          type: 'bar'
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
.bu{

  color: #0a0a0a;
  width: 150px;
  background-color: #80D0C7;;

}

.pic{
  width: 790px;
  height: 380px;
  border: 10px solid var(--el-border-color);
  margin-top: 10px;
  margin-left: 40px;
}
#showorders{
  background-color: white;
}


.r-bu{
  width:100px;
  margin-left: 5px;
  margin-right:80px;
}
</style>