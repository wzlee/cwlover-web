Ext.define('cwlover.store.Pet', {
    extend: 'Ext.data.Store',

    config: {
        model: 'cwlover.model.Pet',
        autoLoad: true,
        sorters: 'nickName',
        grouper: {
            groupFn: function(record) {
                return record.get('variety')[0];
            }
        },
        proxy: {
            type: 'jsonp',
            url: 'localhost:8080/public/variety'
        }
    }
});
