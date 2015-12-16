'use strict';

import React from 'react';
import Reflux from 'reflux';
import Session from '../../stores/session';

var Header = React.createClass({
	mixins : [Reflux.connect(Session)],
	render(){
		return (				
			<div id='app-head' className='app-head'>
				<div id='hamburger' className='hamburger' onClick={this._onMenuClickHandler}></div>
				{this._getLoginButton()}
			</div>
		)
	},
	_onMenuClickHandler(){
		this.props.onMenuClickHandler();
	},
	_getLoginButton(){
		if(!this.state.logged){
			return(
				<div id='head-login' className='head-login' onClick={this._onMenuClickHandler}>Log in / Sign up</div>
			)
		}
	}
});

export default Header;