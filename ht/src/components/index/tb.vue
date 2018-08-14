<template>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
    export default {
        name: 'Tb',
        data () {
            return {
            msg: this.$store.state.indexData
            }
        },
        computed: {
        // 计算属性的 getter
        reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.$store.state.indexData
            }
        },
        mounted(){
            this.drawLine(this.reversedMessage);
        },
        props:{
            data1:{
                type:Object,
                required:true
            }
        },
        methods: {
            
            drawLine(a){
                
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '数据统计' },
                    tooltip: {},
                    xAxis: {
                        data: ["用户数","商品数","订单数"]
                    },
                    yAxis: {},
                    series: [{
                        name: '数量',
                        type: 'bar',
                        data: [this.data1.staUser,
                                this.data1.staGoods,
                                this.data1.staOrder]
                    }]
                });
            }
        }
    }
</script>

<style scoped>

</style>