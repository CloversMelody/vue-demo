<template>
  <el-form :model="userInfo">
    <el-form-item label="账号名">
      <el-input v-model="userInfo.accountNo"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="userInfo.accountPwd"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="userInfo.userName"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="userInfo.userPhone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addUser">添加用户</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Axios from "axios";

export default {
  name: "addUser",
  data() {
    return {
      userInfo: {
        accountNo:'',
        accountPwd:'',
        userName:'',
        userPhone:''
      },
    }
  },
  methods: {
    addUser() {
      Axios.post('/mcs/user/addUser', this.userInfo).then(res => {
        console.log(res)
      })
      this.$message.success("添加用户信息成功！")
    }
  }
}
</script>

<style scoped>

</style>