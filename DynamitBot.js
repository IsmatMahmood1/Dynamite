class Bot {

    makeMove(gamestate) {

    let rounds = new Array; 
    rounds = gamestate.rounds;
    let p1Count = 0;
    let p2Count = 0;

    for (let i = 0; i< rounds.length;i++){
        let p1Check = rounds[i].p1;
        if (p1Check === 'D'){
            p1Count++;
        }
        let p2Check = rounds[i].p2;
        if (p2Check === 'D'){
            p2Count++;
        }  
    }

    if(p1Count<100){ // we have dynamight so we should use it
        // play dynamight 
        return 'D';
    }else if(p2Count<100){ // P2 still has dynamight
        
        // play with waterbomb
        let temp = Math.random();
        if(temp<0.25){
            return 'R';
        }else if (temp<0.5){
            return 'P';
        }else if (temp<0.75){
            return 'S';
        }else {
            return 'W';
        }

    }else { // p2 has no dynamight left
        // play no waterbomb
        let temp = Math.random();
        if(temp<0.33){
            return 'R';
        }else if (temp<0.66){
            return 'P';
        }else {
            return 'S';

    }

}


module.exports = new Bot();

    
