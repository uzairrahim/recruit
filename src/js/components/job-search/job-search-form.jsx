'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Store = require('../../stores/job-search'),
	Actions = require('../../actions/job-search');

module.exports = React.createClass({
	mixins : [Reflux.connect(Store)],
	componentWillMount : function(){
		Actions.getJobTypes();
		Actions.getJobs();
	},
	render : function(){
		return (				
			<div id='search-form-container' className='search-form-container'>
				<h3 id='container-heading'>Job Search</h3>
				<div id='filter-icon' className='filter-icon'></div>
				<select>
					{this.state.jobTypes.map(function(type,index){
						return (
							<option key={index}>{type.name}</option>
						)
					})}
				</select>
				<input type='text' id='search-location' placeholder='Location' value={this.state.location} onChange={this._onLocationChangeHandler}/>
				<button id='search-button' className='primary' onClick={this._onSearchHandler}>Search Jobs</button>
			</div>
		)
	},
	_onLocationChangeHandler : function(event){
		this.setState({location : event.target.value});
	},
	_onSearchHandler : function(){
		Actions.getJobs();
	}
});