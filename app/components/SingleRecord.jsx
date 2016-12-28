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
         		<h3 className = "h3"><span className = "miletag">{miles} </span> mi ||  <span className = "durationtag">{duration} </span> minutes || <span className = "datetag">{date} </span> Date </h3> <button onClick = {this.OnDelete} className="button tiny">Cancel</button>

	      </div>
    	)
  	}
});

module.exports = SingleRecord;
