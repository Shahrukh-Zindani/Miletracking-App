var React = require('react');
var uuid = require('uuid');

var RunningHistory = require('RunningHistory');
var RunningActivity = require('RunningActivity');
var RunningAppApi = require('RunningAppApi');


var RunningMain = React.createClass({
  getInitialState: function () {
    return {
      records: RunningAppApi.getRecords()
    };
  },
  componentDidUpdate: function() {
    RunningAppApi.setRecords(this.state.records)
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
  handleRemove: function(id) {
    var newArray = this.state.records.filter(function(x) {
      return x.id!==id;
    })
    this.setState({
      records: newArray
    })
  },
  render: function () {
    var {records} = this.state;

    return (
     <div>
        <h1 className = 'page-title'>Mile Tracker</h1>
        <div className = 'row'>
          <div className = 'column medium-centered small-11 medium-6 large-6 '>
            <div className = 'container'>
              <RunningActivity onNewActivity= {this.handleNewActivity} />
              <RunningHistory records={records} removeNode={this.handleRemove}/>
              
             </div>
          </div>
        </div>     
      </div>
    )
  }
});

module.exports = RunningMain;
