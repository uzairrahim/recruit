'use strict';

var React = require('react'),
	GoogleMaps = require('google-maps'),
	Utils = require('../../utils');

module.exports = React.createClass({
	componentDidMount : function(){
		GoogleMaps.KEY = Utils.getGoogleMapsKey();
		GoogleMaps.load(function(){
			var _location = Utils.getDefaultLocation();
			var _container = document.getElementById('map-container');
			var _options = {
				center: {
					lat: Number(_location.geo.latitude),
					lng: Number(_location.geo.longitude)
				},
				scrollwheel: false,
				disableDefaultUI: true,
				zoom: 10
			}
			new google.maps.Map(_container, _options);
		});
	},
	render : function(){
		return (				
			<div id='map-container' className='map-container'>
				
			</div>
		)
	}
});