<template>
  <div class="home">
    <el-container>
      <el-header height="100px">
        <h2 style="text-align: left; color: aliceblue; padding: 25px 0px">人员管理系统</h2>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo">
                <el-menu-item index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>人员管理</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main>
          <div>
            <AddUser></AddUser>
          </div>
        </el-main>
      </el-container>

      <el-footer height="100px"></el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AddUser from "@/views/user/AddUser";

export default {
  name: 'Home',
  components: {
    AddUser
  }
}
</script>

<style scoped>
  .el-header{
    background-color: dodgerblue;
    /*background-image: url("../assets/home/header.jpg")*/
  }

  .h2{
    text-align: left;
  }
</style>
