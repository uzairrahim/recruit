'use strict';

import React from 'react';

class Panel extends React.Component{

	constructor(){
		super();
		this._onCloseHandler = this._onCloseHandler.bind(this);
	}
	
	render(){
		return (				
			<div id={this.props.id} className={'body-panel animated ' + this.props.classes}>
				<div className={'close ' + this._getCloseableState()} onClick={this._onCloseHandler}></div>
				{this.props.children}
			</div>
		)
	}

	_onCloseHandler(){
		this.props.onCloseHandler();
	}

	_getCloseableState(){
		return this.props.closeable ? '' : 'hide'
	}

}

export default Panel;