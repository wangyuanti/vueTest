<template>
    <Input search v-model="value13" style="width: 300px" @on-search='value'>
        <Select v-model="select3" slot="prepend" style="width: 80px" @on-change='getKey'>
            <Option v-for='e in findData' :value="e.value">{{e.txt}}</Option>
        </Select>
        <!-- <Button slot="append" icon="ios-search" @click='click'></Button> -->
    </Input>   
</template>

<script>
    export default {
        name:'Find',
        props:{
            findData:{type:Array,required:true},
            modelName:{type:String,required:true}
        },
        data () {
            return {
                value13: '',
                select3: '',
                key:''
            }
        },
        methods:{
            getKey(e){
                this.key = e;
            },
            value(e){
               if(this.key&&e){
                   console.log(this.key,e,this.modelName);
                   let findData = {key:this.key,value:e,modelName:this.modelName}
                  this.$store.commit('addFindData',findData);
                  this.$store.dispatch('addFind');
               }else{
                   let str= this.modelName;
                   str = str.substring(0,1).toUpperCase()+str.substring(1);
                   this.$store.dispatch('add'+str)
               }
            }
        },
    }
</script>

<style scoped>

</style>