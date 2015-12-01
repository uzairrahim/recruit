'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Login = require('./login.jsx'),
	LoginRemembered = require('./login-remembered.jsx'),
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
					{this.state.logged ? <LoginRemembered/> : <Login/>}
				</div>
			</div>
		)
	},
	_onMenuClickHandler : function(){
		this.props.onMenuClickHandler();
	}
});