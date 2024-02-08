import { generateLog, getRandom } from './utils.js';

export class Pokemon {
    constructor(name, defaultHP, damageHP, elHP, elProgressbar, enemy, $btnKick, $btnSpecial, logs) {
        this.name = name;
        this.defaultHP = defaultHP;
        this.damageHP = damageHP;
        this.elHP = elHP;
        this.elProgressbar = elProgressbar;
        this.enemy = enemy;
        this.$btnKick = $btnKick;
        this.$btnSpecial = $btnSpecial;
        this.logs = logs;
        this.renderHP();
    }

    renderHP() {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderHPLife() {
        this.elHP.innerText = `${this.damageHP}/${this.defaultHP}`;
    }

    renderProgressbarHP() {
        this.elProgressbar.style.width = `${this.damageHP}%`;
    }

    changeHP(count) {
        const log = this === this.enemy ? generateLog(this, this.enemy, count) : generateLog(this, this.enemy, count);

        this.logs.innerHTML += log;
        if (this.damageHP < count) {
            this.damageHP = 0;
            alert(`Бедный ${this.name} проиграл бой!`);
            this.$btnKick.disabled = true;
            this.$btnSpecial.disabled = true;
        } else {
            this.damageHP -= count;
        }
        this.renderHP();
    }
}
