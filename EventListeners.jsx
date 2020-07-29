function makeDoggy(e) {
    // make img to doggy img
}

const kitty = (
    <img onClick={makedoggy} // in jsx component, we can give it attributes, also eventListeners(i.e onClick, onMouseOver..)
    src="kittypic.jpeg"
    alt="kitty"
    />
)

ReactDOM.render(kitty, document.getElementById('app'));
// ReactDOM.render(JSXcomponent, targetNode)