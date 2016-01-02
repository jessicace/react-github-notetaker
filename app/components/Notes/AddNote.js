var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  handleSubmit: function() {
    var newNote = this.note.value;
    this.props.addNote(newNote);
    this.note.value = '';
  },
  setRef: function(ref) {
    this.note = ref;
  },
  render: function() {
    return (
      <div className="input-group">
        <label>
          Add New Note
          <input type="text" 
                 className="form-control" 
                 placeholder={ `${this.props.username} is super cool` }
                 ref={ this.setRef }
          />
        </label>
        <span className="input-group-btn">
          <button className="btn btn-default" 
                  type="button"
                  onClick={ this.handleSubmit }>
            Submit
          </button>
        </span>
      </div>
    );
  }
});

module.exports = AddNote;
