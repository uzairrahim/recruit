'use strict';

export default {

	_appConfig : {
		name : 'HotSchedules Recruit',
		version : '0.1.0',
		baseURL : 'http://10.10.12.36:8080/services/services/rest',
		defaultLocation : {
			city : 'Austin',
			country : 'USA',
			geo : {
				latitude : '30.2500',
				longitude : '-97.7500'
			},
			state : 'TX',
			zip : '78701'
		},
		google : {
			mapKey : 'AIzaSyDRIMgVwlD1T9YvqxVOHMGyxQyM1HxXSJs',
			defaultZoom : 13
		}
	},

	detectMobile : function(){
		return typeof window.orientation !== 'undefined'
	},

	scrollToLeft : function(element){
		$(element).animate({
			scrollLeft : '+=' + $(element)[0].scrollWidth
		},500)
	},

	scrollToTop : function(element){
		$(element).animate({
			scrollTop : 0
		},250)
	},

	isEmpty : function(value){
		return typeof value === 'undefined' || value === null;
	},

	isNotEmpty : function(value){
		return typeof value !== 'undefined' && value !== null;
	},

	getAppName : function(){
		return this._appConfig.name;
	},

	getAppVersion : function(){
		return this._appConfig.version;	
	},

	getBaseURL : function(){
		return this._appConfig.baseURL;
	},

	getDefaultLocation : function(){
		return this._appConfig.defaultLocation;
	},

	getGoogleMapsKey : function(){
		return this._appConfig.google.mapKey;
	},

	getAllJobsObject : function(){
		return {
			id : 0,
			guid : null,
			name : 'All Jobs',
			description : 'All job types'
		}
	},

	groupJobsByEmployer : function(jobs){
		var _employers = [];
		var _employerGUIDs = [];

		jobs.map(function(job){
			var _index = _employerGUIDs.indexOf(job.employer.guid);
			if(_index === -1){
				job.employer.jobPostings = [];
				job.employer.jobPostings.push(job.jobPosting);
				job.employer.distance = job.distance;
				_employers.push(job.employer);
				_employerGUIDs.push(job.employer.guid);
			}else{
				_employers[_index].jobPostings.push(job.jobPosting);
			}
		});

		return _employers;

	},

	getWageType : function(type){
		switch(type){
			case 'HOURLY':
				return 'hour'
			break;
			case 'WEEKLY':
				return 'week'
			break;
			case 'BIWEEKLY':
				return 'two weeks'
			break;
			case 'MONTHLY':
				return 'month'
			break;
			case 'ANNUALLY':
				return 'year'
			break;
		}
	},

	getFormattedAddress : function(location){
		var _formattedAddress = [];

		if(this.isNotEmpty(location.city)){
			_formattedAddress.push(location.city);
		}

		if(this.isNotEmpty(location.state) && this.isEmpty(location.zip)){
			_formattedAddress.push(location.state);
		}

		if(this.isNotEmpty(location.zip)){
			_formattedAddress.push(location.state + ' ' +location.zip);
		}

		if(this.isNotEmpty(location.country)){
			_formattedAddress.push(location.country);
		}

		return _formattedAddress.toString().replace(/,/g, ', ');
	},

	getDefaultMapZoom : function(){
		return this._appConfig.google.defaultZoom;
	},

	getUserFromResponse : function(response){
		return {
			guid : response.guid,
			email : response.email,
			firstname : response.firstname,
			lastname : response.lastname,
			returning : response.returning,
			location : response.location
		}
	}
}