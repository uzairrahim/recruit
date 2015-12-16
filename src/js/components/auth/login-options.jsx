'use strict';

import React from 'react';

var LoginOptions = React.createClass({
	render(){
		return (				
			<div id='login-options' className='login-options'>
				<hr/>
				<button id='login-w-hs' className='main login'>Log in with HotSchedules</button>
				<button id='login-w-fb' className='facebook login'>Log in with Facebook</button>
				<p className='center small dark sign-up'>Don't have an accoun? <a href="#">Sign up Free!</a></p><br/>
				<p className='center small'>By logging in, you agree to the HotSchedules Recruit <br/><a href="#">Terms of Service</a></p>
			</div>
		)
	}
});

export default LoginOptions;