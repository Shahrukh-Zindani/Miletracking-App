var React = require('react');

var SingleRecord = React.createClass({
  render: function () {
    var {id, miles, duration} = this.props;

    return (
      <div>
        {id}. Number Of Miles {miles} Duration {duration} . 
      </div>
    )
  }
});

module.exports = SingleRecord;
