Ext.define('cwlover.view.RegisterPanel', {
    extend: 'Ext.Panel',
    xtype: 'registerpanel',

    config: {
        // margin:10,
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: '用户注册',
                items: [
                    {
                        xtype: 'button',
                        text:'登录',
                        id:'goLogin',
                        ui:'forward'
                    },
                    { xtype: 'spacer' },
                    {
                        xtype: 'button',
                        text:'注册',
                        id:'doRegister',
                        ui: 'action'
                    }
                ]
            },
            {
                xtype:'container',
                layout:'vbox',
                margin:10,
                items:[
                    {
                        xtype: 'textfield',
                        name: 'userName',
                        label: '账号:',
                        labelWrap:true,
                        placeHolder:'请输入账号...',
                        required:true
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name: 'password',
                        label: '密码:',
                        labelWrap:true,
                        placeHolder:'请输入密码...',
                        required:true
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name: 'password',
                        label: '密码:',
                        labelWrap:true,
                        placeHolder:'请再次输入密码...',
                        required:true
                    }
                ]
            }
        ]
    },
    formSubmit:function(){
        console.log('register...');
    }
});
