var _ = require('lodash');
module.exports = {
	setRecords: function(records) {
		if(_.isArray(records)) {
			localStorage.setItem('records', JSON.stringify(records))
			return records;
		}
	},
	getRecords: function() {
		var stringRecords = localStorage.getItem('records');
		var records = [];
		try {
			records = JSON.parse(stringRecords);
		} catch (e) {

		}

		if(_.isArray(records)) {
			return records;
		} else {
			return [];
		}
	}
};