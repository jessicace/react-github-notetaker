var React = require('react');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    console.log('REPOS', this.props.repos);
    return (
      <section>
        <h2>Repos for { this.props.username }</h2>
      </section>
    );
  }
});

module.exports = Repos;
