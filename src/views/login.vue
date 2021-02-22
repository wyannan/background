<template>
  <div class="login">
    <div class="picture">
      <img src="../assets/image/logo.png" alt="" />
    </div>
    <div class="box">
      <div class="content">
        <el-form :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
          <el-form-item prop="username">
            <el-input
              v-model="formLabelAlign.username"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="formLabelAlign.password"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item class="center">
            <el-button type="info">重置</el-button>
            <el-button type="primary" @click="submitForm('formLabelAlign')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import {login} from '../http/http'
export default {
  props: {},
  data() {
    return {
      formLabelAlign: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 11,
            message: "长度在 6 到 11 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          // console.log(this.axios);
         login(this.formLabelAlign.username,this.formLabelAlign.password).then((res) => {
              console.log(res);
              // 登录成功会分发一个token给客户端，将token存储，后续发送请求需要带上此token
              let token = res.token;
              console.log(token);
              sessionStorage.setItem("token", token);
              this.$message({
                message: "登陆成功",
                type: "success",
                // 一秒钟消失
                duration: 1000,
                // 关闭之后跳转页面
                onClose:()=>{
                  this.$router.push("/home");
                },
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  components: {},
};
</script>
<style scoped lang="less">
.login {
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  .picture {
    width: 152px;
    height: 152px;
    background-color: white;
    border-radius: 50%;
    // position: relative;
    position: absolute;
    top: 230px;
    img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-color: #eeeeee;
      position: absolute;
      top: 10px;
      left: 10px;
    }
  }
  .content {
    width: 300px;
    margin-top: 114px;
    .center {
      overflow: hidden;
      button {
        float: right;
        margin: 10px;
      }
    }

    h1 {
      text-align: center;
      margin-bottom: 22px;
    }
  }
}
.box {
  background-color: white;
  width: 450px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

