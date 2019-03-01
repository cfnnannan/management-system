<template>
    <div>
        <manage-top></manage-top>
        <department-table></department-table>
    </div>
</template>
<script>
import manageTop from '@/components/nav/manage-top.vue'
import departmentTable from '@/components/tables/department-table.vue'
export default {
    name: 'department',
    components: {
        manageTop,
        departmentTable
    }
}
</script>
<style scoped>

</style>