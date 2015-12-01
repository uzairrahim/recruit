'use strict';

var React = require('react'),
	ReactDOM = require('react-dom'),
	Reflux = require('reflux'),
	Session = require('../stores/session'),
	Actions = require('../actions/session'),
	Header = require('./layout/header.jsx'),
	Menu = require('./layout/menu.jsx'),
	JobSearch = require('./job-search/job-search.jsx');

var App = React.createClass({
	mixins : [Reflux.connect(Session)],
	render : function(){
		return (
			<div id='app-layout' className='app-layout'>
				<div id='app-modal' className={'app-modal fade ' + this._getMenuState()}></div>
				<Menu show={this._getMenuState()} onMenuClickHandler={this._onMenuClickHandler}></Menu>
				<Header onMenuClickHandler={this._onMenuClickHandler}></Header>
				<JobSearch/>
			</div>
		)
	},
	_getMenuState : function(){
		return this.state.menu ? 'show' : '';
	},
	_onMenuClickHandler : function(){
		Actions.set({menu : !this.state.menu});
	}
});

ReactDOM.render(<App/>, document.getElementById('root'));