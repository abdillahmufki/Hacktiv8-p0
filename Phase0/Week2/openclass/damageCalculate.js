function attack(damage) {
    //write your code here
    return damage - 2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    //write your code here
    let temp = attack(damagePerAttack);

    if (numberOfAttacks === 0) {
        return 0;
    } else {
        return temp + damageCalculation(numberOfAttacks - 1, damagePerAttack);
    }
}