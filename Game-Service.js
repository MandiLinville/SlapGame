function GameService(){
    
    function Target(){
        this.health = 100;
        this.items = [];
        this.slap = 1;
        this.punch = 5;
        this.kick = 10;
        this.hadouken = 50;

    }

    this.pikachu = new Target();
    this.teamRocket = new Target();
    this.fightBack = function(){
        this.teamRocket.health -= (Math.random()*10).toFixed();
    }
    


















}