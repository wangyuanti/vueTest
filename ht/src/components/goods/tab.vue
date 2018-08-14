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
                        title: 'information',
                        key: 'goodsName',
                    },
                    {
                        title: 'price',
                        key: 'goodsPrice'
                    },
                    {
                        title: 'status',
                        key: 'goodsStatus'
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
            return this.$store.state.goodsData.goodsList
            }
        }
        
    }
</script>

<style scoped>

</style>