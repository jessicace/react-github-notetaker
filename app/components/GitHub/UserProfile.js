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
        <h2>User Profile</h2> {
          this.props.bio.avatar_url && 
          <img src={ this.props.bio.avatar_url } 
               alt={ `${ this.props.username }'s avatar` }
          />
        }
        <dl> 
          { 
            this.props.bio.name &&
            <dt>Name</dt>
          } {
            this.props.bio.name &&
            <dd>{ this.props.bio.name }</dd>
          } { 
            this.props.bio.login &&
            <dt>Username</dt>
          } { 
            this.props.bio.login &&
            <dd>{ this.props.bio.login }</dd>
          } { 
            this.props.bio.email &&
            <dt>Email</dt>
          } { 
            this.props.bio.email &&
            <dd>{ this.props.bio.email }</dd>
          } { 
            this.props.bio.location &&
            <dt>Location</dt>
          } { 
            this.props.bio.location &&
            <dd>{ this.props.bio.location }</dd>
          } { 
            this.props.bio.company &&
            <dt>Company</dt>
          } { 
            this.props.bio.company &&
            <dd>{ this.props.bio.company }</dd>
          } { 
            this.props.bio.followers &&
            <dt>Followers</dt>
          } { 
            this.props.bio.followers &&
            <dd>{ this.props.bio.followers }</dd>
          } { 
            this.props.bio.following &&
            <dt>Following</dt>
          } { 
            this.props.bio.following &&
            <dd>{ this.props.bio.following }</dd>
          } { 
            this.props.bio.blog &&
            <dt>Blog</dt>
          } { 
            this.props.bio.blog &&
            <dd>{ this.props.bio.blog }</dd>
          }
        </dl>
      </section>
    );
  }
});

module.exports = UserProfile;
