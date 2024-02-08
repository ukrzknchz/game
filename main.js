const $btnKick = document.getElementById("btn-kick");
const $btnSpecial = document.getElementById("btn-special");

const fighter = {
    character: {
        name: 'Pikachu',
        defaultHP: 100,
        damageHP: 100,
        elHP: document.getElementById("health-character"),
        elProgressbar: document.getElementById("progressbar-character"),
        renderHP: function () {
            this.renderHPLife();
            this.renderProgressbarHP();
        },
        renderHPLife: function () {
            this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
        },
        renderProgressbarHP: function () {
            this.elProgressbar.style.width = this.damageHP + '%';
        },
        changeHP: function (count) {
            if (this.damageHP < count) {
                this.damageHP = 0;
                alert("Бедный " + this.name + " проиграл бой!");
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
        renderHP: function () {
            this.renderHPLife();
            this.renderProgressbarHP();
        },
        renderHPLife: function () {
            this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
        },
        renderProgressbarHP: function () {
            this.elProgressbar.style.width = this.damageHP + '%';
        },
        changeHP: function (count) {
            if (this.damageHP < count) {
                this.damageHP = 0;
                alert("Бедный " + this.name + " проиграл бой!");
                $btnKick.disabled = true;
                $btnSpecial.disabled = true;
            } else {
                this.damageHP -= count;
            }
            this.renderHP();
        },
    },
};

$btnKick.addEventListener('click', function () {
    console.log('Kick');
    fighter.character.changeHP(20);
});

$btnSpecial.addEventListener('click', function () {
    console.log('Special Attack');
    fighter.character.changeHP(30);
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
