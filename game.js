var health = 100;

function updateScreen() {
    var updateScreen;
    console.log(health);
    document.getElementById('health').innerText = health
}

function onSlap() {
    if (health <= 0) {
        alert("Victory!!! Pikachu is dead!");
    } else {
        health = health - 1;
        updateScreen()
    }
}

function onPunch() {
    if (health <= 0) {
        alert("Victory!!! Pikachu is dead!");
    } else {
        health = health - 5;
        updateScreen()
    }
}

function onKick() {
    if (health <= 0) {
        alert("Victory!!! Pikachu is dead!");
    } else {
        health = health - 10;
        updateScreen()
    }
}

function onHadouken() {
    if (health <= 0) {
        alert("Victory!!! Pikachu is dead!");
    } else
        health = health - 50;
    updateScreen()
};


