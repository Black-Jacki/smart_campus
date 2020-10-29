<template>
  <div id="details">
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      data: [
        {
          label: "基本信息维护",
          children: [
            {
              label: "本班学生信息管理",
            },
            {
              label: "学生信息管理",
            },
          ],
        },
        {
          label: "健康管理",
          children: [
            {
              label: "本班学生信息管理",
            },
            {
              label: "学生信息管理",
            },
            {
              label: "学生信息管理",
            },
            {
              label: "学生信息管理",
            },
            {
              label: "学生信息管理",
            },
          ],
        },
        {
          label: "数据驾驶舱",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped>
</style>