<template>
    <div class="container">
        <div class="content">
            <div class="title">健康险经营数据平台</div>
            <div class="form-layor">
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px">
                    <el-form-item class="input-layor" prop="account">
                        <el-input type="text" auto-complete="off" placeholder="请输入用户名" v-model="ruleForm2.account"></el-input>
                        <img class="icon" src="../assets/name.png" alt="">
                    </el-form-item>
                    <el-form-item class="input-layor" prop="password">
                        <el-input type="password" autocomplete="off" placeholder="请输入密码" v-model="ruleForm2.password"></el-input>
                        <img class="icon" src="../assets/pwd.png" alt="">
                    </el-form-item>
                    <!-- <el-form-item class="check-layor">
                       <el-checkbox class="check-box">记住我</el-checkbox>
                    </el-form-item> -->
                    <el-form-item>
                        <el-button class="btn" @click.native.prevent="handleSubmit" :loading="logining">登 录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import cookieUtil from '@/utils/cookie'
export default {
    name: 'login',
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: '',
                password: ''
            },
            rules2: {
                account: [{required: true, message: '请输入账号', trigger: 'blur'}],
                password: [{required: true, message: '请输入密码', trigger: 'blur'}]
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    this.logining = true;
                    this.$store.dispatch('getLoginData', {
                            data: {
                                userName: this.ruleForm2.account,
                                password: this.ruleForm2.password
                            },
                            success: data => {
                                this.logining = false
                                if(data.result === 'SUCCESS') {
                                    let res = data.retData
                                    cookieUtil.setCookie('token_str', res.tokenStr, 21)
                                    cookieUtil.setCookie('userName', res.userName)
                                    this.$router.push({path:'/home/day?id=0'});
                                } else {
                                    this.$message({
                                        showClose: true,
                                        message: data.retMsg,
                                        type: 'error'
                                    });
                                }
                            }
                        })
                } else {
                    return false;
                }
            });
        }
    }
}
</script>
<style scoped>
.container {
    background-image: url(../assets/login.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    width:100%;  
    height:100%;  
    background-size:100% 100%;  
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}
.container .content {
    width: 22%;
}
.container .content .title {
    text-align: center;
    color: #fff;
    margin-bottom: 10%;
    font-size: 24px;
}
.form-layor /deep/ .el-input__inner {
    border: 1px solid #fff;
}
.input-layor {
    position: relative;
}
.input-layor .icon {
    position: absolute;
    top: 18%;
    right: 5%;
}
.check-layor /deep/.el-form-item {
    margin-bottom: 1%;
}
.check-box {
    color: #fff;
}
.form-layor /deep/ .el-checkbox__inner {
    border: 1px solid #fff;
    background-color: transparent;
}
.form-layor /deep/ .el-button {
    border: 1px solid transparent;
    color: #fff;
    background: #4cd6c1;
    width: 100%;
    box-shadow: 0 0 10px -1px #08ad93;
}
.form-layor /deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #fff;
}
</style>
