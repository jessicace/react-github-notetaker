var React = require('react');
var NotesList = require('./NotesList');

var Notes = React.createClass({
  render: function() {
    return (
      <section>
        <h2>Notes for { this.props.username }</h2>
        <NotesList notes={ this.props.notes } />
      </section>
    );
  }
});

module.exports = Notes;
