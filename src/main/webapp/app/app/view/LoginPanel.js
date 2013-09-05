Ext.define('cwlover.view.LoginPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'loginpanel',

    config: {
     	margin:10,
        items: [
            {
<<<<<<< HEAD
                xtype:'container',
                layout:'vbox',
                margin:10,
=======
             	xtype: 'fieldset',
                title: '',
        		instructions: '忘记密码请联系管理员!',
                defaults: {
                    labelWidth: '35%'
                },
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
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
                        name : 'keepLogin',
                        label: '保持登录',
                        checked: true
                    }
                ]
            },
            {
            	xtype:'button',
            	id:'doLogin',
            	text:'登录'
            }
        ]
    }
});
