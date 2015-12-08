'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Img = require('../image.jsx'),
	AuthActions = require('../../actions/auth'),
	SessionActions = require('../../actions/session'),
	SessionStore = require('../../stores/session'),
	Utils = require('../../utils');

module.exports = React.createClass({
	mixins : [Reflux.connect(SessionStore)],
	render : function(){
		return (
			<div id='navigation-wrapper' className='navigation-wrapper'>
				<Img classes='user' source='http://www.uzairrahim.com/img/uzairrahim.png'/>
				{this._getUserName()}
				<ul id='navigation-list' className='navigation-list'>
					<li>
						<a>Jobs</a>
					</li>
					<li>
						<a>Profile</a>
					</li>
					<li>
						<a onClick={this._onLogoutHandler}>Logout</a>
					</li>
				</ul>
			</div>
		)
	},
	_getUserName : function(){
		if(Utils.isNotEmpty(this.state.user)){
			return <p className='center small email'>{this.state.user.firstname + ' ' + this.state.user.lastname}</p>
		}
	},
	_onLogoutHandler : function(){
		AuthActions.logout(function(response){
			//
		});

		SessionActions.set({logged : false, menu : false, user : null});
	}
});