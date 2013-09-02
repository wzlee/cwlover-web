Ext.define('cwlover.view.Ucenter', {
	extend : 'Ext.NavigationView',
	xtype : 'ucenter',

	config : {
		title : '用户中心',
        iconCls: 'user',

        autoDestroy: false,
        navigationBar: {
//            ui: 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'register',
                    text: '注册',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },
                {
                    xtype: 'button',
                    id: 'login',
                    text: '登录',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
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
