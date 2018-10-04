# multiviews

The component works exactly like below:

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
    views3: ...
  }}
/>

## Installation

* npm install
* npm start
* visit `http://localhost:8080/`
