import React from 'react';

export default class Multiviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentView: this.props.defaultView}
    this.handleNextClick = this.handleNextClick.bind(this)
    this.getIndexCurrentView = this.getIndexCurrentView.bind(this)
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
  }
  getIndexCurrentView() {
    const keys = Object.keys(this.props.views)
    return keys.indexOf(this.state.currentView)
  }

  handleNextClick(e) {
    var keys = Object.keys(this.props.views)
    if( keys.length - 1 > this.getIndexCurrentView()) {
      this.setState({ currentView: keys[this.getIndexCurrentView() + 1]})
      this.props.onSelect(e)
    }
  }

  handlePreviousClick(e) {
    var keys = Object.keys(this.props.views)
    if( 0 < this.getIndexCurrentView()) {
    this.setState({ currentView: keys[this.getIndexCurrentView() - 1]})
    this.props.onSelect(e)
  }

  }

  render () {
    var viewdata = this.props.views[this.state.currentView]
    return (
      <div>
        <button onClick={this.handlePreviousClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>

        <h1>{viewdata.name}</h1>
        {viewdata.view()}
      </div>
      )
  }
}
