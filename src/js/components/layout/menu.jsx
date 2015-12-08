'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Login = require('./login.jsx'),
	LoginRemembered = require('./login-remembered.jsx'),
	NavEmployee = require('../nav/employee.jsx'),
	Session = require('../../stores/session');

module.exports = React.createClass({
	mixins : [Reflux.connect(Session)],
	render : function(){
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
	_onMenuClickHandler : function(){
		this.props.onMenuClickHandler();
	},
	_getMenu : function(){
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