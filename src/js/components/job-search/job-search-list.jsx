'use strict';

import React from 'react';
import Reflux from 'reflux';
import Store from '../../stores/job-search';
import Img from '../elements/image.jsx';
import Utils from '../../utils';

var JobSearchList = React.createClass({
	mixins : [Reflux.connect(Store)],
	render(){
		return (				
			<ul id='search-result-list' className={'job-search select-list ' + (this.state.employers.length > 0 ? 'with-image' : '')}>
				{this._getJobList()}
			</ul>
		)
	},
	_onItemClickHandler(index){	
		this.props.onEmployerHandler(index);
	},
	_getJobList(){
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
		}else{
			return (
				<li className='not-selectable' key='0'>
					<div className='text-container'>
						<div className='text line-1'>No jobs found.</div>
						<div className='text line-2'>Try refining your search.</div>
					</div>
				</li>
			)
		}
	}
});

export default JobSearchList;