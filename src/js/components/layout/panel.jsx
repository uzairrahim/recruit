'use strict';

import React from 'react';

var Panel = React.createClass({
	render(){
		return (				
			<div id={this.props.id} className={'body-panel animated ' + this.props.classes}>
				<div className={'close ' + this._getCloseableState()} onClick={this._onCloseHandler}></div>
				{this.props.children}
			</div>
		)
	},
	_onCloseHandler(){
		this.props.onCloseHandler();
	},
	_getCloseableState(){
		return this.props.closeable ? '' : 'hide'
	}
});

export default Panel;