<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        name:"Tab",
        data () {
            return {
                columns1: [
                    {
                        title: 'username',
                        key: 'username'
                    },
                    {
                        title: 'uuid',
                        key: 'uuid',
                        width:300

                    },
                    {
                        title: 'e-mail',
                        key: 'email'
                    },
                    {
                        title: 'phone',
                        key: 'phone'
                    },
                    {
                        title: 'control',
                        key: 'control'
                    },
                ]
                
            }
        },
        computed: {
            data1: function () {
            return this.$store.state.userData.userList
            }
        }
        
    }
</script>
<style scoped>

</style>