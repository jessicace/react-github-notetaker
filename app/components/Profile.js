var Firebase = require('Firebase');
var React = require('react');
var ReactFireMixin = require('reactfire');
var Notes = require('./Notes/Notes');
var Repos = require('./GitHub/Repos');
var UserProfile = require('./GitHub/UserProfile');

var Profile = React.createClass({
  mixins: [ ReactFireMixin ],
  getInitialState: function() {
    return {
      notes: [
        'Cool Note 1',
        'Cool Note 2'
      ],
      bio: {
        name: 'Jessica'
      },
      repos: [
        'Cool Repo 1',
        'Cool Repo 2'
      ]
    };
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://react-github-notetaker.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  handleAddNote: function(newNote) {
    // Update firebase with the newNote.
    this.ref
        .child(this.props.params.username)
        .child(this.state.notes.length)
        .set(newNote);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={ this.props.params.username }
                       bio={ this.state.bio }
          />
        </div>
        <div className="col-md-4">
          <Repos username={ this.props.params.username }
                 repos={ this.state.repos }
          />
        </div>
        <div className="col-md-4">
          <Notes username={ this.props.params.username }
                 notes={ this.state.notes }
                 addNote={ this.handleAddNote }
          />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
