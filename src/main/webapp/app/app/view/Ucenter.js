Ext.define('cwlover.view.Ucenter', {
	extend : 'Ext.NavigationView',
	xtype : 'ucenter',

	config : {
		title : '用户中心',
        iconCls: 'user',

<<<<<<< HEAD
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
=======
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
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
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
