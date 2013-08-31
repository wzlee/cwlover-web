Ext.define('cwlover.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainview',

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: '附近宠物',
                iconCls: 'maps',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: '附近宠物'
                    },
                    {
                        xtype: 'nearlist',
                        useSimpleItems: true,
                        variableHeights: true
                    }
                ]
            },
            {
                title: '宠物商城',
                iconCls: 'bookmarks',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: '欢迎来到宠物商城'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                xtype:'varietylist',
                title: '宠物百科',
                iconCls: 'favorites',
                useSimpleItems: true,
                variableHeights: true
            },
            {
                xtype:'mypets',
                title: '我的宠物',
                iconCls: 'settings',
                useSimpleItems: true,
                variableHeights: true
            }
        ]
    }
});
