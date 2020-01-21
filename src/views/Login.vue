<template>
    <div v-class="['container']">
        <div v-class="['login-con']">
            <div v-class="['title']">系统登录</div>
            <el-form :model="loginForm" :rules="rules" v-class="['login-form']" ref="loginForm">
                <el-form-item prop="name" >
                    <div v-class="['form-item']">
                        <div v-class="['icon']" class="iconfont icon-user"/>
                        <el-input v-model="loginForm.name"></el-input>
                    </div>
                </el-form-item>
                <el-form-item prop="password" >
                    <div v-class="['form-item']">
                        <div v-class="['icon']" class="iconfont icon-password"/>
                        <el-input type="password" v-model="loginForm.password"></el-input>
                    </div>
                </el-form-item>
                <el-button v-class="['login-btn']" type="primary" @click="login">登录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
import { getTodo } from "@/services/todo"
export default {
    data () {
        return {
            loginForm: {
                name: "",
                password: ""
            },
            rules: {
                name: [
                    {required: true, message: "请输入账号", triger:["blur"]}
                ],
                password: [
                    {required: true, message: "请输入密码", triger:["blur"]}
                ]
            }
        }
    },
    methods: {
        login () {
            this.$refs.loginForm.validate(async (valid) => {
                if (valid) {
                    let data = await getTodo();
                    console.log(data)
                    data = data.data
                    this.$router.push("/home")
                } else {
                    console.error("submit error")
                }
            })
        },
    }
}
</script>
<style lang="scss" module>
.container {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 800px;
    min-height: 600px;
    background: #2d3a4b;
    overflow-x: auto;
}
.login-con {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: auto;
    transform: translate(-50%, -80%);
    
    .title {
        font-size: 26px;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    .login-form {
        margin-top: 40px;
    }
    .form-item {
       display: flex;
       align-items: center;
       width: 100%;
       height: 54px;
       border: 1px solid hsla(0,0%,100%,.1);
       border-radius: 5px;
       .icon {
           width: 50px;
           line-height: 54px;
           font-size: 22px;
           text-align: center;
           color: rgb(151, 151, 151);
       }
       input {
           background-color: #2d3a4b;
           border: none;
           color: white;
       }
    }
    .login-btn {
        width: 100%;
        height: 45px;
        font-size: 18px;
    }
}
</style>