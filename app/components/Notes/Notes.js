var React = require('react');

var Notes = React.createClass({
  render: function() {
    return (
      <section>
        <h2>Notes</h2>
        <dl>
          <dt>Notes</dt>
          <dd>{ this.props.notes }</dd>
        </dl>
      </section>
    );
  }
});

module.exports = Notes;
