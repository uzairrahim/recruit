'use strict';

var React = require('react'),
	Reflux = require('reflux'),
	actions = require('../actions/session'),
	Utils = require('../utils');

module.exports = Reflux.createStore({
	listenables : [actions],
	_filename : 'recruit-session',
	_data : {
		logged : false,
		menu : false
	},
	_write : function(){
		localStorage.setItem(this._filename, JSON.stringify(this._data));
	},
	_read : function(){
		return JSON.parse(localStorage.getItem(this._filename));
	},	
	init : function(){
		this._read() !== null ? this._data = this._read() : this._write();
	},
	getInitialState : function(){
		return {
			logged : this._data.logged,
			menu : this._data.menu
		}
	},
	onSet : function(_options){
		
		for(var key in this._data){
			if(typeof _options[key] === 'undefined'){
				_options[key] = this._data[key];
			}
		}

		this._data = _options;
		this._write();
		this.trigger(this._data);
	}
});