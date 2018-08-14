<template>
    <Row type="flex" justify="space-around" class="code-row-bg" id='Statistics'>
        <Col span="4" class="statistics">
            <p>{{sta.staGoods}}</p>
            <span><Icon type="ios-paper" />商品总数</span>
        </Col>
        <Col span="4" class="statistics">
            <p>{{sta.staUser}}</p>
            <span><Icon type="ios-people" />用户总数</span>
        </Col>
        <Col span="4" class="statistics">
            <p>{{sta.staOrder}}</p>
            <span><Icon type="ios-stats" />订单总数</span>
        </Col>
    </Row>
</template>

<script>
    export default {
        name:"Statistics",
        data(){
            return{
                sta:this.$store.state.indexData, 
            } 
        },
        beforeCreate(){
            console.log(1);
        }
    }
</script>

<style scoped>
    #Statistics .statistics{
        height: 80px;
        color: azure;
        background-color: #f0b45f;
        text-align: center;
        font-size: 30px;
    } 
    #Statistics .statistics:nth-of-type(2){
        background-color: #6bbe6b;
    } 
    #Statistics .statistics:nth-of-type(3){
        background-color: #5db8d3;
    }   
    #Statistics .statistics span{
        height: 30px;
        font-size: 18px;
        display: flex;
        align-items:center;
        justify-content:center;
    }  
</style>