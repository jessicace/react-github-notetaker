var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function() {
    console.log('BIO', this.props.bio);
    return (
      <section>
        <h2>User Profile</h2>
        <dl>
          <dt>Username</dt> 
          <dd>{ this.props.username }</dd>
        </dl>
      </section>
    );
  }
});

module.exports = UserProfile;
