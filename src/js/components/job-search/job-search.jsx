'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	JobSearchForm = require('./job-search-form.jsx'),
	JobSearchList = require('./job-search-list.jsx'),
	Store = require('../../stores/job-search'),
	Map = require('../layout/map.jsx'),
	Panel = require('../layout/panel.jsx'),
	Img = require('../image.jsx'),
	Utils = require('../../utils');

module.exports = React.createClass({
	mixins : [Reflux.connect(Store)],
	render : function(){
		return (				
			<div id='app-body' className='app-body'>
				{this._getMap()}
				<Panel id='seach-panel' classes='search show'>
					<JobSearchForm/>
					<JobSearchList onEmployerHandler={this._onEmployerHandler}/>
				</Panel>
				<Panel id='employer-panel' classes={'employer delayed ' + this._getEmployerState()} closeable={true} onCloseHandler={this._onEmployerCloseHandler}>
					<div className='panel-wrapper'>
						<Img classes='store'/>
						<div className='panel-info-container'>
							<h3 className='center'>London Bakery</h3>
							<h4 className='center'>6504 Bridge Point Parkway, Austin TX 78730<br/><span className='small'>0.5 miles away</span></h4>
						</div>
						<div className='panel-actions-container'>
							<button id='like-employer' className='primary'>Like</button>
							<button id='follow-employer' className='primary'>Follow</button>
						</div>
						<p>
							<span className='heading'>Jobs</span>
						</p>
						<ul id='job-list' className='employer-job-list select-list'>
							<li onClick={this._onJobHandler}>
								<div className='text-container'>
									<div className='text line-1 link'>Server</div>
								</div>
							</li>
							<li onClick={this._onJobHandler}>
								<div className='text-container'>
									<div className='text line-1 link'>Manager</div>
								</div>
							</li>
							<li onClick={this._onJobHandler}>
								<div className='text-container'>
									<div className='text line-1 link'>Team Member</div>
								</div>
							</li>
						</ul>
						<p>
							<span className='heading'>About</span>
							<br/><br/>
							We make it easy to find and hire the best hourly workers, develop their skills through mobile, video training and create online employee schedules that get them in the right place at the right time.<br/><br/>Together, our mobile, people-focused tools help you organize your workforce and keep your managers from going crazy. The fact that it’s designed to deliver labor savings to your bottom line, well that’s just gravy.
							<br/><br/>
						</p>
					</div>
				</Panel>
				<Panel id='job-panel' classes={'job ' + this._getJobState()} closeable={true} onCloseHandler={this._onJobCloseHandler}>
					<div className='panel-wrapper'>
						<div className='panel-info-container no-margin'>
							<h3>Server</h3>
							<h4>Wage: $5.25/hour<br/><span className='small'>Posted: Nov 22, 2015</span></h4>
						</div>
						<div className='panel-actions-container'>
							<button id='share-job' className='primary'>Share</button>
							<button id='apply-job' className=''>Applied</button>
						</div>
						<p>
							<span className='heading'>Job Description</span><br/><br/>Day / Night Servers needed. Family owned and non-corporate store. No tip-outs. Get your tips at end of every shift!
						</p>
					</div>
				</Panel>
			</div>
		)
	},
	_getMap : function(){
		if(!Utils.detectMobile()){
			return <Map/>
		}
	},
	_getEmployerState : function(){
		return this.state.employer ? 'show' : '';
	},
	_getJobState : function(){
		return this.state.job ? 'show' : '';
	},
	_onEmployerHandler : function(){
		this.setState({employer : true});
		Utils.scrollToLeft(document.getElementById('app-body'));
	},
	_onEmployerCloseHandler : function(){
		this.setState({employer : false, job : false});
	},
	_onJobHandler : function(){
		this.setState({job : true});
		Utils.scrollToLeft(document.getElementById('app-body'));
	},
	_onJobCloseHandler : function(){
		this.setState({job : false});
	}
});