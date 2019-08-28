//Import react, react-dom libraries.
import React from 'react'
import ReactDOM from 'react-dom'

//const React =  require('react')
//import statement is ES2015. Require is a CommonJS import statement
//Create React component


const App = function() {
    const buttonText = 'Click Me!'
    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText} {/* This is how we can reference JS variables in JSX */}
            </button> {/*JSX requires double quotes for components. Also comments in render block need to be put in braces*/}
        </div>
    );
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