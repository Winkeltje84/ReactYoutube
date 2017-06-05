import React from 'react'
import ReactDOM from 'react-dom'

// create a new component that shoud produce some HTML
// this const App is setting a function and is returning JSX: html looking code which is actually JS
// we use const and not var because we do not expect this to change (we do not do "App = 5" lateron or so)
 const App = function() {
   return <div>Hi!</div>;
 }

// take this component's generated HTML and put it into the page (in the DOM)
// the component App is rendered in the 'container' class div element in index.html
ReactDOM.render(<App />, document.querySelector('.container'))
