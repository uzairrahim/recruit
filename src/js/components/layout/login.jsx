'use strict';

var React = require('react'),
	Actions = require('../../actions/session'),
	Options = require('./login-options.jsx');

module.exports = React.createClass({
	render : function(){
		return (				
			<div id='login-form' className='login-form'>
				<input id='emailaddress' type='email' placeholder='Email Address'/>
				<input id='password' type='password' placeholder='Password'/>
				<label className='remember-me small'>
					<input type='checkbox'/> Remember me
				</label>
				<button id='login-button' className='main login' onClick={this._onLoginHandler}>Log in with Email</button>
				<a href='#' className='forgot-password'>Forgot Password?</a>
				<Options/>
			</div>
		)
	},
	_onLoginHandler : function(){
		Actions.set({logged : true});
	}
});