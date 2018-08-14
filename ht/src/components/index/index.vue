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
                 xxx:0
            }  
        },
        beforeRouteEnter:(to,from,next)=>{            
            if(to.path === '/login'){  
                next()
            }else { 
                if(to.meta.requiresAuth){
                    next({ path: '/login' })
                }else { next() }
            }   
        },
        beforeRouteLeave: (to, from, next) => {
            console.log("准备离开路由模板");
            next();
        }
    }  
</script>

<style scoped>

</style>
