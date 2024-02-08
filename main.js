const $btnKick = document.getElementById("btn-kick");
const $btnSpecial = document.getElementById("btn-special");

const fighter = {
    character: {
        name: 'Pikachu',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById("health-character"),
        elProgressbar: document.getElementById("progressbar-character"),
    },
    enemy: {
        name: 'Charmander',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById("health-enemy"),
        elProgressbar: document.getElementById("progressbar-enemy"),
    },
};

$btnKick.addEventListener('click', function(){
    console.log('Kick');
    battleRound(20);
});

$btnSpecial.addEventListener('click', function(){
    console.log('Special Attack');
    battleRound(30); 
});

function init() {
    console.log('Start game!');
    renderHP(fighter.character);
    renderHP(fighter.enemy);
}

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person){
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbarHP(person){
    person.elProgressbar.style.width = person.damageHP + '%';
}

function battleRound(damage){
    changeHP(damage, fighter.character);
    changeHP(random(20), fighter.enemy);
}

function changeHP(count, person){
    if(person.damageHP < count) {
        person.damageHP = 0;
        alert("Бедный " + person.name + " проиграл бой!");
        $btnKick.disabled = true;
        $btnSpecial.disabled = true;
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init();
