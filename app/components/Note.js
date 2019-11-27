var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

var Note = createClass({
  del() {
    this.props.del(this.props.index);
  },
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.del}>Delete</button>
      </div>
    )
  }
});

module.exports = Note;