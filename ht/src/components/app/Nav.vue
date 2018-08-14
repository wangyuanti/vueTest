<template>
    <div id='Nav'>
        <Menu class="Nav-list" theme='light' width='auto'>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" />
                    商品
                </template>
                <MenuItem name="1-1" to='/goods'>商品管理</MenuItem>
                <MenuItem name="1-2" to='/sort'>品类管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" />
                    用户
                </template>
                <MenuItem name="2-1" to='/user'>用户列表</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    订单
                </template>
                <MenuItem name="3-1" to='/order'>订单管理</MenuItem>                
            </Submenu>
        </Menu>
    </div>
</template>

<script>
    export default {
        name:"Nav"
    }
</script>

<style scoped>
#Nav{
    height: 100%;
}
#Nav .Nav-list{
    height: 100% ;
    padding-top: 30px;
    /* background-color: #2b2e33 */
 }   
</style>