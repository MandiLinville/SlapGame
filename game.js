var health = 100;

function killPika() {
    if(health<=0){
    document.getElementById('target').src='./pikachuDead.png';
}}

function updateScreen() {
    var updateScreen;
    console.log(health);
    document.getElementById('health').innerText = health
}

function checkDeath() {
    if (health <= 0) {
        document.getElementById('message').innerHTML = ("Victory!!! Pikachu is dead!");
    }
}
function zeroOutLife() {
    if (health <= 0) {
        health = 0
    }
}

function applyDamage() {
    zeroOutLife()
    updateScreen()
    checkDeath()
    killPika()
}

function onSlap() {
    health = health - 1;
    applyDamage()
}

function onPunch() {
    health = health - 5;
    applyDamage()
}

function onKick() {
    health = health - 10;
    applyDamage()
}

function onHadouken() {
    health = health - 50;
    applyDamage()
};


