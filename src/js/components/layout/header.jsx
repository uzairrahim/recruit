'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	Session = require('../../stores/session');

module.exports = React.createClass({
	mixins : [Reflux.connect(Session)],
	render : function(){
		return (				
			<div id='app-head' className='app-head'>
				<div id='hamburger' className='hamburger' onClick={this._onMenuClickHandler}></div>
				{this._getLoginButton()}
			</div>
		)
	},
	_onMenuClickHandler : function(){
		this.props.onMenuClickHandler();
	},
	_getLoginButton : function(){
		if(!this.state.logged){
			return(
				<div id='head-login' className='head-login' onClick={this._onMenuClickHandler}>Log in / Sign up</div>
			)
		}
	}
});