class Bot {

    makeMove(gamestate) {

        let rounds = new Array;
        rounds = gamestate.rounds;
        let p1Count = 0;
        let p2Count = 0;

        let booleanPattern = false;

        let val1;
        let val2;
        let val3;

        let dynArray = [];

        let dynamiteDiff1;
        let dynamiteDiff2;
        let dynamiteDiff3;
        let booleanPatternDynamight = false;

        let nextDynamight;
        let counterI;

        // another counter for patterns. 
        // a counter that notices you only play rock - a counter that only looks at the last 3 moves.
        // if those are all rock then use paper. otherwise do the below. 

        for (let i = 0; i < rounds.length; i++) {
            counterI=i;
            let p1Check = rounds[i].p1;
            if (p1Check === 'D') {
                p1Count++;
            }
            let p2Check = rounds[i].p2;
            if (p2Check === 'D') {
                p2Count++;
                dynArray.push(i);
                
            }
        }

        if(dynArray.length>6){
            let dynArrayDiff1 = dynArray[dynArray.length-1] - dynArray[dynArray.length-2];
            let dynArrayDiff2 = dynArray[dynArray.length-2] - dynArray[dynArray.length-3];
            let dynArrayDiff3 = dynArray[dynArray.length-4] - dynArray[dynArray.length-5];
    
            // check difference 
            if((dynArrayDiff1==dynArrayDiff2)&& (dynArrayDiff2==dynArrayDiff3)){
                booleanPatternDynamight = true;
                nextDynamight = dynArray.length-1 + dynArrayDiff3;
            }
        }



        // just count 3 as a process
        
        if(rounds.length<3){
            val1 = 'X'
            val2 = 'X'
            val3 = 'X'

        }else{
            val1 = rounds[rounds.length-1].p2;
            val2 = rounds[rounds.length-2].p2;
            val3 = rounds[rounds.length-3].p2;
        }


        if((val1==val2)&& (val2==val3)){
            booleanPattern = true;
        }

        if((booleanPatternDynamight)&&(counterI === nextDynamight)&&(p2Count<100)) {
            return 'W';
            
        }else if(booleanPattern){
            // do switch
            switch (val3){
                case "R":
                    return "P";
                case "P":
                    return "S";
                case "S":
                    return "R"
                case "D":
                    return "W";
                case "W":
                    return "R"
                case "X":
                    return "D"
            }

        }else if (p1Count < 100 && (rounds.length%9===0)) { // we have dynamight so we should use it
            // play dynamight
           // console.log (p1Count, p2Count); 
            return 'D';
        } else if (p2Count < 100) { // P2 still has dynamight

            // play with waterbomb
            let temp = Math.random();
            if (temp < 0.25) {
                return 'R';
            } else if (temp < 0.5) {
                return 'P';
            } else if (temp < 0.75) {
                return 'S';
            } else {
                return 'W';
            }

        } else { // p2 has no dynamight left
            // play no waterbomb
            let temp = Math.random();
            if (temp < 0.33) {
                return 'R';
            } else if (temp < 0.66) {
                return 'P';
            } else {
                return 'S';
            }
        }
    }
};

module.exports = new Bot();