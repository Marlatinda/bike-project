<template>

  <div>
    <h1>
      基于天气分析预测使用数量
    </h1>
<!--    <el-switch-->
<!--        v-model="value"-->
<!--        size="large"-->
<!--        active-text="预测当日"-->
<!--        inactive-text="预测未来日期"-->
<!--        @change="changeSwitch()"-->
<!--    />-->

  </div>

<div class="container">

  <div class="x1">

    <span class="demonstration">城市</span>
    <el-select v-model="city" class="m-2" placeholder="Select">

      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      />
    </el-select>

    <span >
            <el-button class="e_button" @click="init" >初始化</el-button>
          </span>

    <!--      <span class="demonstration">日期</span>-->
    <!--      <el-date-picker-->

    <!--          :picker-options="expireTimeOPtime"-->
    <!--          v-model="select_data"-->
    <!--          format="YYYY/MM/DD"-->
    <!--          value-format="YYYY/MM/DD"-->
    <!--          type="date"/>-->
    <span class="demonstration">时间</span>
    <el-select v-model="timedata" class="m-2" placeholder="Select" >

      <el-option
          v-for="item in options2"
          :key="item"
          :label="item"
          :value="item"
      />
    </el-select>



    <!--    <span >-->
    <!--            <el-button class="e_button" @click="getInfo" >获取数据</el-button>-->
    <!--          </span>-->
    <span >
            <el-button class="e_button" @click="predict" >预测</el-button>
          </span>
    <span >
            <el-button class="e_button" @click="consult" >获取建议</el-button>
          </span>


  </div>

  <div class="output">
    <span class="p">预测结果： </span>
    <el-input  class="output-1" v-model="result" disabled />

  </div>

  <div class="consult">
    <div style="height:30px;"></div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{result2}}</div>

</div>




<!--<div style='width:100%; height:70px;'></div>-->

<!--  <div class="x1">-->

<!--    <span class="demonstration">城市</span>-->
<!--    <el-select v-model="city2" class="m-2" placeholder="Select">-->

<!--      <el-option-->
<!--          v-for="item in options"-->
<!--          :key="item.value"-->
<!--          :label="item.label"-->
<!--          :value="item.value"-->
<!--      />-->
<!--    </el-select>-->

<!--    &lt;!&ndash;      <span class="demonstration">日期</span>&ndash;&gt;-->
<!--    &lt;!&ndash;      <el-date-picker&ndash;&gt;-->

<!--    &lt;!&ndash;          :picker-options="expireTimeOPtime"&ndash;&gt;-->
<!--    &lt;!&ndash;          v-model="select_data"&ndash;&gt;-->
<!--    &lt;!&ndash;          format="YYYY/MM/DD"&ndash;&gt;-->
<!--    &lt;!&ndash;          value-format="YYYY/MM/DD"&ndash;&gt;-->
<!--    &lt;!&ndash;          type="date"/>&ndash;&gt;-->
<!--    <span class="demonstration">时间</span>-->
<!--    <el-select v-model="timedata2" class="m-2" placeholder="Select" >-->

<!--      <el-option-->
<!--          v-for="item in options2"-->
<!--          :key="item"-->
<!--          :label="item"-->
<!--          :value="item"-->
<!--      />-->
<!--    </el-select>-->




<!--  </div>-->

<!--  <div class="output">-->
<!--    <span class="p">反馈建议： </span>-->
<!--    <el-input  class="output-1" v-model="result2" disabled />-->

<!--  </div>-->


</template>

<script>
import { ref } from 'vue'
import axios from "axios";



