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
                        key: 'control',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.row.goodsName)
                                        }
                                    }
                                }, 'View'),
                                // h('Button', {
                                //     props: {
                                //         type: 'error',
                                //         size: 'small'
                                //     },
                                //     on: {
                                //         click: () => {
                                //             this.remove(params.index)
                                //         }
                                //     }
                                // }, 'Delete')
                            ]);
                        }
                    },
                ]
                
            }
        },
        computed: {
            data1: function () {
            return this.$store.state.goodsData.goodsList
            }
        },
        methods:{
            show (index) {
                console.log(index)
            }
        }
        
    }
</script>

<style scoped>

</style>