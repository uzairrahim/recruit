'use strict';

import React from 'react';
import Reflux from 'reflux';
import Login from '../auth/login.jsx';
import LoginRemembered from '../auth/login-remembered.jsx';
import NavEmployee from '../nav/employee.jsx';
import Session from '../../stores/session';

var Menu = React.createClass({
	mixins : [Reflux.connect(Session)],
	render(){
		return (				
			<div id='app-menu' className={'app-menu animated ' + this.props.show}>
				<div id='menu-head' className='menu-head'>
					<div id='menu-logo' className='menu-logo'></div>
					<div id='menu-close' className='menu-close' onClick={this._onMenuClickHandler}></div>
				</div>
				<div id='menu-body' className='menu-body'>
					{this._getMenu()}
				</div>
			</div>
		)
	},
	_onMenuClickHandler(){
		this.props.onMenuClickHandler();
	},
	_getMenu(){
		if(this.state.logged){
			return <NavEmployee/>
		}else{
			if(this.state.user == null){
				return <Login/>
			}else{
				return <LoginRemembered/>	
			}
		}
	}
});

export default Menu;