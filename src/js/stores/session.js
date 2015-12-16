'use strict';

import React from 'react';
import Reflux from 'reflux';
import Actions from '../actions/session';
import Utils from '../utils';

var Session = Reflux.createStore({
	listenables : [Actions],
	_filename : 'recruit-session',
	_data : {
		logged : false,
		menu : false,
		user : null
	},
	_write(){
		localStorage.setItem(this._filename, JSON.stringify(this._data));
	},
	_read(){
		return JSON.parse(localStorage.getItem(this._filename));
	},	
	init(){
		this._read() !== null ? this._data = this._read() : this._write();
	},
	getInitialState(){
		return {
			logged : this._data.logged,
			menu : this._data.menu
		}
	},
	onSet(_options){
		
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

export default Session;