<template>
    <div>
        <nav-top></nav-top>
        <month-table></month-table>
    </div>
</template>
<script>
import navTop from '@/components/nav/nav-top.vue'
import monthTable from '@/components/tables/month-table.vue'
export default {
    name: 'month',
    components: {
        navTop,
        monthTable
    },
    data() {
        return {

        }
    },
    created() {

    }
}
</script>
<style scoped>

</style>