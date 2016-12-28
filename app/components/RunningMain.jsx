var React = require('react');
var RunningHistory = require('RunningHistory');
var RunningActivity = require('RunningActivity');
var uuid = require('uuid');

var RunningMain = React.createClass({
  getInitialState: function () {
    return {
      records: [
        {
          id: uuid(),
          miles: 3.0,
          duration: '30 minutes'
        }, {
          id: uuid(),
          miles: 4.0,
          duration: '40 minutes'
        }, {
          id: uuid(),
          miles: 5.0,
          duration: '50 minutes'
        }
      ]
    };
  },
  handleNewActivity: function(update) {
    this.setState({
      records: [
        ...this.state.records, 
        {
          id: uuid(),
          miles: update.miles,
          duration: update.duration,
          date: update.date
        }
      ]
    })
  },
  render: function () {
    var {records} = this.state;

    return (
      <div>
        <h1>Mile Tracker</h1>
        <RunningHistory records={records}/>
        <RunningActivity onNewActivity= {this.handleNewActivity}/>
      </div>
    )
  }
});

module.exports = RunningMain;
