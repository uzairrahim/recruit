'use strict';

var React = require('react'),
	Actions = require('../../actions/session'),
	Options = require('./login-options.jsx'),
	Img = require('../image.jsx');

module.exports = React.createClass({
	render : function(){
		return (				
			<div id='login-form' className='login-form'>
				<Img classes='user'/>
				<input id='password' type='password' placeholder='Password'/>
				<button id='login-button' className='main login'>Log in with Email</button>
				<a href='#' className='forgot-password'>Forgot Password?</a>
				<p className='center small dark switch-account'>Not Uzair Rahim? <a href="#" onClick={this._onSwitchAccountHandler}>Switch account</a></p><br/>
				<Options/>
			</div>
		)
	},
	_onSwitchAccountHandler : function(){
		Actions.set({logged : false});
	}
});