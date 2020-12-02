<template>
  <div class="login">
    <el-card class="box-card">
      <el-form :model="userLogin" status-icon ref="userLogin">
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="userLogin.username"
            autocomplete
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="userLogin.password"
            autocomplete
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userLogin')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import api from "../api";
import jwt from 'jwt-decode'
export default {
  name: "Login",
  data() {
    return {
      userLogin: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations("loginModule", ["setLogin"]),
    //点击提交
    submitForm(formName) {
      api
        .getLogin({
          username: this.userLogin.username,
          password: this.userLogin.password,
        })
        .then((res) => {
          console.log(jwt(res.data));
          this.setLogin({//将从数据库取到的值传入到仓库中
            username: jwt(res.data).username,
            token: res.data
          });
        });

      //登录成功
      // this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login {
  width: 1200px;
  margin: 0 auto;
}
.box-card {
  width: 500px;
  margin-left: 350px;
  margin-top: 100px;
}
</style>