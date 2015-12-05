'use strict';

var React = require('react'),
	GoogleMaps = require('google-maps'),
	Utils = require('../../utils');

module.exports = React.createClass({
	_map : null,
	componentDidMount : function(){
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
				zoom: Utils.getDefaultMapZoom()
			}
			
			this._map = new google.maps.Map(_container, _options);

		}.bind(this));
	},
	render : function(){

		if(this._map !== null){
			var _location = typeof this.props.location !== 'undefined' ? this.props.location : Utils.getDefaultLocation();
			this._map.setCenter(new google.maps.LatLng( _location.geo.latitude, _location.geo.longitude));
		}
		
		return (				
			<div id='map-container' className='map-container'>
				
			</div>
		)
	}
});