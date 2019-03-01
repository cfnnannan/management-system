<template>
    <div class="pop-content">
        <div class="pop-list"
            v-for="(item,index) of taskList"
            :key="index">
            <div class="item first"><span>{{item.taskName}}</span></div>
            <!-- <div class="item"><img src="@/assets/play.png" alt=""></div> -->
            <div v-show="item.type=='download'">
                <div class="item btn" v-show="item.status!='3'">下载</div>
                <div class="item btn no-disabled" v-show="item.status=='3'" @click="taskDownload(item.taskId)">下载</div>
            </div>
            <div v-show="item.type=='upload'">
                <div class="item btn" v-show="item.status=='1'">待上传</div>
                <div class="item btn" v-show="item.status=='2'">上传中</div>
                <div class="item btn" v-show="item.status=='3'">上传成功</div>
                <div class="item btn" v-show="item.status=='4'">上传失败</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'file-list',
    data() {
        return {
            taskList: []
        }
    },
    created() {
        this.getTaskList()
    },
    methods: {
        getTaskList() {
            this.$store.dispatch('getTaskList', {
                success: data=> {
                    if(data.result === 'SUCCESS') {
                        this.taskList = data.retData
                    }
                }
            })
        },
        taskDownload(str) {
            this.$store.dispatch('getTaskDownload', {
                data: {
                    taskId: str
                },
                success: data=> {
                    if(data.result === 'SUCCESS') {
                        window.open(data.retData)
                    }
                }
            })
        }
    }
}
</script>
<style scoped>
.pop-content .pop-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
}
.pop-content .pop-list .first {
    flex: 0 0 70%
}
.pop-content .pop-list .first {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    font-size: 12px;
}
.pop-content .pop-list .first .el-icon-close { 
    font-size: 16px;
    margin-right: 8px;
}
.pop-content .pop-list .btn {
    background: #ccc;
    border-radius: 3px;
    height: 22px;
    width: 58px;
    color: #fff;
    line-height: 22px;
    text-align: center;
    font-size: 12px;
}
.no-disabled {
    background: #ff613b !important;
}
</style>
