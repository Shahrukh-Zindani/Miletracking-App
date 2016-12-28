var React = require('react');

var RunningActivity = React.createClass({
	onFormSubmit : function(e) {
		e.preventDefault();
		var ActivityInformation = {};
		ActivityInformation.miles = this.refs.miles.value;
		ActivityInformation.duration = this.refs.duration.value;
		ActivityInformation.date = this.refs.date.value;
		var number = Number(this.refs.miles.value);
		if(isNaN(number))
			return alert('A number needs to be entered in the miles field');
		this.refs.miles.value = "";
		this.refs.date.value = "";
		this.refs.duration.value = "";
		if(ActivityInformation.miles.length===0 || ActivityInformation.duration.length===0 || ActivityInformation.date.length===0)
				return alert("All fields are required")
		this.props.onNewActivity(ActivityInformation);
	},
	render: function() {
		return(
			<form onSubmit = {this.onFormSubmit}>
				<div>
					<input type = "text" ref = "miles" placeholder = "Enter the number of miles"  />
				</div>
				<div>
					<input type = "number" ref = "duration" placeholder = "Enter time taken (minutes)"  />
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