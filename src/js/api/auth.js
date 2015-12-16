'use strict';

import Utils from '../utils';

export default {

	_url : Utils.getBaseURL(),

	login(credentials,callback){
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

	logout(callback){
		$.ajax({
			type : 'POST',
			url : this._url + '/spring/authenticate/logout'
		}).always(function(response){
			callback(response)
		});
	}
	
}