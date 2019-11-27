var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
var Note = require('./Note');
var NoteForm = require('./NoteForm');

var List = createClass({
  add(txt) {
    this.state.arr.push(txt);
    this.setState(this.state);
  },
  del(index) {
    this.state.arr.splice(index, 1);
    this.setState(this.state);
  },
  getInitialState() {
    return {
      arr: ['Hao', 'Toan', 'Hung', 'Thien', 'Duy']
    }
  },
  render() {
    return (
      <div>
        <NoteForm add={this.add} />
        {this.state.arr.map((name,index) => <Note key={index} index={index} del={this.del}>{name}</Note>)}
      </div>
    )
  }
});

module.exports = List;