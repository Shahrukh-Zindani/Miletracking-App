var React = require('react');
var RunningHistory = require('RunningHistory');

var RunningMain = React.createClass({
  getInitialState: function () {
    return {
      records: [
        {
          id: 1,
          miles: 3.0,
          duration: '30 minutes'
        }, {
          id: 2,
          miles: 4.0,
          duration: '40 minutes'
        }, {
          id: 3,
          miles: 5.0,
          duration: '50 minutes'
        }
      ]
    };
  },
  render: function () {
    var {records} = this.state;

    return (
      <div>
        <RunningHistory records={records}/>
      </div>
    )
  }
});

module.exports = RunningMain;
