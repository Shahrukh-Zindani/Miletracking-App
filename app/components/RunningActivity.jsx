var React = require('react');

var RunningActivity = React.createClass({
	onFormSubmit : function(e) {
		e.preventDefault();
		var ActivityInformation = {};
		ActivityInformation.miles = this.refs.miles.value;
		ActivityInformation.duration = this.refs.duration.value;
		ActivityInformation.date = this.refs.date.value;
		this.props.onNewActivity(ActivityInformation);
	},
	render: function() {
		return(
			<form onSubmit = {this.onFormSubmit}>
				<div>
					<input type = "text" ref = "miles" placeholder = "Enter the number of miles"  />
				</div>
				<div>
					<input type = "text" ref = "duration" placeholder = "Enter time taken (minutes)"  />
				</div>
				<div>
					<input type = "date" ref = "date" placeholder = "Enter date"  />
				</div>
				<button className = "button expanded"> Submit Activity</button>
			</form>
		)
	}
})

module.exports = RunningActivity;