'use strict';

import React from 'react';

class Image extends React.Component{

	render(){
		return (				
			<div className={'image ' + this.props.classes}>
				{this._getImage()}
			</div>
		)
	}

	_getImage(){
		if(typeof this.props.source !== 'undefined'){
			return <img src={this.props.source}/>
		}
	}

}

export default Image;