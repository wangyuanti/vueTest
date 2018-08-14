<template>
    <Tabs value="name1" id="Bulletin">
        <TabPane label="最新公告" name="name1">
            <ul>
                <li v-for="val in reversedMessage" class="BullList">
                    <span>
                        {{val.title}}
                    </span>
                    <span class="BullDate">
                        {{val.date}}
                    </span>
                </li>
            </ul>
        </TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>

<script>
    export default {
        name:'Bulletin',
        computed: {
        // 计算属性的 getter
            reversedMessage: function () {
            // `this` 指向 vm 实例
            return this.$store.state.indexData.bulletin
            }
        }
    }
</script>

<style scoped>
    #Bulletin .BullList{
        line-height: 50px;
        font-size: 14px;
    }
    #Bulletin .BullDate{
        float: right;
    }
</style>