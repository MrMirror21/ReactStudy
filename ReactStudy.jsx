const JSX = <h1>Hello JSX!</h1>
// React uses a syntax extension of JS called JSX that allows you to write HTML directly within JS.
// It lets you use JS within HTML.
// JSX is similar to the HTML

// JSX is a syntactic extension of JS, you can actually write JS directly within JSX.
// To do this, you simply in lude the code you want to be treated as JS within curly braces:

{ 'this is treated as JS code' }

// Create a Complex JSX Element
// nested JSX must return a single element.
// This one parent element would wrap all of the other levels of nested elements.

const JSXNested = <div>
    <p>Paragraph one</p>
    <p>Paragraph two</p>
    <p>Paragraph three</p>
</div>

// React: Render HTML Elements to the DOM
// we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.
// ReactDOM offers a simple method to render React elements to the DOM which looks like this:
// `ReactDOM.render(componentToRender, targetNode)`
// `ReactDOM.render()` must be called after the JSX element declarations

function RenderHTMLToDOM() {
    const JSX = (
        <div>
        <h1>Hello World</h1>
        </div>
    );

    const JSXHTML = document.getElementById('node-name');
    ReactDOM.render(JSX, JSXHTML);
}

// Define an HTML class in JSX
// Instead of class, JSX uses `className`
// In fact, the naming convention for all HTML attributes and event references in JSX become camelCase.
// ex) onclick -> onClick, onchange -> onChange

function DefineClassJSX() {
    const JSX = (
        <div className="myDiv">
            <h1>Add a Class to this div</h1>
        </div>
    );
}

// Self-Closing JSX tags
// Any JSX element can be written with a self-closing tag, and every element must be closed.
<br />, <div /> //(this div can't include anything)

// Create a Stateless Functional Component
// One of the ways to creat a React component is use a JS function.
// Defining a component in this way creates a stateless functional component.
// It means that can receive data and render it, but does not manage or track changes to that data.
// == that returns either JSX or `null`
// React requires your function name to begin with a capital letter.
const DemoComponent = function() {
    return (<div className='customClass' />);
};

// Create a React Component
class Kitten extends React.Component{ // this class has access to React features.
    constructor(props) {
        super(props); // to call the constructor of the parent class
    }

    render() {
        return (
            <h1>Hey There</h1>
        );
    }
};