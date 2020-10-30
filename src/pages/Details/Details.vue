<template>
  <div id="details">
    <div class="box">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">基本信息维护</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">本班学生信息管理</el-menu-item>
            <el-menu-item index="1-2">学生信息管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">健康管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">个人健康上报</el-menu-item>
            <el-menu-item index="1-2">班级健康数据</el-menu-item>
            <el-menu-item index="1-3">员工健康数据</el-menu-item>
            <el-menu-item index="1-4">因病缺课数据</el-menu-item>
            <el-menu-item index="1-5">复课数据</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">数据驾驶舱</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">健康数据驾驶舱</el-menu-item>
            <el-menu-item index="1-2">因病缺课驾驶舱</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">新生登记</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">新生登记</el-menu-item>
            <el-menu-item index="1-2">五年一户</el-menu-item>
            <el-menu-item index="1-3">新生查询管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">基础数据管理</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">教师查询管理</el-menu-item>
            <el-menu-item index="1-2">学生查询管理</el-menu-item>
            <el-menu-item index="1-3">角色管理</el-menu-item>
            <el-menu-item index="1-4">权限管理</el-menu-item>
            <el-menu-item index="1-5">学科管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">动态数据接口</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-menu"></i>
          <span slot="title">视频播放</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-menu"></i>
          <span slot="title">签到管理</span>
        </el-menu-item>
      </el-menu>
      <div class="right-title">
        <button class="btn-kaiguan el-icon-s-operation" @click="isCollapse = !isCollapse"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.box {
  background: #eeeeee;
  width: 100vw;
  height: 100vh;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}
.box {
  display: flex;
  flex-direction: row;
}
.right-title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
  box-shadow: 2px 2px 2px #dddddd;
  background: #ffffff;
}
.btn-kaiguan {
  width: 50px;
  height: 50px;
  background: 0;
  border: 0;
  outline: none;
  font-size: 22px;
  color: #888888;
}
</style>