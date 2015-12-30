var React = require('react');
var Notes = require('./Notes/Notes');
var Repos = require('./GitHub/Repos');
var UserProfile = require('./GitHub/UserProfile');

var Profile = React.createClass({
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
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={ this.props.params.username }
                       bio={ this.state.bio }
          />
        </div>
        <div className="col-md-4">
          <Repos repos={ this.state.repos } />
        </div>
        <div className="col-md-4">
          <Notes notes={ this.state.notes } />
        </div>
      </div>
    );
  }
});

module.exports = Profile; 
