<template>
    <div>
        <manage-top></manage-top>
        <personnel-table></personnel-table>
    </div>
</template>
<script>
import manageTop from '@/components/nav/manage-top.vue'
import personnelTable from '@/components/tables/personnel-table.vue'
export default {
    name: 'personnel',
    components: {
        manageTop,
        personnelTable
    }
}
</script>
<style scoped>

</style>