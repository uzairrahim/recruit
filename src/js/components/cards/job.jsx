'use strict';

var React = require('react'),
	Moment = require('moment'),
	Numeral = require('numeral'),
	Utils = require('../../utils');

module.exports = React.createClass({
	render : function(){
		var _job = this.props.job;
		return (
			<div className='panel-wrapper'>
				<div className='panel-info-container no-margin'>
					<h3>{_job.jobName}</h3>
					{this._getWage()}
				</div>
				<div className='panel-actions-container'>
					<button id='share-job' className='primary'>Share</button>
					{this._getApply()}
				</div>
				<p>
					<span className='heading'>Job Description</span><br/><br/>{_job.description !== '' ? _job.description : 'Not Available'}
				</p>
			</div>
		)
	},
	_getWage : function(){
		var _job = this.props.job;
		var _posted = _job.posted;
		var _date = Moment(_posted).format('MMM DD, YYYY');
		if(_job.wage !== null){
			return(
				<h4>Wage: {Numeral(_job.wage).format('$0,0.00')}/{Utils.getWageType(_job.wageType)}<br/><span className='small'>Posted: {_date}</span></h4>
			)
		}else{
			return(
				<h4><span className='small'>Posted: {_date}</span></h4>
			)
		}
	},
	_getApply : function(){
		var _job = this.props.job;
		if(_job.currentUserIsCandidate){
			return(<button id='apply-job' className=''>Applied</button>)
		}else{
			return(<button id='apply-job' className='primary'>Apply</button>)
		}
	}
});