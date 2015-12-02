'use strict';

module.exports = {

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
			mapKey : 'AIzaSyDRIMgVwlD1T9YvqxVOHMGyxQyM1HxXSJs'
		}
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

	detectMobile : function(){
		return typeof window.orientation !== 'undefined'
	},

	scrollToLeft : function(element){
		$(element).animate({
			scrollLeft : '+=' + $(element)[0].scrollWidth
		},500)
	},

	getAllJobsObject : function(){
		return {
			id : 0,
			guid : null,
			name : 'All Jobs',
			description : 'All job types'
		}
	}
}