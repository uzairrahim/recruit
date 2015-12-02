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
		}).fail(function(){
			var response = [{"errorCode":0,"errorMsg":"Success","id":"0","guid":"d0a41756-f9c1-410c-a36e-eea1adb98b4f","name":"Any Job","description":"JobType for All jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"6","guid":"d0a41756-f9c1-410c-a36e-eea1adb98b4e","name":"Baker","description":"JobType for Baker jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"7","guid":"061127d1-b2a9-4903-8123-1efb21f414e8","name":"Bar-back","description":"JobType for Bar-back jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"20","guid":"4ed0ca2c-6503-4d52-9076-d350eacbfbe0","name":"Barista","description":"jobtype for barista jobs.","created":"2015-04-08T11:07:46.028Z","updated":"2015-04-08T11:07:46.028Z"},{"errorCode":0,"errorMsg":"Success","id":"1","guid":"6caf6fdc-69b9-4337-bf81-f6d25036dcce","name":"Bartender","description":"JobType for bartender jobs.","created":"2014-06-04T23:01:47.133Z","updated":"2014-06-04T23:01:47.133Z"},{"errorCode":0,"errorMsg":"Success","id":"8","guid":"50b4f9ae-4122-43c9-a830-ce851c5972cd","name":"Busser","description":"JobType for Busser jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"9","guid":"424ce08c-f8f1-4310-9c7b-36a9ea223dec","name":"Cashier","description":"JobType for Cashier jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"10","guid":"a9e72fd3-7b71-4dbc-8361-14dc9bf152f6","name":"Chef","description":"JobType for Chef jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"5","guid":"04e2c678-44ca-4927-9ee4-20760933a58e","name":"Cook","description":"JobType for cook jobs.","created":"2014-06-04T23:01:47.137Z","updated":"2014-06-04T23:01:47.137Z"},{"errorCode":0,"errorMsg":"Success","id":"17","guid":"9faa4dda-ee95-4118-ad89-c63e32c083dc","name":"Crew","description":"JobType for Crew jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"4","guid":"e32fceaf-d212-4f89-ad99-d54a937d3405","name":"Dishwasher","description":"JobType for dishwasher jobs.","created":"2014-06-04T23:01:47.137Z","updated":"2014-06-04T23:01:47.137Z"},{"errorCode":0,"errorMsg":"Success","id":"11","guid":"7631adbe-5466-4ff1-9aee-fd1c3cb2a2d4","name":"Driver","description":"JobType for Driver jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"18","guid":"2d2f7511-848b-4884-8a40-e99ce6d9f435","name":"Drive-Through","description":"JobType for Drive-Through jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"3","guid":"42cf6209-3e50-44ab-a015-b243bebe4ed2","name":"Host","description":"JobType for host jobs.","created":"2014-06-04T23:01:47.137Z","updated":"2014-06-04T23:01:47.137Z"},{"errorCode":0,"errorMsg":"Success","id":"12","guid":"80019b7b-03f5-461c-a846-ef11127392e3","name":"Manager","description":"JobType for Manager jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"13","guid":"e1073e37-7a4f-43fe-9eaa-d7d18f180f94","name":"Runner","description":"JobType for Runner jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"2","guid":"82d63fde-aaad-4b75-bda1-145a7e63b690","name":"Server","description":"JobType for server jobs.","created":"2014-06-04T23:01:47.137Z","updated":"2014-06-04T23:01:47.137Z"},{"errorCode":0,"errorMsg":"Success","id":"19","guid":"54899f0a-cd19-4a1d-b9fc-d79b01de27b7","name":"Sommelier","description":"JobType for Sommelier jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"14","guid":"0a16154c-0e95-4e98-898e-19072a00b1ae","name":"Sous Chef","description":"JobType for Sous Chef jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"16","guid":"a34376a0-e187-49df-9bc5-8158c2e3d723","name":"Team Member","description":"JobType for Team Member jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"},{"errorCode":0,"errorMsg":"Success","id":"15","guid":"118347af-6922-495e-9eee-0b0ef96a2f91","name":"Trainer","description":"JobType for Trainer jobs.","created":"2014-06-04T23:01:47.273Z","updated":"2014-06-04T23:01:47.273Z"}]
			callback(response);
		});	
	},

	getJobs : function(callback){
		var _this = this;
		$.ajax({
			type : 'GET',
			url : Utils.getBaseURL() + '/public/jobsearch?latitude=30.4152491&longitude=-97.68524599999999&start=0&rows=25',
			contentType : 'application/json',
			success : function(response){
				callback(response);
			}
		}).fail(function(){
			var response = {
				jobs : [
					{
						distance : '0.5',
						jobs : ['Server','Manager'],
						employer : {
							name : 'HotSchedules Bakery & Restaurant',
							logo : null,
						}
					},
					{
						distance : '3.5',
						jobs : ['Host','Manager','Team Member'],
						employer : {
							name : 'London Bakery',
							logo : null,
						}
					}
				]
			}
			callback(response);
		});
	}
	
}