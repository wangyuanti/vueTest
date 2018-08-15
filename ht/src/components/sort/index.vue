<template>
    <Row> 
        <Col span="24">
            
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
        name:"Sort",
        components:{
            Tab,
        },
        data(){
            return{
                
            }
            
        },
        methods:{
            handlePage(e){
                this.$store.commit('addSortPage',e);
                this.$store.dispatch('addSort');
            }
        },
        mounted() {
            this.$store.dispatch('addSort')
        },
        computed: {
            total: function () {
                return this.$store.state.sortData.sortNum
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