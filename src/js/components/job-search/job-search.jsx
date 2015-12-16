'use strict';

import React from 'react';
import Reflux from 'reflux';
import JobSearchForm from './job-search-form.jsx';
import JobSearchList from './job-search-list.jsx';
import JobStore from '../../stores/job-search';
import JobActions from '../../actions/job-search';
import MapView from '../layout/map.jsx';
import Panel from '../layout/panel.jsx';
import EmployerCard from '../cards/employer.jsx';
import JobCard from '../cards/job.jsx';
import Utils from '../../utils';

var JobSearch = React.createClass({
	mixins : [Reflux.connect(JobStore)],
	render(){
		return (				
			<div id='app-body' className='app-body'>
				{this._getMap()}
				<Panel id='seach-panel' classes={'search ' + this._getSearchState()}>
					<JobSearchForm onMapIconClickHandler={this._onSearchPanelHandler}/>
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
	_getMap(){
		var _employers = this.state.employers;
		return <MapView location={this.state.location} markers={_employers} onMapCenterChangeHandler={this._onMapCenterChangeHandler} onListIconClickHandler={this._onSearchPanelHandler} onMarkerClickHander={this._onEmployerHandler}/>
	},
	_getEmployer(){
		if(this.state.employer !== null){
			var _employer = this.state.employer;
			return(
				<EmployerCard employer={_employer} onJobHandler={this._onJobHandler}/>
			)
		}
	},
	_getJob(){
		if(this.state.job !== null){
			var _job = this.state.job;
			return(
				<JobCard job={_job}/>
			)
		}
	},
	_getSearchState(){
		return this.state.searchPanel ? 'show' : '';
	},
	_getEmployerState(){
		return this.state.employerPanel ? 'show' : '';
	},
	_getJobState(){
		return this.state.jobPanel ? 'show' : '';
	},
	_onSearchPanelHandler(){
		var _state = this.state.searchPanel;
		this.setState({searchPanel : !_state});
	},
	_onEmployerHandler(index){
		JobActions.getEmployer(index);
		this.setState({employerPanel : true, jobPanel : false});
		Utils.scrollToLeft(document.getElementById('app-body'));
		Utils.scrollToTop(document.getElementById('employer-card'));
	},
	_onEmployerCloseHandler(){
		this.setState({employerPanel : false, jobPanel : false});
	},
	_onJobHandler(index){
		JobActions.getJob(index);
		this.setState({jobPanel : true});
		Utils.scrollToLeft(document.getElementById('app-body'));
	},
	_onJobCloseHandler(){
		this.setState({jobPanel : false});
	},
	_onMapCenterChangeHandler(location){
		JobActions.getJobs(this.state.jobTypeGUID, location);
		this.setState({employerPanel : false, jobPanel : false});
	}
});

export default JobSearch;