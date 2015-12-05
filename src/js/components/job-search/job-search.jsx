'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	JobSearchForm = require('./job-search-form.jsx'),
	JobSearchList = require('./job-search-list.jsx'),
	JobStore = require('../../stores/job-search'),
	JobActions = require('../../actions/job-search'),
	Map = require('../layout/map.jsx'),
	Panel = require('../layout/panel.jsx'),
	EmployerCard = require('../cards/employer.jsx'),
	JobCard = require('../cards/job.jsx'),
	Utils = require('../../utils');

module.exports = React.createClass({
	mixins : [Reflux.connect(JobStore)],
	render : function(){
		return (				
			<div id='app-body' className='app-body'>
				{this._getMap()}
				<Panel id='seach-panel' classes='search show'>
					<JobSearchForm/>
					<JobSearchList onEmployerHandler={this._onEmployerHandler}/>
				</Panel>
				<Panel id='employer-panel' classes={'employer delayed ' + this._getEmployerState()} closeable={true} onCloseHandler={this._onEmployerCloseHandler}>
					{this._getEmployer()}
				</Panel>
				<Panel id='job-panel' classes={'job ' + this._getJobState()} closeable={true} onCloseHandler={this._onJobCloseHandler}>
					{this._getJob()}
				</Panel>
			</div>
		)
	},
	_getMap : function(){
		if(!Utils.detectMobile()){
			return <Map location={this.state.location}/>
		}
	},
	_getEmployer : function(){
		if(this.state.employer !== null){
			var _employer = this.state.employer;
			return(
				<EmployerCard employer={_employer} onJobHandler={this._onJobHandler}/>
			)
		}
	},
	_getJob : function(){
		if(this.state.job !== null){
			var _job = this.state.job;
			return(
				<JobCard job={_job}/>
			)
		}
	},
	_getEmployerState : function(){
		return this.state.employerPanel ? 'show' : '';
	},
	_getJobState : function(){
		return this.state.jobPanel ? 'show' : '';
	},
	_onEmployerHandler : function(index){
		JobActions.getEmployer(index);
		this.setState({employerPanel : true, jobPanel : false});
		Utils.scrollToLeft(document.getElementById('app-body'));
		Utils.scrollToTop(document.getElementById('employer-card'));
	},
	_onEmployerCloseHandler : function(){
		this.setState({employerPanel : false, jobPanel : false});
	},
	_onJobHandler : function(index){
		JobActions.getJob(index);
		this.setState({jobPanel : true});
		Utils.scrollToLeft(document.getElementById('app-body'));
	},
	_onJobCloseHandler : function(){
		this.setState({jobPanel : false});
	}
});