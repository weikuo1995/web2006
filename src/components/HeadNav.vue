<template>
  <div>
    <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">主页</el-menu-item>
      <el-menu-item index="/cart">购物车</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="/about">{{ username }}</el-menu-item>
      <el-menu-item v-if="!username" index="/login" class="login"
        >登录</el-menu-item
      >
      <template v-else>
        <el-menu-item index="/login" class="login">{{ username }}</el-menu-item>
        <el-button class="login" @click="loginOutHandle">退出登录</el-button>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex1: "1",
    };
  },
  computed: {
    ...mapState("loginModule", {
      username: (state) => state.userInfo.username,
    }),
    ...mapMutations("loginModule", ["setLoginOut"]),
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //退出登录
    loginOutHandle() {
      this.setLoginOut();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login {
  float: right !important;
}
</style>