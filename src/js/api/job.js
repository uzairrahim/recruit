'use strict';

var Utils = require('../utils');

module.exports = {

	_url : Utils.getBaseURL(),

	getJobTypes : function(callback){
		var _this = this;
		$.ajax({
			type : 'GET',
			url : Utils.getBaseURL() + '/jobtypes',
			contentType : 'application/json',
			success : function(response){
				callback(response);
			}
		});
	},

	getJobs : function(location,callback){
		var _this = this;
		$.ajax({
			type : 'GET',
			url : Utils.getBaseURL() + '/public/jobsearch?latitude='+location.geo.latitude+'&longitude='+location.geo.longitude+'&start=0&rows=25',
			contentType : 'application/json',
			success : function(response){
				callback(response);
			}
		});
	}
	
}