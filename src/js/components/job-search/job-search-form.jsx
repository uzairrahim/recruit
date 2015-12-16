'use strict';

import React from 'react';
import Reflux from 'reflux';
import GoogleMaps from 'google-maps';
import Store from '../../stores/job-search';
import Actions from '../../actions/job-search';
import Utils from '../../utils';

var JobSearchForm = React.createClass({
	mixins : [Reflux.connect(Store)],
	_geocoder : null,
	componentDidMount(){
		GoogleMaps.load(function(){
			this._geocoder = new google.maps.Geocoder();
		}.bind(this)); 
	},
	componentWillMount(){
		Actions.getJobTypes();
		Actions.getJobs();
	},
	render(){
		return (				
			<div id='search-form-container' className='search-form-container'>
				<h3 id='container-heading'>Job Search</h3>
				<div id='map-icon' className='map-icon' onClick={this._onMapIconClickHandler}></div>
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
	_onMapIconClickHandler(){
		this.props.onMapIconClickHandler();
	},
	_onLocationChangeHandler(event){
		this.setState({formattedAddress : event.target.value});
	},
	_onLocationSubmit(event){
		if(event.keyCode === 13){
			this._onSearchHandler();
		}
	},
	_onSearchHandler(){
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

export default JobSearchForm;