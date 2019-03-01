<template>
    <div class="dialog-form">
        <el-form :model="form">
            <el-form-item :label="labelFirst" :label-width="formLabelWidth">
                <el-input v-model="form.first" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item :label="labelSecond" :label-width="formLabelWidth">
                <el-input v-model="form.second" autocomplete="off" v-show="source=='fromPerson'"></el-input>
                <el-select v-model="form.second" placeholder="请选择部门类型" v-show="source=='fromDepart'">
                    <el-option label="健康险" value="健康险"></el-option>
                    <el-option label="产险" value="产险"></el-option>
                </el-select>
                <el-select v-model="form.second" placeholder="请选择所属公司" v-show="source=='fromCompany'">
                    <el-option label="无" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="labelThird" :label-width="formLabelWidth">
                <el-input v-model="form.third" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeEdit">取消</el-button>
            <el-button type="primary" @click="confirmEditor">编辑</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'manage-popup',
    props: {
        source: String,
        companyId: String,
        deptId: String,
        userSysid: String
    },
    data() {
        return {
            form: {
                first: '',
                second: '',
                third: ''
            },
            labelFirst: '',
            labelSecond: '',
            labelThird: '',
            formLabelWidth: '120px'
        }
    },
    created() {
        if(this.source=='fromPerson') {
            this.labelFirst = '账号：'
            this.labelSecond = '姓名：'
            this.labelThird = '密码：'
        } else if(this.source=='fromCompany') {
            this.labelFirst = '公司名称：'
            this.labelSecond = '所属公司：'
            this.labelThird = '年目标：'
        } else {
            this.labelFirst = '部门名称：'
            this.labelSecond = '部门类型：'
            this.labelThird = '年目标：'
        }
    },
    methods: {
        closeEdit() {
            this.$emit('closeEdit')
        },
        confirmEditor() {
            if(this.source=='fromPerson') {
                this.getUserCreateOrUpdate()
            } else if(this.source=='fromCompany') {
                this.getCompanyCreateOrUpdate()
            } else {
                this.getDeptCreateOrUpdate()
            }
        },
        getUserCreateOrUpdate() {
            this.$store.dispatch('getUserCreateOrUpdate', {
                data: {
                    userSysid: this.userSysid,
                    userName: this.form.first,
                    name: this.form.second,
                    password: this.form.third,
                },
                success:data=> {
                    if(data.result==='SUCCESS') {
                        this.$emit('closeEdit')
                    }
                }
            })
        },
        getDeptCreateOrUpdate() {
            this.$store.dispatch('getDeptCreateOrUpdate', {
                data: {
                    deptId: this.deptId,
                    deptName: this.form.first,
                    deptType: this.form.second,
                    target: this.form.third
                },
                success:data=> {
                    if(data.result==='SUCCESS') {
                        this.$emit('closeEdit')
                    }
                }
            })
        },
        getCompanyCreateOrUpdate() {
            this.$store.dispatch('getCompanyCreateOrUpdate', {
                data: {
                    companyId: this.companyId,
                    companyName: this.form.first,
                    parentCompanyId: '',
                    target: this.form.third
                },
                success:data=> {
                    if(data.result==='SUCCESS') {
                        this.$emit('closeEdit')
                    }
                }
            })
        }    
    }
}
</script>
<style scoped>
.dialog-form /deep/ .el-input__inner {
    width: 217px;
    height: 30px;
}
.dialog-form /deep/ .el-form-item {
    margin-bottom: 5px;
}
.dialog-footer {
    text-align: center;
    margin-top: 2%
}
.dialog-footer /deep/ .el-button {
    border-color: #dcdfe6;
    border-radius: 5px;
    padding: 8px 20px;
}
</style>