Ext.define('cwlover.view.MyPets', {
    extend: 'Ext.navigation.View',
    xtype: 'mypets',

    config: {
        masked: {
            xtype: 'loadmask',
            message: '努力加载中...'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    { 
                    	xtype: 'button',
                    	text:'注册',
                    	ui:'action'
                	},
                	{ 
                    	xtype: 'button',
                    	text:'登录',
                    	ui:'action'
                	}
                ]
            }
        ]
    }
});
