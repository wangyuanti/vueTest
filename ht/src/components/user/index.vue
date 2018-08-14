<template>    
    <Row>   
        <Col span="24">
            <Tab ></Tab>
        </Col>  
        <Col span="24">
            <Page :total="total" show-elevator @on-change="handlePage"/>
        </Col>         
    </Row>    
</template>

<script>
    import Tab from './tab.vue'
    export default {
        name:"User",
        components:{
            Tab
        },
        methods:{
            handlePage(e){
                this.$store.commit('addUserPage',e);
                this.$store.dispatch('addUser');
            }
        },
        mounted() {
            this.$store.dispatch('addUser')
        },
        computed: {
            total: function () {
                return this.$store.state.userData.userNum
            }
        },      
    }
</script>

<style scoped>

</style>