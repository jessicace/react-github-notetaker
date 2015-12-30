var React = require('react');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <section>
        <h2>Repos for { this.props.username }</h2>
        <dl>
          <dt>Repos</dt>
          <dd>{ this.props.repos }</dd>
        </dl>
      </section>
    );
  }
});

module.exports = Repos;
