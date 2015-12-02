'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Actions = require('../actions/job-search'),
	JobAPI = require('../api/job'),
	Utils = require('../utils');

module.exports = Reflux.createStore({
	listenables : [Actions],
	_employers : [],
	_selectedEmployerIndex : null,
	getInitialState : function(){
		return {
			employerPanel : false,
			jobPanel : false,
			location : 'Current Location',
			jobs : null,
			jobTypes : [],
			employers: this._employers,
			employer : null,
			job : null
		}
	},
	onGetJobs : function(callback){
		JobAPI.getJobs(function(response){
			this._employers = Utils.groupJobsByEmployer(response.jobs);
			this.trigger({'employers' : this._employers});
		}.bind(this));
	},
	onGetJobTypes : function(){
		JobAPI.getJobTypes(function(data){
			data.unshift(Utils.getAllJobsObject());
			this.trigger({'jobTypes' : data});
		}.bind(this));
	},
	onGetEmployer : function(index){
		var _employer = this._employers[index];
		this._selectedEmployerIndex = index;
		this.trigger({'employer' : _employer});
	},
	onGetJob : function(index){
		var _job = this._employers[this._selectedEmployerIndex].jobPostings[index];
		this.trigger({'job' : _job});
	},
});