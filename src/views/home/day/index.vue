<template>
    <div>
        <nav-top></nav-top>
        <day-table></day-table>
    </div>
</template>
<script>
import navTop from '@/components/nav/nav-top.vue'
import dayTable from '@/components/tables/day-table.vue'
export default {
    name: 'day',
    components: {
        navTop,
        dayTable,
    }
}
</script>
<style scoped>

</style>