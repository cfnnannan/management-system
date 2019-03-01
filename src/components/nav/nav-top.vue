<template>
<div class="container">
    <div class="content-title">{{title}}</div>
    <div class="content">
        <div class="item top-left">
            <div class="left-item">{{title}}查询</div>
            <div class="left-item block">
                <el-date-picker
                    v-model="value"
                    type="date"
                    value-format="timestamp"
                    @change="selectTime">
                </el-date-picker>
            </div>
            <div class="left-item" @click="getDataList"><el-button>查询</el-button></div>
        </div>
        <div class="item top-bom">健康{{title}}（{{dataTime | formatDate}}）</div>
        <div class="item top-right">
            <el-dropdown>
                <el-button class="up">
                    上传<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <el-upload action="" 
                            :http-request='uploadFileMethod'
                            :show-file-list='false'
                            name="cooperation">
                            <span>合作业务</span>
                        </el-upload>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-upload action="" 
                            :http-request='uploadFileMethod'
                            :show-file-list='false'
                            name="self">
                            <span>自营业务</span>
                        </el-upload>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-button class="down" @click="download">下载</el-button>
        </div>
    </div>
</div>
</template>
<script>
import cookieUtil from '@/utils/cookie'
import formatDate from '@/utils/filters-date'
import axios from '@/axios'
export default {
    name: 'form-top',
    data() {
        return {
            value: new Date().getTime(),
            navId: this.$route.query.id,
            title: '',
            dataTime: new Date().getTime(),
            dataList: [],
            selectType: '',
            loading: false
        }
    },
    created() {
        if(this.navId == 0) {
            this.title = '日报表'
            this.selectType = 'day'
        } else {
            this.title = '月报表'
            this.selectType = 'month'
        }
        this.getDataList()
    },
    methods: {
        selectTime(value) {
            this.dataTime = value
        },
        uploadFileMethod(param) {
            let formData = new FormData;
            let fileType;
            if(param.filename=='cooperation') {
                fileType = 'cooperation'
            } else {
                fileType = 'self'
            }
            formData.append('file', param.file);
            formData.append("fileType", fileType);
            let config = {
                'Content-Type': 'multipart/form-data',
                'Authorization': cookieUtil.getCookie('token_str')
            }
            axios.post('/order/upload', formData, config).then(res=> {
                if(res.data.result === 'SUCCESS') {
                    this.$message({
                        showClose: true,
                        message: '上传成功，请在文件列表查看',
                        type: 'success'});
                    this.$root.eventHub.$emit('addLen', 'addLen')

                } else {
                    this.$message({
                        showClose: true,
                        message: res.data.retMsg,
                        type: 'success'});
                }
            })
        },
        download() {
            this.$store.dispatch('getDownload', {
                data: {
                    day: this.dataTime,
                    type: this.selectType
                },
                success: data => {
                    if(data.result === 'SUCCESS') {
                        this.$message({
                            showClose: true,
                            message: '下载成功，请在文件列表查看',
                            type: 'success'});
                        this.$root.eventHub.$emit('addLen', 'addLen')
                    } else {
                        this.$message({
                            showClose: true,
                            message: data.retMsg,
                            type: 'error'});
                    }
                } 
            })
        },
        getDataList() {
            this.$store.dispatch('getDataList', {
                data: {
                    day: this.dataTime,
                    type: this.selectType
                },
                success: data => {
                    this.$root.eventHub.$emit('loading', this.loading)
                    if(data.result === 'SUCCESS') {
                        let dataList = data.retData
                        this.$root.eventHub.$emit('dataList', dataList)
                        
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
    },
    filters: {
        formatDate
    }
}
</script>
<style scoped>
@import url('../../theme/nav-top');
</style>
