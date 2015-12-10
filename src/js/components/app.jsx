'use strict';

require.ensure([
	'./job-search/job-search.jsx',
	'./profile/profile.jsx'
], function(require){

	var React = require('react'),
		ReactDOM = require('react-dom'),
		Reflux = require('reflux'),
		Router = require('react-router').Router,
		Route = require('react-router').Route,
		Redirect = require('react-router').Redirect,
		CreateHistory = require('history/lib/createHashHistory'),
		// Stores
		Session = require('../stores/session'),
		// Actions
		Actions = require('../actions/session'),
		// Layout
		Header = require('./layout/header.jsx'),
		Menu = require('./layout/menu.jsx'),
		// Views
		JobSearch = require('./job-search/job-search.jsx'),
		Profile = require('./profile/profile.jsx');

	var App = React.createClass({
		mixins : [Reflux.connect(Session)],
		render : function(){
			return (
				<div id='app-layout' className='app-layout'>
					<div id='app-modal' className={'app-modal fade ' + this._getMenuState()}></div>
					<Menu show={this._getMenuState()} onMenuClickHandler={this._onMenuClickHandler}></Menu>
					<Header onMenuClickHandler={this._onMenuClickHandler}></Header>
					{this.props.children}
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

	ReactDOM.render(
		(<Router history={CreateHistory({queryKey : false})}>
			<Redirect from='/' to='job-search'/>
			<Route path='/' component={App}>
				<Route path='/job-search' component={JobSearch}/>
				<Route path='/profile' component={Profile}/>
			</Route>
		</Router>),
		document.getElementById('root')
	);

});