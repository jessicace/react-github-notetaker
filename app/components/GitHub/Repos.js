var React = require('react');

var Repos = React.createClass({
  render: function() {
    return (
      <section>
        <h2>Repos</h2>
        <dl>
          <dt>Repos</dt>
          <dd>{ this.props.repos }</dd>
        </dl>
      </section>
    );
  }
});

module.exports = Repos;
