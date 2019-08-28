//Import react, react-dom libraries.
import React from 'react'
import ReactDOM from 'react-dom'

//const React =  require('react')
//import statement is ES2015. Require is a CommonJS import statement
//Create React component
const App = function() {
    return <div>Hi There!</div>
}
// OR 

const App2 =  () =>{
    return <div>Hello again!</div>
}

// Take the react component and display it on the screen.
ReactDOM.render(
    <App />,
    document.getElementById("root")
)