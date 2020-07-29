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

// Create a Componenet with Composition

const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                <ChildComponent />
            </div>
            
        );
    }
};

// also can render nested Components
// ex) <APP><Navbar><Title /></Navbar></APP>

