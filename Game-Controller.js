function GameController(){
    var gs = new GameService();


this.killPika = function() {
    if (gs.pikachu.health <= 0) {
        document.getElementById('target').src = './gs.pikachuDead.png';
    }
}

this.useShield = function() {
        document.getElementById('target').src = 'https://mysinglehost.com/images/mysinglehost-gold.png'
    }


this.pikaThunderStone = function() { 
    gs.pikachu.health = gs.pikachu.health + 1;
        document.getElementById('target').src = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZw6lF401e9x_f9ragmetjgKRfKm6k9alhHPKN-k_tb1OqcZ9AZQ';
    this.updateScreen()
}

this.pikaEvolveRaichu = function() {
    gs.pikachu.health = gs.pikachu.health + 5
        document.getElementById('target').src = 'https://img09.deviantart.net/ed1a/i/2011/120/f/3/raichu_by_lilly_gerbil-d3f9fma.png'
        this.updateScreen()
}

this.updateScreen = function() {
    var updateScreen;
    console.log(gs.pikachu.health);
    document.getElementById('health').innerText = gs.pikachu.health
    document.getElementById('health2').innerText = gs.teamRocket.health
}

this.checkDeath = function() {
    if (gs.pikachu.health <= 0) {
        document.getElementById('message').innerHTML = ("Victory!!! gs.pikachu is dead!");
    }
}
this.zeroOutLife = function() {
    if (gs.pikachu.health <= 0) {
        gs.pikachu.health = 0
    }
}

this.applyDamage = function() {
    gs.fightBack()
    this.zeroOutLife()
    this.updateScreen()
    this.checkDeath()
    this.killPika()
}

this.onSlap = function() {
    console.log('btn working') 
    gs.pikachu.health = gs.pikachu.health - gs.pikachu.slap;
    this.applyDamage()
}

this.onPunch = function() {
    gs.pikachu.health = gs.pikachu.health - gs.pikachu.punch;
    this.applyDamage()
}

this.onKick = function(){
    gs.pikachu.health = gs.pikachu.health - gs.pikachu.kick;
    this.applyDamage()
}

this.onHadouken = function() {
    gs.pikachu.health = gs.pikachu.health - gs.pikachu.hadouken;
    this.applyDamage()
};

}

var gc = new GameController(); 