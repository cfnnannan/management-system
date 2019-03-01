<template>
    <div class="table-container">
        <div class="content">
            <el-table class="table" :data="tableData" border @row-click="handleEdit">
                <el-table-column 
                    v-for="(item,index) of tableTitleList" 
                    :key="index" 
                    :prop="item.type" 
                    :label="item.name"></el-table-column>
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
            <el-dialog title="部门编辑" :visible.sync="dialogFormVisible">
                <edit-popup @closeEdit="dialogFormVisible=false" :source="'fromDepart'" :deptId="deptId"></edit-popup>
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
                { type: 'deptName', name: '部门名称'},
                { type: 'deptType', name: '部门类型'},
                { type: 'num', name: '部门人数'},
            ],
            deptId: '',
            tableData: [],
            // loading: true
        }
    },
    created() {
        this.getDeptList()
    },
    methods: {
        handleEdit(row, event, column) {
            this.dialogFormVisible = true
            this.deptId = row.deptId
        },
        getDeptList() {
            this.$store.dispatch('getDeptList', {
                data: {
                    deptId:'',
                    deptType: '',
                },
                success: data=> {
                    if(data.result === 'SUCCESS') {
                        this.tableData = data.retData
                        for(var j =0;j<this.tableData.length;j++) {
                            let val = this.tableData[j];
                            let list = val.targetList
                           for(var i =0; i< list.length; i++) {
                               let item = list[i];
                               if(j==0) {
                                   this.tableTitleList.push({type: 'targetNum' + i, name: (item.beginTime + "").substr(0,4)+'年目标（万元）'})
                               }
                               if(i==0) val.targetNum0 = item.target;
                               if(i==1) val.targetNum1 = item.target;
                               if(i==2) val.targetNum2 = item.target;
                               if(i==3) val.targetNum3 = item.target;
                               if(i==4) val.targetNum4 = item.target;
                               if(i==5) val.targetNum5 = item.target;
                               if(i==6) val.targetNum6 = item.target;
                           }
                        }
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
