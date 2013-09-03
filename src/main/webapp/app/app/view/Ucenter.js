Ext.define('cwlover.view.Ucenter', {
	extend : 'Ext.NavigationView',
	xtype : 'ucenter',

	config : {
		title : '用户中心',
        iconCls: 'user',

        defaultBackButtonText:'返回',
        autoDestroy: false,
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'goRegister',
                    text: '注册',
                    ui:'action',
                    align: 'right'
                },
                {
                    xtype: 'button',
                    id: 'goLogin',
                    text: '登录',
                    ui:'action',
                    align: 'right'
//                    hideAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeOut',
//                        duration: 200
//                    },
//                    showAnimation: Ext.os.is.Android ? false : {
//                        type: 'fadeIn',
//                        duration: 200
//                    }
                }
            ]
        },
		items: [
			{
				xtype: 'profilelist'
			}
		]
	},

	initialize : function() {
		this.callParent();
	}
});
