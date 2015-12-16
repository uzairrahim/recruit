'use strict';

import React from 'react';
import Reflux from 'reflux';
import Img from '../image.jsx';
import AuthActions from '../../actions/auth';
import SessionActions from '../../actions/session';
import SessionStore from '../../stores/session';
import Utils from '../../utils';

var Employees = React.createClass({
	mixins : [Reflux.connect(SessionStore)],
	render(){
		return (
			<div id='navigation-wrapper' className='navigation-wrapper'>
				<Img classes='user' source='http://www.uzairrahim.com/img/uzairrahim.png'/>
				{this._getUserName()}
				<ul id='navigation-list' className='navigation-list'>
					<li>
						<a href='#/job-search' onClick={this._onNavItemClickHandler}>Jobs</a>
					</li>
					<li>
						<a href='#/profile' onClick={this._onNavItemClickHandler}>Profile</a>
					</li>
					<li>
						<a onClick={this._onLogoutHandler}>Logout</a>
					</li>
				</ul>
			</div>
		)
	},
	_getUserName(){
		if(Utils.isNotEmpty(this.state.user)){
			return <p className='center small email'>{this.state.user.firstname + ' ' + this.state.user.lastname}</p>
		}
	},
	_onLogoutHandler(){
		AuthActions.logout(function(response){
			SessionActions.set({logged : false, menu : false, user : null});
		});
	},
	_onNavItemClickHandler(){
		SessionActions.set({menu : false});
	}
});

export default Employees;