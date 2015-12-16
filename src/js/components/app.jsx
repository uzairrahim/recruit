'use strict';

import React from 'react';
import Reflux from 'reflux';
import Session from '../stores/session';
import Actions from '../actions/session';
import Header from './layout/header.jsx';
import Menu from './layout/menu.jsx';

var App = React.createClass({
	mixins : [Reflux.connect(Session)],
	render(){
		return (
			<div id='app-layout' className='app-layout'>
				<div id='app-modal' className={'app-modal fade ' + this._getMenuState()}></div>
				<Menu show={this._getMenuState()} onMenuClickHandler={this._onMenuClickHandler}></Menu>
				<Header onMenuClickHandler={this._onMenuClickHandler}></Header>
				{this.props.children}
			</div>
		)
	},
	_getMenuState(){
		return this.state.menu ? 'show' : '';
	},
	_onMenuClickHandler(){
		Actions.set({menu : !this.state.menu});
	}
});

export default App;