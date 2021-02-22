<template>
  <div class="home">
    <el-container>
      <el-header>
        <div>电商后台管理系统</div>
        <el-button type="info" @click="back">退出</el-button>
      </el-header>
      <el-container style="height: 500px">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <h5>|||</h5>
          <el-menu
            text-color="#fff"
            active-text-color="#409eff"
            background-color="#545c64"
          >
            <el-submenu
              :index="item.id + ''"
              v-for="(item, index) in list"
              :key="index"
            >
              <template slot="title"
                ><i class="el-icon-user-solid"></i>{{ item.authName }}</template
              >
              <el-menu-item
                :index="it.id + ''"
                v-for="(it, i) in item.children"
                :key="i"
                :route="{ path: '/home/' + it.path }"
                >{{ it.authName }}</el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { menus } from "../http/http";
export default {
  props: {},
  data() {
    return {
      list: "",
    };
  },
  mounted() {
    menus()
      .then((res) => {
        console.log(res);
        this.list = res;
      })
      .catch((err) => {
        console.log("err");
      });
  },
  methods: {
    back() {
      this.$confirm("确定要退出吗, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      });
    },
  },
  components: {},
};
</script>

<style  lang="less">
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
.el-header,
.el-footer {
  background-color: #373d41;
  color: #ffffff;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;

  h5 {
    line-height: 25px;
    text-align: center;
    background-color: #4a5064;
    color: white;
    // font-size: 40px  !important;
  }
}
.el-menu {
  background-color: #333744;
  height: 100%;
}
.el-submenu {
  .el-submenu__title {
    color: #ffffff;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
