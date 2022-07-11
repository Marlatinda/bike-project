<template>
  <div>
    <h1>1111</h1>
    <div  class="c">

      <div id='showorders' style='width:300px; height:500px'></div>
      <div id='showorders2' style='width:300px; height:500px'></div>
      <div id='showorders3' style='width:300px; height:500px'></div>

    </div>


  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as echarts from 'echarts';
onMounted(
    () => {
      init()
    }
)
export default {
  data() {

    return {
      x_data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      y_data: [150, 230, 224, 218, 135, 147, 260],
    }

  },
  methods: {
    showorders() {
      // 基于准备好的dom，初始化echarts实例
      var chartDom = document.getElementById('showorders');
      var myChart = echarts.init(chartDom);
      // 指定图表的配置项和数据
      var option;
////////////////////
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
            data: this.y_data,
            type: 'bar'
            //type: 'line'
          }
        ]
      };
      option && myChart.setOption(option);
    },

////////////////////



    showorders2() {
      // 基于准备好的dom，初始化echarts实例
      var chartDom = document.getElementById('showorders2');
      var myChart = echarts.init(chartDom);
      // 指定图表的配置项和数据
      var option;
////////////////////
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
            data: this.y_data,
            // type: 'bar'
            type: 'line'
          }
        ]
      };
      option && myChart.setOption(option);
    },

    showorders3() {
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          position: 'top'
        },
        grid: {
          height: '50%',
          top: '10%'
        },
        xAxis: {
          type: 'category',
          data: [1,2],
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: ['w','t'],
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%'
        },
        series: [
          {
            name: 'Punch Card',
            type: 'heatmap',
            data: [[0,0,7],[0,0,6]],
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      option && myChart.setOption(option);
    }

  },
  mounted() {
    this.showorders()
    this.showorders2()
    this.showorders3()
  },

}
</script>

<style>
#showorders{
  background-color: white;
}
#showorders2{
  background-color: white;
}
#showorders3{
  background-color: white;
}

.c{
  position: relative;
}
</style>