import React from 'react';
import ReactDOM from 'react-dom';

function coinToss() {
    return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

let img;

if (coinToss() === 'heads') {
    img = <img src={pics.kitty} />
} else {
    img = <img src={pics.doggy} />
}
// you can't inject an `if` statement into JSX.

ReactDOM.render(img, document.getElementById('app'));

// or
const img2 = <img src={
    pics[coinToss() === 'heads' ? 'kitty' : 'doggy'] // Ternary Operator works exactly same as `if` statement
} />;

// 3. && conditional
let baby = true;
const tasty = (
    <ul>
        <li>Applesauce</li>
        {!baby && <li>Pizza</li>}
    </ul>
); // if baby = false, then <li>Pizza</li> appear.