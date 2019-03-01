<template>
    <div class="container">
        <div class="content-title">{{title}}</div>
        <!-- <div class="content">
            <div class="item top-left">
                <div class="left-item">
                    <div class="navId" v-show="navId==2">
                        <div class="navId-item">
                            <span>人员名称</span>
                            <input class="name-input" type="text"/>
                        </div>
                        <div class="navId-item">
                            <span>所属公司</span>
                            <select class="select" name="" id="">
                                <option value="">广州公司</option>
                            </select>
                        </div>
                    </div>
                    <div class="navId" v-show="navId==3">
                        <div class="navId-item">
                            <span>区域公司</span>
                            <select class="select" name="" id="">
                                <option value="">深圳公司</option>
                            </select>
                        </div>
                        <div class="navId-item">
                            <span>分公司</span>
                            <select class="select" name="" id="">
                                <option value="">第一部门</option>
                            </select>
                        </div>
                    </div>
                    <div class="navId" v-show="navId==4">
                        <div class="navId-item">
                            <span>业务</span>
                            <select class="select" name="" id="">
                                <option value="">第一部门</option>
                            </select>
                        </div>
                        <div class="navId-item">
                            <span>部门</span>
                            <input class="name-input" type="text"/>
                        </div>
                        <div class="navId-item">
                            <span>创建时间</span>
                            <input class="name-input" type="text"/>
                        </div>
                    </div>
                </div>
                <div class="left-item"><el-button>查询</el-button></div>
            </div>
            <div class="item top-right">
                <el-button class="up" @click="addData">添加</el-button>
            </div>
            <div class="dialog">
                <el-dialog :title="title" :visible.sync="dialogFormVisible">
                    <edit-popup @closeEdit="dialogFormVisible=false"></edit-popup>
                </el-dialog>
            </div>
        </div> -->
    </div>
</template>
<script>
import editPopup from '@/components/popup/edit-popup'
export default {
    name: 'manage-top',
    data() {
        return {
            navId: this.$route.query.id,
            dialogFormVisible: false
        }
    },
    components: {
        editPopup
    },
    created() {
        if(this.navId == 2) {
            this.title = '人员管理'
        } else if(this.navId == 3) {
            this.title = '公司管理'
        } else {
           this.title = '部门管理' 
        }
    },
    methods: {
        addData() {
            this.dialogFormVisible = true
        }
    }
}
</script>
<style scoped>
@import url('../../theme/nav-top');
.dialog /deep/ .el-dialog__headerbtn {
    display: none;
}
.dialog /deep/ .el-dialog__body {
    padding-bottom: 3%;
    padding-top: 3%
}
.content {
    justify-content: space-between;
}
.content .select {
    width: 150px;
    height: 24px;
    color: #606266;
    border-color:#dcdfe6;
    border-radius: 4px;
}
.content .top-left {
    width: 70%;
}
.content .navId {
    display: flex;
}
.content .navId .navId-item {
    margin-right: 15px;
}
.content .navId .navId-item:last-child {
    margin-right: 0;
}
.content .name-input {
    width: 143px;
    height: 24px;
    padding-left: 5px;
    border: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    height: 20px;
}
</style>
