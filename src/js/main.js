'use strict';

require('expose?$!jquery');

require.ensure([
	'./components/job-search/job-search.jsx',
	'./components/profile/profile.jsx'
], function(require){

	var React = require('react'),
		ReactDOM = require('react-dom'),
		Router = require('react-router').Router,
		Route = require('react-router').Route,
		Redirect = require('react-router').Redirect,
		CreateHistory = require('history/lib/createHashHistory'),
		App = require('./components/app.jsx'),
		JobSearch = require('./components/job-search/job-search.jsx'),
		Profile = require('./components/profile/profile.jsx');

	ReactDOM.render(
		(<Router history={CreateHistory({queryKey : false})}>
			<Redirect from='/' to='job-search'/>
			<Route path='/' component={App}>
				<Route path='/job-search' component={JobSearch}/>
				<Route path='/profile' component={Profile}/>
			</Route>
		</Router>),
		document.getElementById('root')
	)
});