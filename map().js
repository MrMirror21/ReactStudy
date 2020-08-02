import React from 'react';
import ReactDOM from 'react-dom';
// The array method `.map()` is use for create a list of JSX elements.

const Games = ['League Of Legends', "Civilization6", "Witcher3"];

const GameList = Games.map(game =>
    <li>{game}</li>
    );


ReactDOM.render(<ul>{GameList}</ul>, document.getElementById('app'));

// sometimes your list wil need to include keys
// key is similar to an `id` attribute.
// A list needs `keys` if either of the following are true:
// 1. The list-items have memeory from one render to the next.
// 2. A list's order might be shuffled.

const GameListKeys = Games.map((game, i) =>
    <li key={'game_' + i}>{game}</li>
);