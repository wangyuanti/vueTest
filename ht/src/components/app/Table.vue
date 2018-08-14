<template>
    <Row id='Table'>
        <Col span="4" class="logo">
            <h1><router-link to="/">后台管理系统</router-link></h1>
        </Col>
        <Col span="20" class="login">
            <Dropdown class="login-zt">
                <a href="javascript:void(0)">
                    <span v-show="userOnOff">欢迎，XXX</span>
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>退出登录</DropdownItem>
                </DropdownMenu>
            </Dropdown>           
        </Col>
    </Row>
</template>

<script>
    export default {
        name:"Table",
        data(){
            return{
                userOnOff : true
            }
            
        }
    }
</script>

<style scoped>
#Table{
    height: 60px;
    -moz-box-shadow:0px 1px 3px #888888;
    -webkit-box-shadow:0px 1px 3px #888888; 
    box-shadow:0px 1px 3px #888888;
}
#Table .logo{
    height: 100%;
    line-height: 60px;
    text-align: center;
    background-color: #2d8cf0;
    
}
#Table .login{
    position: relative;
}
#Table .login-zt{    
    height: 100%;
    line-height: 60px;
    font-size: 14px;
    float: right;
    margin-right: 40px;
} 
#Table .login-zt a{
    color: black;
}
#Table h1 a{
    color: azure; 
}
</style>