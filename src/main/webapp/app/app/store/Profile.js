Ext.define('cwlover.store.Profile', {
    extend: 'Ext.data.Store',
	
    config: {
        model: 'cwlover.model.Profile',
<<<<<<< HEAD
//        autoLoad: true,
=======
        autoLoad: true,
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
        proxy: {
            type: 'jsonp',
            url: 'http://localhost:8080/public/profile'
        }
    }
});
