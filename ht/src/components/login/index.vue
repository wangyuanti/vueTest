<template>
 <Row id="Login">
    <Col span="8" offset="8" style="background:#eee;padding: 20px;">
         <Card :bordered="false">
            <p slot="title">管理员登录</p>
            <p>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" >
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username" ref="userName">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password" ref="password">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')" style='float:right'>登录</Button>
                    </FormItem>
                </Form> 
            </p>
        </Card>
    </Col>
</Row>
</template>

<script>
    export default {
        name:"Login",
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        let _this = this;
                        this.$store.commit('addLoginData',{userName:this.$refs.userName.value,password:this.$refs.password.value,_this:_this});
                        this.$store.dispatch('Login');
                        // this.$Message.success('登录成功!');
                    } else {
                        this.$Message.error('用户名与密码不能为空');
                    }
                })
                
                
            }
        }

    }
</script>

<style scoped>
#Login{
    margin-top: 10%
}
</style>