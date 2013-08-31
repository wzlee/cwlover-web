Ext.define('cwlover.view.LoginPanel', {
    extend: 'Ext.Panel',
    xtype: 'loginpanel',

    config: {
        // margin:10,
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: '用户登录',
                items: [
                    {
                        xtype: 'button',
                        text:'注册',
                        id:'goRegister',
                        ui:'forward'
                    },
                    { xtype: 'spacer' },
                    {
                        xtype: 'button',
                        text:'登录',
                        id:'doLogin',
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
                        placeHolder:'请输入登录账号...',
                        required:true
                    },
                    {
                        xtype: 'textfield',
                        inputType:'password',
                        name: 'password',
                        label: '密码:',
                        labelWrap:true,
                        placeHolder:'请输入登录密码...',
                        required:true
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'storeUsername',
                        label: '记住账号',
                        checked: true
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'keepLogin',
                        label: '保持登录',
                        checked: true
                    }
                ]
            }
        ]
    },
    formSubmit:function(){
        console.log('login...');
    }
});
