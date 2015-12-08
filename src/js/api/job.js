'use strict';

var Utils = require('../utils');

module.exports = {

	_url : Utils.getBaseURL(),

	getJobTypes : function(callback){
		var _this = this;
		$.ajax({
			type : 'GET',
			url : _this._url + '/jobtypes',
			contentType : 'application/json'
		}).always(function(response){
			callback(response);
		});
	},

	getJobs : function(jobTypeGUID,location,callback){

		var _url = this._url + '/public/jobsearch?latitude='+location.geo.latitude+'&longitude='+location.geo.longitude+'&start=0&rows=25';

		if(jobTypeGUID !== null){
			_url += '&jobTypeGuid='+jobTypeGUID;
		}

		$.ajax({
			type : 'GET',
			url : _url,
			async : false,
			contentType : 'application/json'
		}).always(function(response){
			callback(response);
		});
	}
	
}