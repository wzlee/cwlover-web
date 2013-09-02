Ext.define('cwlover.controller.MainController',{
	extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainview:'mainview',
            registerButton:'#register',
            loginButton:'#login',
            loginpanel: 'loginpanel',
            registerpanel: 'registerpanel',
            varietyList:'varietyList',
            nearlist:'nearlist',
            profilelist:'profilelist',
            ucenter:'ucenter'
        },

        control: {
            mainview:{
                activeitemchange:'onActiveItemChange'
            },
            varietyList: {
                itemtap: 'onVarietySelect'
            },
            regisutton:{	
            	tab:'onShowRegister'
            },
            loginButton:{
				tab:'onShowLogin'            
            },
            ucenter: {
                activate: 'onLoadProfile'
//                pop: 'onMainPop'
            }
        }
    },
    onActiveItemChange:function(tab,value){
//        console.log("["+value.title+"] activated...");
    },
    onLoadProfile:function(list){
    	this.getProfilelist().getStore().load({
		    callback: function(records, operation, success) {
		        if(!success){
		        	if (!this.loginpanel) {
			            this.loginpanel = Ext.widget('loginpanel');
			        }
		        	this.getUcenter().push(this.loginpanel);
			        this.getRegisterButton().show();
		        }else{
		        	this.getRegisterButton().hide();
		        }
		    },
		    scope: this
		});
    },
    onShowRegister:function(){
    	if (!this.registerpanel) {
            this.registerpanel = Ext.widget('registerpanel');
        }
    	this.getUcenter().setActiveItem(this.registerpanel);
    	this.getRegisterButton().hide();
    	this.getLoginButton().hide();
    }
});