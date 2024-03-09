<template>
    <div>
        <fwb-heading tag="h4" color="text-blue-400" class="w-full mb-10 text-start">Notifications</fwb-heading>
        <p>Choose how you receive notifications. These notification settings apply to the things you’re watching.</p>
        <fwb-table striped>
            <fwb-table-head>
                <fwb-table-head-cell>Activity</fwb-table-head-cell>
                <fwb-table-head-cell>Email</fwb-table-head-cell>
                <fwb-table-head-cell>Push</fwb-table-head-cell>
                <fwb-table-head-cell>SMS</fwb-table-head-cell>
                <fwb-table-head-cell>
                    <span class="sr-only">Edit</span>
                </fwb-table-head-cell>
            </fwb-table-head>
            <fwb-table-body>
                <fwb-table-row>
                    <fwb-table-cell>Newsletter</fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>

                </fwb-table-row>
                <fwb-table-row>
                    <fwb-table-cell>New Curses</fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>

                </fwb-table-row>
                <fwb-table-row>
                    <fwb-table-cell>New Referral</fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>
                    <fwb-table-cell><fwb-toggle v-model="toggle" /></fwb-table-cell>

                </fwb-table-row>
            </fwb-table-body>
        </fwb-table>
        <div class="save-button mt-10 text-end">
            <fwb-button class="w-full  sm:w-1/2 md:w-1/3 lg:w-40 xl:[100%] bg-blue-600 self-center"
                type="submit">Save</fwb-button>
        </div>
        
    </div>
</template>


<script>
import { ref } from 'vue'
import { FwbToggle, FwbHeading, FwbButton, FwbTable, FwbTableRow, FwbTableBody, FwbTableCell, FwbTableHead, FwbTableHeadCell, } from 'flowbite-vue'

export default {
    components: {
        FwbToggle,
        FwbHeading,
        FwbTable,
        FwbTableBody,
        FwbTableCell,
        FwbTableHead,
        FwbTableHeadCell,
        FwbTableRow,
        FwbButton
    }
}

const toggle = ref(false)
</script>