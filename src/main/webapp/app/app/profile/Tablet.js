Ext.define('cwlover.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: ['Main'],

    isActive: function() {
        return Ext.os.is('Tablet');
    }
});