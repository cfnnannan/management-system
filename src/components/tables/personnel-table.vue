<template>
    <div class="table-container">
        <div class="content">
            <el-table v-loading="loading" class="table" :data="tableData" border @row-click="handleEdit">
                <el-table-column 
                    v-for="(item,index) of tableTitleList" 
                    :key="index" 
                    :prop="item.type" 
                    :label="item.name">
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template>
                        <el-button type="text" size="small">编辑</el-button>
                        <!-- <el-button type="text" size="small">删除</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="dialog">
            <el-dialog title="人员编辑" :visible.sync="dialogFormVisible">
                <edit-popup @closeEdit="dialogFormVisible=false" :source="'fromPerson'" :userSysid="userSysid"></edit-popup>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import editPopup from '@/components/popup/edit-popup'
export default {
    name: 'form-table',
    components: {
        editPopup
    },
    data() {
        return {
            dialogFormVisible: false,
            tableTitleList: [
                { type: 'userName', name: '账号'},
                { type: 'name', name: '姓名'},
                { type: 'companyList', name: '所属公司'},
                { type: 'deptName', name: '所属部门'},
            ],
            userSysid: '',
            tableData: [],
            loading: true
        }
    },
    created() {
        this.getUserList()
    },
    methods: {
        handleEdit(row, event, column) {
            this.dialogFormVisible = true
            this.userSysid = row.userSysid
        },
        getUserList() {
            this.$store.dispatch('getUserList', {
                success: data=> {
                    this.loading = false
                    if(data.result === 'SUCCESS') {
                        this.tableData = data.retData
                        this.tableData.forEach(item=>{
                            let name = "";
                            item.deptList.forEach(value => {
                                name += value.key;
                            })
                            item.deptName = name;
                        })
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.retMsg,
                            type: 'error'
                        });
                    }
                }
            })
        }
    }
}
</script>
<style scoped>
@import url('../../theme/nav-table');
.dialog /deep/ .el-dialog__headerbtn {
    display: none;
}
.dialog /deep/ .el-dialog__body {
    padding-bottom: 3%;
    padding-top: 3%
}
</style>
