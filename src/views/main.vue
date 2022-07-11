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
        <el-aside class="my_aside" width="200px">



      <el-scrollbar>


        <el-menu   :default-openeds="['0']" :default-active="this.$router.path" router>
          <el-menu-item index="introduce">
            <i class="el-icon-setting"></i>
            <span slot="title">项目介绍</span>
          </el-menu-item>


          <el-menu-item index="history">
            <i class="el-icon-setting"></i>
            <span slot="title">数据展示</span>
          </el-menu-item>

<!--          <el-sub-menu >-->
<!--            <template #title>-->
<!--              <el-icon><message /></el-icon>历史数据展示-->
<!--            </template>-->
<!--              <el-menu-item index="/predict">Option 1</el-menu-item>-->
<!--              <el-menu-item index="1-2">Option 2</el-menu-item>-->
<!--              <el-menu-item index="1-3">Option 3</el-menu-item>-->

<!--          </el-sub-menu>-->

          <el-sub-menu >
            <template #title>
              <el-icon><icon-menu /></el-icon>天气数据展示
            </template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="/predict">
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
  background: #545c64;
  transition: width .3s;
}
.my_main{
  background: #E4E7ED;
}
.e_button{

  color: #0a0a0a;
  width: 100px;
  background-color: #80D0C7;;

}

/*.layout-container-demo {*/
/*  height: 100%;*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/
/*.layout-container-demo .el-header {*/
/*  position: relative;*/
/*  background-color: var(--el-color-primary-light-7);*/
/*  color: var(--el-text-color-primary);*/

/*}*/
/*.layout-container-demo .el-aside {*/
/*  color: var(--el-text-color-primary);*/
/*  background: var(--el-color-primary-light-8);*/
/*}*/
/*.layout-container-demo .el-menu {*/
/*  border-right: none;*/
/*}*/
/*.layout-container-demo .el-main {*/
/*  padding: 0;*/
/*}*/
/*.layout-container-demo .toolbar {*/
/*  display: inline-flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  height: 100%;*/
/*  right: 20px;*/
/*}*/
</style>
