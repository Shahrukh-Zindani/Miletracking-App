var React = require('react');
var SingleRecord = require('SingleRecord');

var RunningHistory = React.createClass({
  render: function () {
    var {records} = this.props;
    var renderTodos = () => {
      return records.map((record) => {
        return (
          <SingleRecord key={record.id} miles = {record.miles} duration = {record.duration} id = {record.id} date = {record.date}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = RunningHistory;
