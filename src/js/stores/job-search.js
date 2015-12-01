'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Actions = require('../actions/job-search'),
	JobAPI = require('../api/job'),
	Utils = require('../utils');

module.exports = Reflux.createStore({
	listenables : [Actions],
	getInitialState : function(){
		return {
			employer : false,
			job : false,
			location : 'Current Location',
			jobs : null,
			jobTypes : []
		}
	},
	onGetJobs : function(callback){
		JobAPI.getJobs(function(response){
			this.trigger({'jobs' : response});
		}.bind(this));
	},
	onGetJobTypes : function(){
		JobAPI.getJobTypes(function(data){
			data.unshift(Utils.getAllJobsObject());
			this.trigger({'jobTypes' : data});
		}.bind(this));
	}
});