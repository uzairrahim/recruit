'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	GoogleMaps = require('google-maps'),
	Store = require('../../stores/job-search'),
	Actions = require('../../actions/job-search'),
	Utils = require('../../utils');

module.exports = React.createClass({
	mixins : [Reflux.connect(Store)],
	_geocoder : null,
	componentDidMount : function(){
		GoogleMaps.load(function(){
			this._geocoder = new google.maps.Geocoder();
		}.bind(this)); 
	},
	componentWillMount : function(){
		Actions.getJobTypes();
		Actions.getJobs();
	},
	render : function(){
		return (				
			<div id='search-form-container' className='search-form-container'>
				<h3 id='container-heading'>Job Search</h3>
				<div id='filter-icon' className='filter-icon'></div>
				<select id='job-types'>
					{this.state.jobTypes.map(function(type,index){
						return (
							<option key={index}>{type.name}</option>
						)
					})}
				</select>
				<input type='text' id='search-location' placeholder='Location' value={this.state.formattedAddress} onChange={this._onLocationChangeHandler} onKeyDown={this._onLocationSubmit}/>
				<button id='search-button' className='primary' onClick={this._onSearchHandler}>Search Jobs</button>
			</div>
		)
	},
	_onLocationChangeHandler : function(event){
		this.setState({formattedAddress : event.target.value});
	},
	_onLocationSubmit : function(event){
		if(event.keyCode === 13){
			this._onSearchHandler();
		}
	},
	_onSearchHandler : function(){
		Actions.set({employerPanel : false, jobPanel : false});
		var _selectedIndex = document.getElementById('job-types').selectedIndex;

		var _jobTypeGUID = this.state.jobTypes[_selectedIndex].guid;

		var _address = this.state.formattedAddress;
		this._geocoder.geocode({'address' : _address}, function(results, status){
			if(status === google.maps.GeocoderStatus.OK){
				var _address = results[0];
				var _location = {
					geo : {
						latitude : _address.geometry.location.lat(),
						longitude : _address.geometry.location.lng()
					}
				}
				Actions.set({formattedAddress : _address.formatted_address, location : _location});
				Actions.getJobs(_jobTypeGUID, _location);
			}else{

			}
		});
	}
});