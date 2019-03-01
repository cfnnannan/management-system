<template>
    <div>
        <manage-top></manage-top>
        <company-table></company-table>
    </div>
</template>
<script>
import manageTop from '@/components/nav/manage-top.vue'
import companyTable from '@/components/tables/company-table.vue'
export default {
    name: 'company',
    components: {
        manageTop,
        companyTable
    }
}
</script>
<style scoped>

</style>