'use strict';

import React from 'react';
import Reflux from 'reflux';
import AuthStore from '../../stores/auth';
import AuthActions from '../../actions/auth';
import SessionActions from '../../actions/session';
import Options from './login-options.jsx';
import Utils from '../../utils';

var Login = React.createClass({
	mixins : [Reflux.connect(AuthStore)],
	render(){
		return (				
			<div id='login-form' className='login-form'>
				<input id='emailaddress' type='email' placeholder='Email Address' onChange={this._onEmailChangeHandler}/>
				<input id='password' type='password' placeholder='Password' onChange={this._onPasswordChangeHandler} onKeyDown={this._onPasswordSubmitHandler}/>
				<label className='remember-me small'>
					<input type='checkbox'/> Remember me
				</label>
				<button id='login-button' className='main login' onClick={this._onLoginHandler}>Log in with Email</button>
				<a href='#' className='forgot-password'>Forgot Password?</a>
				<Options/>
			</div>
		)
	},
	_onEmailChangeHandler(event){
		this.setState({emailaddress : event.target.value});
	},
	_onPasswordChangeHandler(event){
		this.setState({password : event.target.value});
	},
	_onPasswordSubmitHandler(event){
		if(event.keyCode === 13){
			this._onLoginHandler();
		}
	},
	_onLoginHandler(){
		var _credentials = {
			emailaddress : this.state.emailaddress,
			password : this.state.password
		}

		AuthActions.login(_credentials, function(response){
			var _errorCode = response.responseJSON ? response.responseJSON.errorCode : response.errorCode;
			switch(_errorCode){
				case 0:
					var _user = Utils.getUserFromResponse(response);
					SessionActions.set({logged : true, user : _user});
					AuthActions.set({logged : true});
				break;
				case 6:
					alert('Invalid emailaddress or password');
				break;
			}
		}.bind(this));
	}
});

export default Login;