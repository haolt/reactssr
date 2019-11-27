var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

var NoteForm = createClass({
  add() {
    var v = this.refs.txt.value;
    this.refs.txt.value = '';
    this.props.add(v);
  },
  render() {
    return (
      <div>
        <input type="text" ref="txt" />
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
});

module.exports = NoteForm;