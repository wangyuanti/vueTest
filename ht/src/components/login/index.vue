<template>
    <div style="background:#eee;padding: 20px;width:400px">
        <Card :bordered="false">
            <p slot="title">管理员登录</p>
            <p>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" >
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formInline')" style='float:right'>登录</Button>
                    </FormItem>
                </Form> 
            </p>
        </Card>
    </div>
    
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
                        { type: 'string',  trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登录成功!');
                    } else {
                        this.$Message.error('输入有误');
                    }
                })
            }
        }

    }
</script>

<style scoped>
#Login{
    background-color: blanchedalmond;
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000000;
}
</style>