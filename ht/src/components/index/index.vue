<template>
    <Row>
        <Col span="24">
            <Statistics />
        </Col>
        <Col span="24">
            <Row>
                <Col span="8" offset="2">
                    <Bulletin ></Bulletin>
                </Col>
                <Col span="8" offset="2">
                    <Tb v-bind:data1="data1"/>
                </Col>
            </Row>
        </Col>
    </Row>
</template>

<script>
    import Statistics from './statistics.vue';
    import Tb from './tb.vue';
    import Bulletin from './bulletin.vue';
    import Cookies from 'js-cookie';
    export default {
        name:"Index",
        components:{
            Statistics,
            Bulletin,
            Tb
        },
        mounted() {
            this.$store.dispatch('addIndex');
            // console.log(this.$store.state.indexData)
        },
        data(){
            return{
                 data1:this.$store.state.indexData,
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
