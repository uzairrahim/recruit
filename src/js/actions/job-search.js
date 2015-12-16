'use strict';

import React from 'react';
import Reflux from 'reflux';

var JobSearch = Reflux.createActions([
	'set',
	'getJobs',
	'getJobTypes',
	'getEmployer',
	'getJob'
]);

export default JobSearch;