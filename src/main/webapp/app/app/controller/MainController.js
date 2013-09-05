Ext.define('cwlover.controller.MainController',{
	extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainview:'mainview',
<<<<<<< HEAD
            registerButton:'#register',
            loginButton:'#login',
            loginpanel: 'loginpanel',
            registerpanel: 'registerpanel',
=======
            goRegister:'#goRegister',
            goLogin:'#goLogin',
            loginpanel: 'loginpanel',
            registerpanel: 'registerpanel',
            doRegister:'#doRegister',
            doLogin:'#doLogin',
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
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
<<<<<<< HEAD
            regisutton:{	
            	tab:'onShowRegister'
            },
            loginButton:{
				tab:'onShowLogin'            
=======
            goRegister:{	
            	tap:'onShowRegister'
            },
            goLogin:{
				tap:'onShowLogin'            
            },
            doRegister:{	
            	tap:'onSubmitRegister'
            },
            doLogin:{
				tap:'onSubmitLogin'            
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
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
<<<<<<< HEAD
		        if(!success){
		        	if (!this.loginpanel) {
			            this.loginpanel = Ext.widget('loginpanel');
			        }
		        	this.getUcenter().push(this.loginpanel);
			        this.getRegisterButton().show();
		        }else{
		        	this.getRegisterButton().hide();
=======
		        if(success){
			        this.getGoRegister().hide();
		        	this.getGoLogin().hide();
		        }else{
		        	this.getGoRegister().hide();
		        	this.getGoLogin().show();
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
		        }
		    },
		    scope: this
		});
<<<<<<< HEAD
    },
    onShowRegister:function(){
    	if (!this.registerpanel) {
            this.registerpanel = Ext.widget('registerpanel');
        }
    	this.getUcenter().setActiveItem(this.registerpanel);
    	this.getRegisterButton().hide();
    	this.getLoginButton().hide();
=======
    },
    onShowRegister:function(){
    	if (!this.registerpanel) {
            this.registerpanel = Ext.widget('registerpanel');
        }
    	this.getUcenter().setActiveItem(this.registerpanel);
    	this.getGoRegister().hide();
    	this.getGoLogin().show();
    },
    onShowLogin:function(){
    	if (!this.loginpanel) {
            this.loginpanel = Ext.widget('loginpanel');
        }
    	this.getUcenter().setActiveItem(this.loginpanel);
    	this.getGoLogin().hide();
    	this.getGoRegister().show();
    },
    onSubmitRegister:function(){
    	this.getRegisertpanel().submit({
    		method :'GET',
    		url:'http://localhost:8080/public/register',
    		waitMsg:'登录验证中...',
    		success:function(form,result){
    			console.log(result);
    		},
    		failure :function(form,result){
    			console.log(result);
    		}
    	});
    },
    onSubmitLogin:function(){
    	this.getLoginpanel().submit({
    		method :'GET',
    		url:'http://localhost:8080/public/login',
//    		waitMsg:'登录验证中...',
    		success:function(form,result){
    			console.log(result);
    		},
    		failure :function(form,result){
    			console.log(result);
    		}
    	});
>>>>>>> 61e0b7ab79b4b6ef42414006eb80ad4a5e30482b
    }
});