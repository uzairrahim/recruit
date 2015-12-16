'use strict';

import React from 'react';
import AuthActions from '../../actions/auth';
import SessionActions from '../../actions/session';
import Options from './login-options.jsx';
import Img from '../elements/image.jsx';

class LoginRemembered extends React.Component{

	render(){
		return (				
			<div id='login-form' className='login-form'>
				<Img classes='user' source='http://www.uzairrahim.com/img/uzairrahim.png'/>
				<p className='center small email'>uzair.rahim@hotschedules.com</p>
				<input id='password' type='password' placeholder='Password'/>
				<button id='login-button' className='main login'>Log in with Email</button>
				<a href='#' className='forgot-password'>Forgot Password?</a>
				<p className='center small dark switch-account'>Not Uzair Rahim? <a href="#" onClick={this._onSwitchAccountHandler}>Switch account</a></p><br/>
				<Options/>
			</div>
		)
	}

	_onSwitchAccountHandler(){
		AuthActions.logout(function(response){
			SessionActions.set({logged : false, user : null});
		});
	}

}

export default LoginRemembered;