'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Store = require('../../stores/job-search'),
	Img = require('../image.jsx');

module.exports = React.createClass({
	mixins : [Reflux.connect(Store)],
	render : function(){
		return (				
			<ul id='search-result-list' className='job-search select-list with-image'>
				{this._getJobList()}
			</ul>
		)
	},
	_onItemClickHandler : function(){	
		this.props.onEmployerHandler();
	},
	_getJobList : function(){
		if(this.state.jobs !== null){
			var _jobs = this.state.jobs.jobs;
			return _jobs.map(function(job,index){
				return (
					<li onClick={this._onItemClickHandler} key={index}>
						{job.employer.logo !== null ? <Img classes='store' source={job.employer.logo.url}/> : <Img classes='store'/>}
						<div className='text-container'>
							<div className='text line-1'>{job.employer.name}</div>
							<div className='text line-2'>2 jobs - {job.distance} miles away</div>
						</div>
					</li>
				)
			}.bind(this));
		}
	}
});