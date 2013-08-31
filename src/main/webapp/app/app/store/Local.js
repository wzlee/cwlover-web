Ext.define('cwlover.store.Local', {
    extend: 'Ext.data.Store',

    config: {
        model:'cwlover.model.Local',
        autoLoad:true,
        autoSync:true
    }
});
