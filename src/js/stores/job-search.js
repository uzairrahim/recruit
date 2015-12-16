'use strict';

import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/job-search';
import JobAPI from '../api/job';
import Utils from '../utils';

var JobSearch = Reflux.createStore({
	listenables : [Actions],
	_employers : [],
	_selectedEmployerIndex : null,
	getInitialState(){
		return {
			searchPanel : true,
			employerPanel : false,
			jobPanel : false,
			formattedAddress : Utils.getFormattedAddress(Utils.getDefaultLocation()),
			location : Utils.getDefaultLocation(),
			jobs : null,
			jobTypes : [],
			jobTypeGUID : null,
			employers: this._employers,
			employer : null,
			job : null
		}
	},
	onGetJobs(jobTypeGUID,location){

		var _invalidJobTypeGuid = typeof jobTypeGUID === 'undefined';

		if(_invalidJobTypeGuid){
			jobTypeGUID = null;
		}

		var _invalidLocation = typeof location === 'undefined' || location === null;

		if(_invalidLocation){
			location = Utils.getDefaultLocation();
		}

		this.trigger({jobTypeGUID : jobTypeGUID});

		JobAPI.getJobs(jobTypeGUID, location, function(response){
			this._employers = Utils.groupJobsByEmployer(response.jobs);
			this.trigger({'employers' : this._employers});
		}.bind(this));
	},
	onGetJobTypes(){
		JobAPI.getJobTypes(function(data){
			data.unshift(Utils.getAllJobsObject());
			this.trigger({'jobTypes' : data});
		}.bind(this));
	},
	onGetEmployer(index){
		var _employer = this._employers[index];
		this._selectedEmployerIndex = index;
		this.trigger({'employer' : _employer});
	},
	onGetJob(index){
		var _job = this._employers[this._selectedEmployerIndex].jobPostings[index];
		this.trigger({'job' : _job});
	},
	onSet(_options){
		this.trigger(_options);
	}
});

export default JobSearch;