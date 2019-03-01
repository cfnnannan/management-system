<template>
    <div class="container">
        <el-container>
            <el-header class="header-container">
                <div class="header-item">健康险经营数据平台</div>
                <div class="header-item">
                    <div class="badge-layor" @click="dialogVisible = true">
                        <img src="../../assets/r-icon-one.png" alt="">
                        <div class="badge">{{taskListLen}}</div>
                    </div>
                    <div class="out" @click="signOut">
                        <img src="../../assets/r-icon-three.png" alt="" width="20px" height="20px">
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside class="aside-container" width="200px">
                    <nav-tab></nav-tab>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

        <!-- 弹框 -->
        <el-dialog
            title="任务进度"
            :visible.sync="dialogVisible"
            :show-close="false"
            width="50%">
            <file-list></file-list>
        </el-dialog>
    </div>
</template>
<script>
import cookieUtil from '@/utils/cookie'
import navTab from '@/components/nav/nav-tab.vue'
import fileList from '@/components/popup/file-list.vue'
export default {
    name: 'home',
    components: {
        navTab,
        fileList
    },
    data() {
        return {
            dialogVisible: false,
            taskListLen: 0
        }
    },
    created() {
        this.getTaskList()
        this.$root.eventHub.$on('addLen', (addLen)=>{
            if(addLen) {
                this.taskListLen ++
            }
        })
    },
    methods: {
        getTaskList() {
            this.$store.dispatch('getTaskList', {
                success: data=> {
                    if(data.result === 'SUCCESS') {
                        this.taskListLen = data.retData.length
                    }
                }
            })
        },
        handleClose() {
            this.dialogVisible = false
        },
        signOut() {
            cookieUtil.delCookie('token_str')
            this.$router.push({path:'/'});
        }
    }
}
</script>
<style scoped>
.container {
    background: #eee;
    width: 95%;
    margin: 0 auto
}
.container /deep/ .el-button {
    border: 1px solid transparent;
}

.container .header-container {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-top: 1px solid #eee;
    color: #4cd6c1;
    font-weight: 700;
    font-size: 24px;
    box-shadow: darkgrey 0px -3px 10px -4px inset;
    margin-bottom: 1%;
}
.container .header-item {
    display: flex;
}
.container .header-item {
    display: flex;
    align-items: center;
    align-items: center;
}
.container .header-item .out {
    display: flex;
    align-items: center;
    margin-left: 20px;
}
.container .header-item .badge-layor {
    position: relative;
}
.container .header-item .badge-layor .badge {
    position: absolute;
    background: #ff613b;
    width: 22px;
    height: 12px;
    color: #fff;
    top: 0;
    right: -10px;
    border-radius: 10px;
    line-height: 12px;
    font-size: 12px;
    text-align: center;
}
.container /deep/ .el-main {
    padding: 0 20px;
}
.container /deep/ .el-dialog {
    border-radius: 8px;
}
.container /deep/ .el-dialog__title {
    font-size: 16px;
}
.container /deep/ .el-dialog__header {
    text-align: center;
    padding: 5px 0 5px;
    margin: 0 15px;
    border-bottom: 1px solid #eee;
}
.container /deep/ .el-dialog__body {
    padding: 0px 15px;
}
.container /deep/ .el-progress-bar {
    width: 100%;
}
.container .aside-container {
    text-align: center;
    background: #fff;
}

</style>
