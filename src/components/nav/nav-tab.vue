<template>
    <div class="container">
        <router-link class="nav-item" tag="div" 
            v-for="(item,index) of navList"
            :key="index"
            :to="{path:item.navPath, query: {id: item.navId}}">
            {{item.name}}
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'nav-table',
    data() {
        return {
            navList: [
                {name: '日报表', navPath: '/home/day', navId: 0},
                {name: '月报表', navPath: '/home/month', navId: 1},
                {name: '人员管理', navPath: '/home/personnel', navId: 2},
                {name: '公司管理', navPath: '/home/company', navId: 3},
                {name: '部门管理', navPath: '/home/department', navId: 4},
            ]
        }
    }
}
</script>
<style scoped>
.container {
    background: #fff;
}
.container .nav-item {
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #eee;
}
.container .nav-item:last-child {
    border-color: transparent;
}
.router-link-active {
    background: #4cd6c1;
    color: #fff;
}
</style>
