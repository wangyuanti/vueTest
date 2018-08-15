<template>
    <Row> 
        <Col span="24">
            <Find v-bind:findData="findData" v-bind:modelName="modelName"/>
        </Col>   
        <Col span="24">
            <Tab ></Tab>
        </Col>  
        <Col span="24">
            <Page :total="total" show-elevator @on-change="handlePage"/>
        </Col> 
               
    </Row>    
</template>

<script>
    import Tab from './tab.vue';
    import Find from '../find';
    import Cookies from 'js-cookie';
    export default {
        name:"Goods",
        components:{
            Tab,
            Find
        },
        data(){
            return{
                findData:[{value:"id",txt:"商品ID"},{value:"goodsName",txt:'商品名称'}],
                modelName:"goods"
            }
            
        },
        methods:{
            handlePage(e){
                this.$store.commit('addGoodsPage',e);
                this.$store.dispatch('addGoods');
            }
        },
        mounted() {
            this.$store.dispatch('addGoods')
        },
        computed: {
            total: function () {
                return this.$store.state.goodsData.goodsNum
            }
        },  
        beforeRouteEnter:(to,from,next)=>{            
            if(to.path === '/login'){  
                next()
            }else { 
                let cookic = Cookies.get('uuidAndToken');
                if(to.meta.requiresAuth&&!cookic){
                    next({ path: '/login' })
                }else { next() }
            }   
        },    
    }
</script>

<style scoped>

</style>