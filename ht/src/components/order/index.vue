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
        name:"Order",
        components:{
            Tab,
            Find
        },
        data(){
            return{
                findData:[{value:"id",txt:"订单ID"},{value:"oredrUuid",txt:'用户ID'}],
                modelName:"order"
            }
            
        },
        methods:{
            handlePage(e){
                this.$store.commit('addOrderPage',e);
                this.$store.dispatch('addOrder');
            }
        },
        mounted() {
            this.$store.dispatch('addOrder')
        },
        computed: {
            total: function () {
                return this.$store.state.orderData.orderNum
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