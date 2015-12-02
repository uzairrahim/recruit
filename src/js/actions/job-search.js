'use strict';

var React = require('react'),
	Reflux = require('reflux');

module.exports = Reflux.createActions([
	'getJobs',
	'getJobTypes',
	'getEmployer',
	'getJob'
]);