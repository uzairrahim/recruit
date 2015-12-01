'use strict';

var React = require('react');

module.exports = React.createClass({
	render : function(){
		return (				
			<div id={this.props.id} className={'body-panel animated ' + this.props.classes}>
				<div className={'close ' + this._getCloseableState()} onClick={this._onCloseHandler}></div>
				{this.props.children}
			</div>
		)
	},
	_onCloseHandler : function(){
		this.props.onCloseHandler();
	},
	_getCloseableState : function(){
		return this.props.closeable ? '' : 'hide'
	}
});