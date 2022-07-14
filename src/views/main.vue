<template>

  <div class="app">
    <el-container class="my_container">
      <el-header class="my_header">
        <div class="my_sysName">
          共享单车使用数量预测系统
          <i :class="isopen" @click="isOpen"></i>
        </div>
        <div class="my_header_right">

          <span >
            <el-button class="e_button" @click="exit">退出登录</el-button>
          </span>
        </div>
      </el-header>

<!--      v-for="(item2,index2)in item.children" :index="item2.path"-->
<!--      v-for="(item,index) in $router.options.routes" ;index="index+''"-->

      <el-container>
        <el-aside class="my_aside" width="150px">



      <el-scrollbar>


        <el-menu   :default-openeds="['0']" :default-active="this.$router.path" router class="'el-menu">
          <el-menu-item index="introduce" class="eb">
            <i class="el-icon-setting"></i>
            <span slot="title">项目介绍</span>
          </el-menu-item>


<!--          <el-menu-item index="history">-->
<!--            <i class="el-icon-setting"></i>-->
<!--            <span slot="title">历史数据</span>-->
<!--          </el-menu-item>-->
          <el-sub-menu class="eb">
            <template #title>
              <el-icon><icon-menu /></el-icon>历史数据
            </template>
            <el-menu-item index="history" class="'ec">会员&&租车</el-menu-item >
            <el-menu-item index="history2" class="'ec">天气指数</el-menu-item>
          </el-sub-menu>


          <el-sub-menu class="eb">
            <template #title>
              <el-icon><icon-menu /></el-icon>天气数据
            </template>
              <el-menu-item index="weather" class="'ec">未来24小时</el-menu-item>
              <el-menu-item index="weather2" class="'ec">精确查询</el-menu-item>
            <el-menu-item index="weather3" class="'ec">未来15天</el-menu-item>
          </el-sub-menu>

<!--          <el-menu-item index="/weather">-->
<!--            <i class="el-icon-setting"></i>-->
<!--            <span slot="title">天气数据</span>-->
<!--          </el-menu-item>-->

          <el-menu-item index="/predict" class="eb">
            <i class="el-icon-setting"></i>
            <span slot="title">模型预测</span>
          </el-menu-item>
        </el-menu>

      </el-scrollbar>

    </el-aside>


        <el-main class="my_main">

          <router-view>
          </router-view>


      </el-main>


    </el-container>
  </el-container>
    </div>

</template>

<script  >
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
//


export default {

  setup(){
    const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}

  },

  data(){
    return{
      tableData: null,


    }
  },

  methods:{
    exit(){
      this.$router.push({ path:'/'  })
    }

  }
}


</script>

<style scoped>

/*.note{*/
/*  background-image:url("../assets/背景1.jpg");*/
/*  height:100%;*/
/*  weight:100%;*/
/*}*/



.app{
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.my_container{
  height: 100%;
}
.my_header{
  background:#303133;
  color:#fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:35px;
  /*background-image: url('../assets/x3.jpg');*/
}
.my_sysName{
  font-size: 20px;
  font-weight: 500;
}
.my_header_right{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
}
.my_aside{
  /*background: #545c64;*/
  background-image: url('../assets/x3.jpg');
  transition: width .3s;
  border: 7px solid var(--el-border-color);
  border-radius: 5px;
  /*width:200px;*/
}
.my_main{
  background: #E4E7ED;
  background-image: url('../assets/x5.jpg');
}
.e_button{

  color: #0a0a0a;
  width: 100px;
  background-color: #80D0C7;

}


.eb{
  background-color: #E0F1F2;

}
.ec{
  background-color: #E0EAEA;
}
/*/deep/.el-menu .el-menu-item:hover{*/
/*  outline: 0 !important;*/
/*  color: #2E95FB !important;*/
/*  background: linear-gradient(270deg, #F2F7FC 0%, #FEFEFE 100%)!important;*/
/*}*/
/*/deep/.el-menu .el-menu-item.is-active {*/
/*  color: #2E95FB !important;*/
/*  background: linear-gradient(270deg, #F2F7FC 0%, #FEFEFE 100%)!important;*/
/*}*/
/*.el-submenu /deep/.el-submenu__title:hover {*/
/*  color: #2E95FB !important;*/
/*  background: linear-gradient(270deg, #F2F7FC 0%, #FEFEFE 100%)!important;*/
/*}*/

</style>
