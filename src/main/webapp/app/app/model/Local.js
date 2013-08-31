Ext.define('cwlover.model.Local', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['id','key','value'],
        proxy: {
            type: 'localstorage',
            id:'localstorage'
        }
    }
});
