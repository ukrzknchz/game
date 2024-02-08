const $btnKick = document.getElementById("btn-kick");
const $btnSpecial = document.getElementById("btn-special");
const logs = document.getElementById("logs");

function createClickCounter(button, maxClicks) {
    let clickCount = 0;

    function handleClick() {
        if (clickCount < maxClicks) {
            clickCount++;
            console.log(`Button "${button.id}" clicked (${clickCount}/${maxClicks} clicks)`);
            // Ваш код для обработки клика здесь
        } else {
            console.log(`Button "${button.id}" reached maximum clicks (${maxClicks} clicks)`);
            button.disabled = true;
        }
    }

    button.addEventListener('click', handleClick);

    return {
        getClickCount: () => clickCount,
        resetClickCount: () => {
            clickCount = 0;
            button.disabled = false;
            console.log(`Button "${button.id}" click count reset`);
        }
    };
}

const kickCounter = createClickCounter($btnKick, 6);
const specialCounter = createClickCounter($btnSpecial, 6);

const fighter = {
    character: {
        name: 'Pikachu',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById("health-character"),
        elProgressbar: document.getElementById("progressbar-character"),
        renderHP() {
            this.renderHPLife();
            this.renderProgressbarHP();
        },
        renderHPLife() {
            this.elHP.innerText = `${this.damageHP}/${this.defaultHP}`;
        },
        renderProgressbarHP() {
            this.elProgressbar.style.width = `${this.damageHP}%`;
        },
        changeHP(count) {
            const log = this === fighter.enemy ? generateLog(this, fighter.character, count) : generateLog(this, fighter.enemy, count);

            logs.innerHTML = log;
            if (this.damageHP < count) {
                this.damageHP = 0;
                alert(`Бедный ${this.name} проиграл бой!`);
                $btnKick.disabled = true;
                $btnSpecial.disabled = true;
            } else {
                this.damageHP -= count;
            }
            this.renderHP();
        },
    },
    enemy: {
        name: 'Charmander',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById("health-enemy"),
        elProgressbar: document.getElementById("progressbar-enemy"),
        renderHP() {
            this.renderHPLife();
            this.renderProgressbarHP();
        },
        renderHPLife() {
            this.elHP.innerText = `${this.damageHP}/${this.defaultHP}`;
        },
        renderProgressbarHP() {
            this.elProgressbar.style.width = `${this.damageHP}%`;
        },
        changeHP(count) {
            const log = this === fighter.enemy ? generateLog(this, fighter.character, count) : generateLog(this, fighter.enemy, count);

            console.log(log);

            if (this.damageHP < count) {
                this.damageHP = 0;
                alert(`Бедный ${this.name} проиграл бой!`);
                $btnKick.disabled = true;
                $btnSpecial.disabled = true;
            } else {
                this.damageHP -= count;
            }
            this.renderHP();
        },
    },
};

function generateLog(firstPerson, secondPerson, damage) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name}с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name} приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name}случайно нанес мощнейший удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name}нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name}пошатнувшись влепил подлый удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name}провел дробящий удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name}беспричинно ударил в ногу противника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name}случайно влепил стопой в живот соперника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length) - 1];
}

$btnKick.addEventListener('click', function () {
    console.log('Kick');
    fighter.character.changeHP(20);
    console.log(`Remaining clicks: ${kickCounter.getClickCount()}`);
});

$btnSpecial.addEventListener('click', function () {
    console.log('Special Attack');
    fighter.character.changeHP(30);
    console.log(`Remaining clicks: ${specialCounter.getClickCount()}`);
});

function init() {
    console.log('Start game!');
    fighter.character.renderHP();
    fighter.enemy.renderHP();
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
