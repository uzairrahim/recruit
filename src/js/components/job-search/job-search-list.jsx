'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Store = require('../../stores/job-search'),
	Img = require('../image.jsx'),
	Utils = require('../../utils');

module.exports = React.createClass({
	mixins : [Reflux.connect(Store)],
	render : function(){
		return (				
			<ul id='search-result-list' className='job-search select-list with-image'>
				{this._getJobList()}
			</ul>
		)
	},
	_onItemClickHandler : function(index){	
		this.props.onEmployerHandler(index);
	},
	_getJobList : function(){
		var _employers = this.state.employers;
		if(_employers.length > 0){			
			return _employers.map(function(employer,index){
				return (
					<li onClick={this._onItemClickHandler.bind(this,index)} key={index}>
						{employer.logo !== null ? <Img classes='store' source={employer.logo.url}/> : <Img classes='store'/>}
						<div className='text-container'>
							<div className='text line-1'>{employer.name}</div>
							<div className='text line-2'>{employer.jobPostings.length} job{employer.jobPostings.length === 1 ? '' : 's'} - {employer.distance} miles away</div>
						</div>
					</li>
				)
			}.bind(this));
		}
	}
});