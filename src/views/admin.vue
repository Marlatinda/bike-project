<template>

  <div class="app">
    <el-container class="container">

      <el-header class="my_header">
        <div class="my_sysName">
          共享单车使用数量预测系统               (用户管理)
          <i :class="isopen" @click="isOpen"></i>
        </div>
        <div class="my_header_right">

          <span >
            <el-button class="e_button" @click="exit">退出登录</el-button>
          </span>
        </div>
      </el-header>

        <el-main class="my_main">

          <el-table :data="tableData" style="width: 100%">

            <el-table-column prop= userid label="ID" width="180" />
            <el-table-column prop= username label="NAME" width="180" />
            <el-table-column prop= password label="PASSWORD" width="180" />
            <el-table-column prop= email label="EMAIL" width="180" />
            <el-table-column prop= type label="TYPE" width="180" />


            <el-table-column label="Operations">
              <template #default="scope">
                <el-button size="small" class="my_button"   @click="show_change(scope.row.userid,scope.row.username,
                scope.row.userpassword,scope.row.useremail)"
                >修改</el-button>



                <el-dialog v-model="dialogFormVisible" title="修改用户信息" append-to-body>
                  <el-form :model="tableData">
                    <div>
                      信息列表：
                    </div>
                    <el-form-item label="USER_ID" :label-width="formLabelWidth" >
                      <el-input v-model="change_id" autocomplete="off" disabled />
                    </el-form-item>
                    <el-form-item label="USER_NAME" :label-width="formLabelWidth">
                      <el-input v-model="change_name" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="USER_PASSWORD" :label-width="formLabelWidth">
                      <el-input v-model="change_password" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="USER_EMAIL" :label-width="formLabelWidth">
                      <el-input v-model="change_email" autocomplete="off" />
                    </el-form-item>

                  </el-form>
                  <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消修改</el-button>
        <el-button type="primary" @click="change_user()"
        >确定修改</el-button></span>
                  </template>
                </el-dialog>



                <el-button  class="my_button"
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.row.userid)"
                >删除</el-button
                >
              </template>
            </el-table-column>


          </el-table>
      </el-main>
    </el-container>
  </div>


</template>






<script >
import { getCurrentInstance } from "vue";
import { reactive, ref } from 'vue';
import axios from "axios";


export default {
  setup() {
    const dialogFormVisible = ref(false);
    const formLabelWidth = '140px';

    return {
      dialogFormVisible,
      formLabelWidth,
    }
  },
  data(){
    return{
      tableData: [{
        userid: "",
        username: "",
        email:"",
        type:"",
        password:""
      }],

      change_id:"",
      change_name:"",
      change_password:"",
      change_email:"",

    }
  },
  methods:{

//删除用户的方法
    handleDelete(userid){
      this.$confirm('此操作将删除用户, 是否继续?', '提示:删除用户 '+userid, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        // 在这里写逻辑，userid，直接调用就行
        axios({
          method: "post",
          url: 'http://localhost:8181/user/deleteAccount',
          data: {
            userid: userid
          }
        }).then(function (resp){
          console.log(resp)
        })
        this.$message({
          type: 'success',
          message: userid+'  删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    accountMessage: function () {
      return ref(getCurrentInstance()?.appContext.config.globalProperties.$account)
    },

    exit(){
      this.$router.push({ path:'/'  })
    },

    //显示编辑对话框
    show_change(id,name,password,email){
      this.dialogFormVisible=true;
      this.change_id=id;
      this.change_name=name;
      this.change_password=password;
      this.change_email=email;
    },

    //修改用户密码
    change_user(){
      let temp
      axios({
        method: "post",
        url: 'http://localhost:8181/user/modifyAccount',
        data: {
          userid: this.change_id,
          username: this.change_name,
          password: this.change_password,
          email: this.change_email,
        }
      }).then(function (resp){
        temp = resp.data
        console.log(resp)
      })
      if(temp === "success"){
        this.dialogFormVisible=false;
        this.$message({
          type: 'success',
          message: this.change_id+'  修改成功!'
        });
      }else {
        this.dialogFormVisible=false;
        this.$message({
          type: 'false',
          message: this.change_id+'  修改失败!'
        });
      }

    }
  }
  ,

  created() {
    //显示所有数据
    const _this = this
    axios({
      method: "get",
      url: 'http://localhost:8181/user/findAll',
    }).then(function (resp){
      _this.tableData = resp.data
      console.log(resp)
    })
  }
}
</script>



<style scoped>
.app{
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
.container{
  height: 100%;
  margin: 0;
  padding: 0;
}

.my_header{
  background:#303133;
  color:#fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:0px;
  margin-left: 0px;
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

.my_main{
  margin-top:0px;
  margin-left: 0px;
  background: #E4E7ED;
  height: 100%;
  weight: 100%;

}

.my_button{

  color: #fff;
  width: 50px;
  background-color: #80D0C7;
  justify-content: center;

}
.e_button{

  color: #0a0a0a;
  width: 100px;
  background-color: #80D0C7;

}

</style>