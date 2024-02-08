// utils.js
export const generateLog = (firstPerson, secondPerson, damage) => {
    const firstPersonName = firstPerson && firstPerson.name ? firstPerson.name : 'Unknown';
    const secondPersonName = secondPerson && secondPerson.name ? secondPerson.name : 'Unknown';

    const logs = [
        `${firstPersonName} вспомнил что-то важное, но неожиданно ${secondPersonName}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} поперхнулся, и за это ${secondPersonName}с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} забылся, но в это время наглый ${secondPersonName} приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} пришел в себя, но неожиданно ${secondPersonName}случайно нанес мощнейший удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} поперхнулся, но в это время ${secondPersonName}нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} удивился, а ${secondPersonName}пошатнувшись влепил подлый удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} высморкался, но неожиданно ${secondPersonName}провел дробящий удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} пошатнулся, и внезапно наглый ${secondPersonName}беспричинно ударил в ногу противника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} расстроился, как вдруг, неожиданно ${secondPersonName}случайно влепил стопой в живот соперника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPersonName} пытался что-то сказать, но вдруг, неожиданно ${secondPersonName} со скуки, разбил бровь сопернику. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[getRandom(logs.length) - 1];
};

export const getRandom = (num) => Math.ceil(Math.random() * num);
