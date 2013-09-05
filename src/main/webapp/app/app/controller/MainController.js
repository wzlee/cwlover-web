Ext.define('cwlover.controller.MainController',{
	extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainview:'mainview',
            goRegister:'#goRegister',
            goLogin:'#goLogin',
            loginpanel: 'loginpanel',
            registerpanel: 'registerpanel',
            doRegister:'#doRegister',
            doLogin:'#doLogin',
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
		        if(success){
			        this.getGoRegister().hide();
		        	this.getGoLogin().hide();
		        }else{
		        	this.getGoRegister().hide();
		        	this.getGoLogin().show();
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
    }
});