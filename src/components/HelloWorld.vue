<template>
  <div class="hello">
    <el-row>
      <el-button type="primary" @click="gotoAbout">关于我们</el-button>
    </el-row>

    <el-row>
      <h1>次按钮已被点击 {{ num }} 次</h1>
    </el-row>

    <el-row>
      <el-button type="primary" icon="el-icon-edit">用户管理</el-button>
    </el-row>
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      num:  0,
    }
  },
  methods: {
    gotoAbout() {
      // this.$router.push("/about")
      const result = Axios.get('/mcs/hello').then((res) => {
        this.num = res.data
      })
      console.log(result)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
