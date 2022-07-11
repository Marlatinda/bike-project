<template>

  <div>
    <h1>
      基于天气分析预测使用数量
    </h1>
    <el-switch
        v-model="value"
        size="large"
        active-text="预测当日"
        inactive-text="预测未来日期"
        @change="changeSwitch()"
    />

  </div>

  <el-divider ></el-divider>


  <div class="x1">

      <span class="demonstration">选择城市</span>
      <el-select v-model="city" class="m-2" placeholder="Select">

        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>

      <span class="demonstration">选择日期</span>
      <el-date-picker
          :disabled="value"
          :picker-options="expireTimeOPtime"
          v-model="select_data"
          type="date"/>

    <span >
            <el-button class="e_button" @click="predict" >预测</el-button>
          </span>


  </div>

  <div class="output">
    <span class="p">预测结果： </span>
    <el-input  class="output-1" v-model="result" disabled />

  </div>


</template>

<script>
import { ref } from 'vue'



export default {
  name: "predict",

  setup(){

  },

  data() {
    return {
      value: true,
      city:'',
      select_data:"",

      result:'null',



      expireTimeOPtime: {

        disabledDate(time) {
          const times = new Date(new Date().toLocaleDateString()).getTime() + 3 * 8.64e7 - 1
          return time.getTime() < Date.now() - 8.64e7 || time.getTime() > times// 如果没有后面的-8.64e7就是不可以选择今天的
        }
      },

      options : [
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]



    }
  },
  methods: {
    changeSwitch() {
      this.$forceUpdate()
      // if (this.value == 'true') {
      //
      // } else {
      //
      // }
    },

    predict(){
      alert(this.city+this.select_data)


    }

  }
}
</script>

<style scoped>

.x1{
  border: 10px solid var(--el-border-color);
}

.output{
  width:100%;
  height:50px;
  border: 2px solid var(--el-border-color);
}

.output-1{
  margin-top:10px;
  margin-bottom:10px;
  width:200px;
}

.p{

  margin-bottom:30px;
  font-size:20px;
  margin-top:20px;
}

.demonstration {

  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 5px;

  margin-left: 15px;
  margin-right: 15px;
}

.e_button{

  color: #0a0a0a;
  width: 100px;
  background-color: #80D0C7;;
  margin-left: 50px;
  margin-bottom: 2px;

}

</style>