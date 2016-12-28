var React = require('react');

var SingleRecord = React.createClass({
  render: function () {
    var {id, miles, duration, date} = this.props;
    return (
      <div>
         Number Of Miles {miles}|| Duration {duration}.|| Date {date}

      </div>
    )
  }
});

module.exports = SingleRecord;
