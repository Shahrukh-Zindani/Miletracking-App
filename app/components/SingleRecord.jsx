var React = require('react');

var SingleRecord = React.createClass({
	OnDelete: function (e) {
		e.preventDefault();
		this.props.removeNode(this.props.id);
		return;
	},
  	render: function () {
    	var {id, miles, duration, date} = this.props;
    	return (
      		<div >
         		Number Of Miles {miles}|| Duration {duration}.|| Date {date} <button onClick = {this.OnDelete} color = "red" className="button tiny">Cancel</button>

	      </div>
    	)
  	}
});

module.exports = SingleRecord;
