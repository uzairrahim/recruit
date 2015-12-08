'use strict';

var Utils = require('../utils');

module.exports = {

	_url : Utils.getBaseURL(),

	login : function(credentials,callback){
		$.ajax({
			type : 'POST',
			url : this._url + '/auth/login',
			contentType : 'application/json',
			dataType : 'json',
			data : JSON.stringify(credentials)
		}).always(function(response){
			callback(response);
		});
	},

	logout : function(callback){
		$.ajax({
			type : 'POST',
			url : this._url + '/spring/authenticate/logout'
		}).always(function(response){
			callback(response)
		});
	}
	
}