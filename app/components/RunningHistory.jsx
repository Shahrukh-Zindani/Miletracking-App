var React = require('react');
var SingleRecord = require('SingleRecord');

var RunningHistory = React.createClass({
  removeNode: function (id) {
    this.props.removeNode(id);
    return;
  },
  render: function () {
    var {records} = this.props;
    var renderTodos = () => {
      return records.map((record) => {
        return (
          <SingleRecord key={record.id} miles = {record.miles} duration = {record.duration} id = {record.id} date = {record.date} removeNode = {this.removeNode} />
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
