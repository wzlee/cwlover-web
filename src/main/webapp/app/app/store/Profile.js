Ext.define('cwlover.store.Profile', {
    extend: 'Ext.data.Store',
	
    config: {
        model: 'cwlover.model.Profile',
//        autoLoad: true,
        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/public/profile'
        }
    }
});
