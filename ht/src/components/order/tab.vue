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
                        title: 'orderUserID',
                        key: 'oredrUuid',
                        width:300

                    },
                    {
                        title: 'OrderStatus',
                        key: 'pay'
                    },
                    {
                        title: 'Totalprice',
                        key: 'price'
                    },
                    {
                        title: 'Time',
                        key: 'add_time'
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
            return this.$store.state.orderData.orderList
            }
        }
        
    }
</script>

<style scoped>

</style>