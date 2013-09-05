Ext.define('cwlover.view.ProfileList', {
    extend: 'Ext.List',
    xtype: 'profilelist',

    config: {
<<<<<<< HEAD
//        masked: {
//            xtype: 'loadmask',
//            message: '信息加载中...'
//        },
=======
        masked: {
            xtype: 'loadmask',
            message: '信息加载中...'
        },
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
        store: 'Profile',
        emptyText:'<img src="resources/icons/pet.png"/><br>请先登录!',
        itemTpl: [
            '<div style="margin:10 20;">',
                '<span>{label}</span><span style="float:right">{text}</span>',
            '</div>'
        ]
    }
});
