import { Pokemon } from './pokemon.js';
import { generateLog, getRandom } from './utils.js';

const $btnKick = document.getElementById("btn-kick");
const $btnSpecial = document.getElementById("btn-special");
const logsContainer = document.getElementById("logs");

const createClickCounter = (button, maxClicks) => {
    let clickCount = 0;

    const handleClick = () => {
        if (clickCount < maxClicks) {
            clickCount++;
            console.log(`Button "${button.id}" clicked (${clickCount}/${maxClicks} clicks)`);
        } else {
            console.log(`Button "${button.id}" reached maximum clicks (${maxClicks} clicks)`);
            button.disabled = true;
        }
    };

    button.addEventListener('click', handleClick);

    return {
        getClickCount: () => clickCount,
        resetClickCount: () => {
            clickCount = 0;
            button.disabled = false;
            console.log(`Button "${button.id}" click count reset`);
        }
    };
};

const kickCounter = createClickCounter($btnKick, 6);
const specialCounter = createClickCounter($btnSpecial, 6);

const fighter = {
    character: new Pokemon('Pikachu', 100, 100, document.getElementById("health-character"), document.getElementById("progressbar-character"), null, $btnKick, $btnSpecial, logsContainer),
    enemy: new Pokemon('Charmander', 100, 100, document.getElementById("health-enemy"), document.getElementById("progressbar-enemy"), null, $btnKick, $btnSpecial, logsContainer)
};

$btnKick.addEventListener('click', () => {
    console.log('Kick');
    fighter.character.changeHP(20);
    console.log(`Remaining clicks: ${kickCounter.getClickCount()}`);
});

$btnSpecial.addEventListener('click', () => {
    console.log('Special Attack');
    fighter.character.changeHP(30);
    console.log(`Remaining clicks: ${specialCounter.getClickCount()}`);
});

const init = () => {
    console.log('Start game!');
};

init();
