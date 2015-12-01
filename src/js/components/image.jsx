'use strict';

var React = require('react');

module.exports = React.createClass({
	render : function(){
		return (				
			<div className={'image ' + this.props.classes}>
				{this._getImage()}
			</div>
		)
	},
	_getImage : function(){
		if(typeof this.props.source !== 'undefined'){
			return <img src={this.props.source}/>
		}
	}
});