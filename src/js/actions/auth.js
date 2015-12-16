'use strict';

import React from 'react';
import Reflux from 'reflux';

var Auth = Reflux.createActions([
	'login',
	'logout',
	'set'
]);

export default Auth;