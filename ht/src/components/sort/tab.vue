<template>
    <div>
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
    export default {
        name:"Tab",
        data () {
            return {
                columns1: [
                    {
                        title: 'id',
                        key: 'id'
                    },
                    {
                        title: 'sortName',
                        key: 'sortName',

                    },                   
                    {
                        title: 'control',
                        key: 'control'
                    },
                ]
                
            }
        },
        computed: {
            data1: function () {
            return this.$store.state.sortData.sortList
            }
        }
        
    }
</script>

<style scoped>

</style>