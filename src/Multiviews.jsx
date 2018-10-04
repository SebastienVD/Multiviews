import React from 'react';

export default class Multiviews extends React.Component {
  constructor(props) {
  super(props);
  this.state = { currentView: this.props.defaultView}
  }

  render () {
    var viewdata = this.props.views[this.state.currentView]
    return (<div>
      <h1>{viewdata.view()}</h1>
      </div>
      )
  }
}
