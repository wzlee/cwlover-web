/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({
    name: 'cwlover',

    requires: [
    	'cwlover.util.Config',
        'Ext.MessageBox',
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Map',
        'Ext.data.proxy.JsonP',
        'Ext.field.Search',
        'Ext.field.Checkbox',
        'Ext.List',
        'Ext.Toolbar',
        'Ext.Panel',
        'Ext.device.Geolocation',
        'Ext.data.proxy.LocalStorage'
    ],
	profiles: ['Phone', 'Tablet'],
    models: ['Local','Pet','Variety','Profile'],
    stores: ['Local','Variety','Profile'],
    views: ['Main','LoginPanel','RegisterPanel','VarietyList','NearPets','ProfileList','Ucenter'],
    controllers:['MainController'],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('cwlover.view.Main'));
        var local = Ext.data.StoreManager.lookup('local');
        if(local == undefined){
            local = Ext.create('cwlover.store.Local',{
                storeId:'local',
                data:[{id:'location',key:'location',value:null}]
            });
        }
        var token = local.findRecord('key','token');
        var location = local.findRecord('key','location');
        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: false,
            listeners: {
                locationupdate: function(geo) {
                    location.set('location',[geo.getLongitude(),geo.getLatitude()]);
                },
                locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    if(bTimeout){
                        alert('Timeout occurred.');
                    } else {
                        alert('Error occurred.');
                    }
                }
            }
        });
        geo.updateLocation();
        cwlover.util.Config.location = location;
        cwlover.util.Config.token = token;
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
