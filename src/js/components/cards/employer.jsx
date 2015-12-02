'use strict';

var React = require('react'),
	Img = require('../image.jsx');

module.exports = React.createClass({
	render : function(){
		var _employer = this.props.employer;
		console.log(_employer);
		return (
			<div id='employer-card' className='panel-wrapper'>
				{_employer.logo !== null ? <Img classes='store' source={_employer.logo.url}/> : <Img classes='store'/>}
				<div className='panel-info-container'>
					<h3 className='center'>{_employer.name}</h3>
					<h4 className='center'>{_employer.location.address1}, {_employer.location.city} {_employer.location.state} {_employer.location.zip}<br/><span className='small'>{_employer.distance} miles away</span></h4>
				</div>
				<div className='panel-actions-container'>
					<button id='like-employer' className='primary'>Like</button>
					<button id='follow-employer' className='primary'>Follow</button>
				</div>
				<p>
					<span className='heading'>Jobs</span>
				</p>
				{this._getJobs()}
				<p>
					<span className='heading'>About</span>
					<br/><br/>
					{_employer.about}
					<br/><br/>
				</p>
			</div>
		)
	},
	_getJobs : function(){
		var _employer = this.props.employer;
		var _jobs = _employer.jobPostings;
		if(_jobs.length > 0){
			return(
				<ul id='job-list' className='employer-job-list select-list'>
					{
						_jobs.map(function(job,index){
							return (
								<li onClick={this._onJobHandler.bind(this,index)} key={index}>
									<div className='text-container'>
										<div className='text line-1 link'>{job.jobName}</div>
									</div>
								</li>
							)
						}.bind(this))

					}
				</ul>
			)
		}
	},
	_onJobHandler : function(index){
		this.props.onJobHandler(index);
	},
});