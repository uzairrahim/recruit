'use strict';

var Utils = require('../utils');

module.exports = {

	_url : Utils.getBaseURL(),

	getJobTypes : function(callback){
		$.ajax({
			type : 'GET',
			url : Utils.getBaseURL() + '/jobtypes',
			contentType : 'application/json',
			success : function(response){
				callback(response);
			}
		});
	},

	getJobs : function(jobTypeGUID,location,callback){

		var _url = Utils.getBaseURL() + '/public/jobsearch?latitude='+location.geo.latitude+'&longitude='+location.geo.longitude+'&start=0&rows=25';

		if(jobTypeGUID !== null){
			_url += '&jobTypeGuid='+jobTypeGUID;
		}

		$.ajax({
			type : 'GET',
			url : _url,
			contentType : 'application/json',
			success : function(response){
				callback(response);
			}
		});
	}
	
}