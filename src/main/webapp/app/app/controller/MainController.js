Ext.define('cwlover.controller.MainController',{
	extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainview:'mainview',
            loginpanel: 'loginpanel',
            goRegister:'#goRegister',
            doLogin:'#doLogin',
            registerpanel: 'registerpanel',
            goLogin:'#goLogin',
            doRegister:'#doRegister',
            varietyList:'varietyList',
            nearlist:'nearlist',
            mypets:'mypets'
        },

        control: {
            mainview:{
                activeitemchange:'onActiveItemChange'
            },
            mypets: {
                activate: 'onCheckLogined'
//                pop: 'onMainPop'
            },
            varietyList: {
                itemtap: 'onVarietySelect'
            }
        }
    },
    onActiveItemChange:function(tab,value){
        console.log("["+value.title+"] activated...");
    },
    onCheckLogined:function(newActiveItem, mypets, oldActiveItem){
    	console.log(cwlover.util.Config.location);
//    	console.log(newActiveItem);
//    	console.log(mypets);
//    	console.log(oldActiveItem);
//    	if (!this.loginpanel) {
//            this.loginpanel = Ext.widget('loginpanel');
//        }
//        this.loginpanel.setRecord(Ext.data.StoreManager.lookup('local').findRecord('key','token'));
//    	mypets.push(this.loginpanel);
    }
    // onMainPush: function(view, item) {
    //     var editButton = this.getEditButton();

    //     if (item.xtype == "contact-show") {
    //         this.getContacts().deselectAll();

    //         this.showEditButton();
    //     } else {
    //         this.hideEditButton();
    //     }
    // },

    // onMainPop: function(view, item) {
    //     if (item.xtype == "contact-edit") {
    //         this.showEditButton();
    //     } else {
    //         this.hideEditButton();
    //     }
    // },

    // onContactSelect: function(list, index, node, record) {
    //     var editButton = this.getEditButton();

    //     if (!this.showContact) {
    //         this.showContact = Ext.create('AddressBook.view.contact.Show');
    //     }

    //     // Bind the record onto the show contact view
    //     this.showContact.setRecord(record);

    //     // Push the show contact view into the navigation view
    //     this.getMain().push(this.showContact);
    // },

    // onContactEdit: function() {
    //     if (!this.editContact) {
    //         this.editContact = Ext.create('AddressBook.view.contact.Edit');
    //     }

    //     // Bind the record onto the edit contact view
    //     this.editContact.setRecord(this.getShowContact().getRecord());

    //     this.getMain().push(this.editContact);
    // },

    // onContactChange: function() {
    //     this.showSaveButton();
    // },

    // onContactSave: function() {
    //     var record = this.getEditContact().saveRecord();

    //     this.getShowContact().updateRecord(record);

    //     this.getMain().pop();
    // },

    // showEditButton: function() {
    //     var editButton = this.getEditButton();

    //     if (!editButton.isHidden()) {
    //         return;
    //     }

    //     this.hideSaveButton();

    //     editButton.show();
    // },

    // hideEditButton: function() {
    //     var editButton = this.getEditButton();

    //     if (editButton.isHidden()) {
    //         return;
    //     }

    //     editButton.hide();
    // },

    // showSaveButton: function() {
    //     var saveButton = this.getSaveButton();

    //     if (!saveButton.isHidden()) {
    //         return;
    //     }

    //     saveButton.show();
    // },

    // hideSaveButton: function() {
    //     var saveButton = this.getSaveButton();

    //     if (saveButton.isHidden()) {
    //         return;
    //     }

    //     saveButton.hide();
    // }
});