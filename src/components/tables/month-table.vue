<template>
    <div class="table-container">
        <div class="content">
            <el-table v-loading="loading" class="first table" :data="dataOneList" border>
                <el-table-column prop="companyName" label="分公司" width="99"></el-table-column>
                <el-table-column 
                    v-for="(item,index) of tableTitleList" 
                    :key="index" 
                    :prop="item.type" 
                    :label="item.name"
                    :width="item.width"></el-table-column>
            </el-table>
            <el-table v-loading="loading" class="other table" :data="dataTwoList" border style="border-top:none">
                <el-table-column prop="companyName" label="合作业务" width="99"></el-table-column>
                <el-table-column 
                    v-for="(item,index) of tableTitleList" 
                    :key="index" 
                    :prop="item.type" 
                    :label="item.name"
                    :width="item.width"></el-table-column>
            </el-table>
            <el-table v-loading="loading" class="other table" :data="dataThreeList" border style="border-top:none">
                <el-table-column prop="companyName" label="自营业务" width="99"></el-table-column>
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
                { type: 'jan', name: '1月', width: 61},
                { type: 'janPer', name: '同比', width: 61},
                { type: 'feb', name: '2月', width: 61},
                { type: 'febPer', name: '同比', width: 61},
                { type: 'mar', name: '3月', width: 61},
                { type: 'marPer', name: '同比', width: 61},
                { type: 'apr', name: '4月', width: 61},
                { type: 'aprPer', name: '同比', width: 61},
                { type: 'may', name: '5月', width: 61},
                { type: 'mayPer', name: '同比', width: 61},
                { type: 'jun', name: '6月', width: 61},
                { type: 'junPer', name: '同比', width: 61},
                { type: 'jul', name: '7月', width: 61},
                { type: 'julPer', name: '同比', width: 61},
                { type: 'aug', name: '8月', width: 61},
                { type: 'augPer', name: '同比', width: 61},
                { type: 'sept', name: '9月', width: 61},
                { type: 'septPer', name: '同比', width: 61},
                { type: 'oct', name: '10月', width: 61},
                { type: 'octPer', name: '同比', width: 61},
                { type: 'nov', name: '11月', width: 61},
                { type: 'novPer', name: '同比', width: 61},
                { type: 'dec', name: '12月', width: 61},
                { type: 'decPer', name: '同比', width: 61},
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
