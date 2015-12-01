'use strict';

module.exports = {

	_baseURL : 'http://10.10.12.36:8080/services/services/rest',

	_appConfig : {
		name : 'HotSchedules Recruit',
		version : '0.1.0'
	},

	getBaseURL : function(){
		return this._baseURL;
	},

	getAppName : function(){
		return this._appConfig.name;
	},

	getAppVersion : function(){
		return this._appConfig.version;	
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