'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Actions = require('../actions/auth'),
	AuthAPI = require('../api/auth'),
	Utils = require('../utils');

module.exports = Reflux.createStore({
	listenables : [Actions],
	getInitialState : function(){
		return {
			logged : false,
			emailaddress : null,
			password : null
		}
	},
	onLogin : function(credentials,callback){
		AuthAPI.login(credentials,function(response){
			callback(response);
		});
	},
	onLogout : function(){
		AuthAPI.logout(function(response){
			console.log(response);
		});
	},
	onSet : function(_options){
		this.trigger(_options);
	}
});