'use strict';

import React from 'react';
import GoogleMaps from 'google-maps';
import Actions from '../../actions/job-search';
import Utils from '../../utils';

var MapView = React.createClass({
	_map : null,
	_markers : [],
	componentDidMount(){
		GoogleMaps.KEY = Utils.getGoogleMapsKey();
		GoogleMaps.load(function(){
			var _location = typeof this.props.location !== 'undefined' ? this.props.location : Utils.getDefaultLocation();
			var _container = document.getElementById('map-container');
			var _options = {
				center: {
					lat: Number(_location.geo.latitude),
					lng: Number(_location.geo.longitude)
				},
				scrollwheel: false,
				disableDefaultUI: true,
				zoomControl:true,
				zoom: Utils.getDefaultMapZoom()
			}
			
			this._map = new google.maps.Map(_container, _options);
			this._map.addListener('dragend', this._onMapCenterChangeHandler);

		}.bind(this));

		
	},
	render(){

		if(this._map !== null){
			var _location = typeof this.props.location !== 'undefined' ? this.props.location : Utils.getDefaultLocation();
			this._map.setCenter(new google.maps.LatLng( _location.geo.latitude, _location.geo.longitude));
		}

		this._markers.map(function(marker){
			marker.setMap(null);
		});

		this._markers = [];

		this._onAddMarkers();
		
		return (				
			<div id='map-wrapper' className='map-wrapper'>
				<div id='map-toast' className='map-toast animated'>Loading...</div>
				<div id='list-icon' className='list-icon' onClick={this._onListIconClickHandler}></div>
				<div id='map-container' className='map-container'></div>
			</div>
		)
	},
	_onListIconClickHandler(){
		this.props.onListIconClickHandler();
	},
	_onMapCenterChangeHandler(){
		var _geocoder = new google.maps.Geocoder();
		_geocoder.geocode({'location' : {lat : this._map.center.lat(), lng : this._map.center.lng()}}, function(results, status){
			if(status === google.maps.GeocoderStatus.OK){
				var _address = results[0];
				var _location = {
					geo : {
						latitude : _address.geometry.location.lat(),
						longitude : _address.geometry.location.lng()
					}
				}
				Actions.set({formattedAddress : _address.formatted_address, location : _location});
				this.props.onMapCenterChangeHandler(_location);

			}else{

			}	
		}.bind(this));
	},
	_onAddMarkers(){

		var markers = this.props.markers;

		if(markers.length > 0){
			var _image = 'img/pin.svg';
			GoogleMaps.load(function(){
				markers.map(function(marker, index){
				var _marker = new google.maps.Marker({
					position : {
						lat: Number(marker.location.latitude),
						lng: Number(marker.location.longitude)
					},
					map : this._map,
					icon : _image,
					title : marker.name,
					_index: index
				});

				_marker.addListener('click', function(){
					this._map.setCenter(_marker.getPosition());
					this._onMarkerClickHander(_marker._index);
				}.bind(this));

				this._markers.push(_marker);

				}.bind(this));

			}.bind(this));
		}
	},
	_onMarkerClickHander(index){
		this.props.onMarkerClickHander(index);
	},
	_onAddToast(){

	},
	_onRemoveToast(){
		
	}
});

export default MapView;