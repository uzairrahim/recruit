'use strict';

import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/auth';
import AuthAPI from '../api/auth';
import Utils from '../utils';

var Auth = Reflux.createStore({
	listenables : [Actions],
	getInitialState(){
		return {
			logged : false,
			emailaddress : null,
			password : null
		}
	},
	onLogin(credentials,callback){
		AuthAPI.login(credentials,function(response){
			callback(response);
		});
	},
	onLogout(callback){
		AuthAPI.logout(function(response){
			callback(response);
		});
	},
	onSet(_options){
		this.trigger(_options);
	}
});

export default Auth;