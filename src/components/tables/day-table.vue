<template>
    <div class="table-container">
        <div class="content">
            <el-table v-loading="loading" class="first table" :data="dataOneList" border>
                <el-table-column prop="source" label="业务来源"></el-table-column>
                <el-table-column prop="companyName" label="分公司" width="120"></el-table-column>
                <el-table-column 
                    v-for="(item,index) of tableTitleList" 
                    :key="index" 
                    :prop="item.type" 
                    :label="item.name"
                    :width="item.width"></el-table-column>
            </el-table>
            <el-table v-loading="loading" class="other table" :data="dataTwoList" border style="border-top:none">
                <el-table-column prop="source" label=""></el-table-column>
                <el-table-column prop="companyName" label="合作业务" width="120"></el-table-column>
                <el-table-column 
                    v-for="(item,index) of tableTitleList" 
                    :key="index" 
                    :prop="item.type" 
                    :label="item.name"
                    :width="item.width"></el-table-column>
            </el-table>
            <el-table v-loading="loading" class="other table" :data="dataThreeList" border style="border-top:none">
                <el-table-column prop="source" label=""></el-table-column>
                <el-table-column prop="companyName" label="自营业务" width="120"></el-table-column>
                <el-table-column 
                    v-for="(item,index) of tableTitleList" 
                    :key="index" 
                    :prop="item.type" 
                    :label="item.name"
                    :width="item.width"></el-table-column>
            </el-table>
        </div>

        
    </div>
</template>
<script>
export default {
    name: 'form-table',
    data() {
        return {
            tableTitleList: [
                { type: 'dayPremium', name: '每日保费'},
                { type: 'weekPremium', name: '周保费'},
                { type: 'weekPremiumChain', name: '周同比'},
                { type: 'monthPremium', name: '月保费'},
                { type: 'monthPremiumChain', name: '月同比'},
                { type: 'quarterPremium', name: '季度保费'},
                { type: 'quarterPremiumChain', name: '季度同比'},
                { type: 'yearPremium', name: '年保费'},
                { type: 'yearPremiumChain', name: '年同比'},
                { type: 'yearTarget', name: '全年目标'},
                { type: 'quarterPer', name: '季度达成'},
                { type: 'yearPer', name: '年度达成'},
                { type: 'timePer', name: '序时进度'},
                { type: 'daysRemaining', name: '剩余天数'},

            ],
            dataOneList: [],
            dataTwoList: [],
            dataThreeList: [],
            loading: true
        }
    },
    mounted() {
        this.$root.eventHub.$on('dataList', (dataList)=> {
            this.dataOneList = dataList.dataOneList
            this.dataTwoList = dataList.dataTwoList
            this.dataThreeList = dataList.dataThreeList
        })
        this.$root.eventHub.$on('loading', (loading)=> {
            this.loading = loading
        })
    },
    methods: {

    }
}
</script>
<style scoped>
@import url('../../theme/nav-table');
</style>
