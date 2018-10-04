import React from 'react';
import Multiviews from './Multiviews';

export default class MultiviewsTestApp extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
<Multiviews
  onSelect={function(e) {}}
  defaultView="view2"
  views={{
    view1: {
      name: 'First View',
      view: () => (<div>This is the content of the first subview</div>)
    },
    view2: {
      name: 'Second view',
      view: () => (<div>This is the content of the second subview</div>)
    },
    views3: {
      name: 'Third view',
      view: () => (<div>This is the content of the second subview</div>)
    }  }}
/>
      );
  }


}
