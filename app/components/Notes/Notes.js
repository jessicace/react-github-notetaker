var React = require('react');
var AddNote = require('./AddNote');
var NotesList = require('./NotesList');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <section>
        <h2>Notes for { this.props.username }</h2>
        <AddNote username={ this.props.username }
                 addNote={ this.props.addNote }
        />
        <NotesList notes={ this.props.notes } />
      </section>
    );
  }
});

module.exports = Notes;
