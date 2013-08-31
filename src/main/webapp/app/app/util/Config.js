Ext.define('cwlover.util.Config', {
    singleton : true,

    config : {
        client:null,
        location:null,
        token:null
    },
    constructor : function(config) {
        this.initConfig(config);
    }
});