export default {
  name: "predict",

  created() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    let hour= date.getHours()

    let str1=year+'/0'+month+'/'+day
    let x=day+1
    let str2=year+'/0'+month+'/'+x


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
      for(var k=0;k<hour;k++){
        this.options2[i]=str2+' '+k+':00:00'
        i++
      }
    }




  },

  setup(){

  },

  data() {
    return {
      value: true,
      city:'',
      timedata:'',
      city2:'',
      timedata2:'',
      result:'',
      result2:'',

      options2:[],

      flag1:false,
      flag2:false,
      flag3:false,



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

    async predict(){

      let temp = ""
      const _this = this

      if(_this.city==''){
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
      }else if(_this.city=='beijing'&&_this.flag1==false){
        this.$message({
          showClose: true,
          message: '请先初始化',
          type: 'error'
        });
      }else if(_this.city=='shanghai'&&_this.flag2==false){
        this.$message({
          showClose: true,
          message: '请先初始化',
          type: 'error'
        });
      }else if(_this.city=='xian'&&_this.flag3==false){
        this.$message({
          showClose: true,
          message: '请先初始化',
          type: 'error'
        });
      }else{

        await
            axios({
              method: "post",
              url: 'http://localhost:8181/prediction/getPrediction',
              data: {
                // datetime: '2022/07/11 16:00:00',
                datetime:_this.timedata,
                location: _this.city,
              }
            }).then(function (resp){
              temp = resp.data



              console.log(resp)
              _this.result=Math.floor(temp.prediction)

              if(_this.result!=''){
                this.$message({
                  showClose: true,
                  message: '获取数据成功',
                  type: 'success'
                });
              }else{
                this.$message({
                  showClose: true,
                  message: '获取数据失败',
                  type: 'error'
                });
              }

            })
      }




    },
    async init(){

      let temp = ""
      const _this = this

      if(_this.city==''){
        this.$message({
          showClose: true,
          message: '请选择查询城市',
          type: 'error'
        });
      }else{

        await
            axios({
              method: "post",
              url: 'http://localhost:8181/prediction/updateByLocation',
              data: {
                // datetime: '2022/07/11 16:00:00',
                // datetime:_this.timedata,
                location: _this.city,
              }
            }).then(function (resp){
              temp = resp.data

              console.log(resp)

              // if(temp==false){
              //   this.$message({
              //     showClose: true,
              //     message: '初始化失败',
              //     type: 'error'
              //   });
              // }else{
              //
              //   if(_this.city=='beijing')
              //     _this.flag1==true
              //   if(_this.city=='shanghai')
              //     _this.flag1==true
              //   if(_this.city=='xian')
              //     _this.flag1==true
              //
              //
              //
              //   this.$message({
              //     showClose: true,
              //     message: '初始化成功',
              //     type: 'success'
              //   });
              // }

            })

    }
    },

    async consult(){
      const _this = this
      let temp=''
      if(_this.city==''){
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
      }else{
        await
            axios({
              method: "post",
              url: 'http://localhost:8181/prediction/getAdvice',
              data: {
                // datetime: '2022/07/11 16:00:00',
                datetime:_this.timedata,
                location: _this.city,
              }
            }).then(function (resp) {
              console.log(resp)
              temp = resp.data
              let str=''
              if(temp.fifth!='null'){
                str=str+temp.fifth
                str=str+'\n'
              }if(temp.first!='null'){
                str=str+temp.first
                str=str+'\n'
              }if(temp.forth!='null'){
                str=str+temp.forth
                str=str+'\n'
              }if(temp.second!='null'){
                str=str+temp.second
                str=str+'\n'
              }if(temp.sixth!='null'){
                str=str+temp.sixth
                str=str+'\n'
              }if(temp.third!='null'){
                str=str+temp.third
                str=str+'\n'
              }

             _this.result2=str
              // alert(_this.result2)
            })


      }
    }

  }
}
</script>

<style scoped>

.x1{
  border: 7px solid var(--el-border-color);

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

  color: black;
  font-size: 17px;
  margin-bottom: 5px;

  margin-left: 15px;
  margin-right: 15px;
}

.e_button{

  color: #0a0a0a;
  width: 90px;
  background-color: #80D0C7;;
  margin-left: 30px;
  margin-bottom: 2px;

}
.consult{
  width:80%;
  height:150px;
  border-radius: 15px;
  background: rgba(0,0,0,0.1);
  margin-left:10%;
  margin-right:10%;
  justify-content: center;
  margin-top:20px;
}
.container{
  justify-content: center;
}
</style>