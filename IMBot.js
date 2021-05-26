class Bot {
    makeMove(gamestate) {
        let rounds = gamestate.rounds;

        let p1DynamiteCount = 0;
        let p2DynamiteCount = 0;
        let p2MovesArr = [];

        for (let i =0;i<rounds.length;i++){
            p2MovesArr.push(rounds[i].p2); //populates p2MovesArr with all the moves p2 has made
            if (rounds[i].p1==="D"){
                p1DynamiteCount++;
            }
            if (rounds[i].p2==="D"){
                p2DynamiteCount++;
            }
        }

        let p2MovesFrequency = []; //creates new array
        for (let i =0;i<5;i++){
            p2MovesFrequency[i] = new Array(2); // converts array into 2D array
        }
        p2MovesFrequency[0][0]='D'; // populates with the moves and their count/frequency
        p2MovesFrequency[0][1]=p2MovesArr.filter('D').length;
        p2MovesFrequency[1][0]='W';
        p2MovesFrequency[1][1]=p2MovesArr.filter('W').length;
        p2MovesFrequency[2][0]='R';
        p2MovesFrequency[2][1]=p2MovesArr.filter('R').length;
        p2MovesFrequency[3][0]='P';
        p2MovesFrequency[3][1]=p2MovesArr.filter('P').length;
        p2MovesFrequency[4][0]='S';
        p2MovesFrequency[4][1]=p2MovesArr.filter('S').length;

        p2MovesFrequency.sort(compareSecondColumn); //sorts the array of moves by frequency, so the move played most often
                                                    //is in the first place
        function compareSecondColumn(a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] > b[1]) ? -1 : 1;
            }
        }

        let p2_1stMostFrequentMove = p2MovesFrequency[0][0];
        let p2_2ndMostFrequentMove = p2MovesFrequency[1][0];
        let p2_3rdMostFrequentMove = p2MovesFrequency[2][0];

        if (p2_1stMostFrequentMove === 'D' && p2DynamiteCount<100){
            return 'W';
        }
        else if (p2_1stMostFrequentMove === 'D' && p1DynamiteCount<100){
            return 'D';
        }
        else if (p2_1stMostFrequentMove === 'W'){
            return RandomRPS();
        }
        // need more logic here


        else return RandomRPS();







        function RandomRPS(){ //to make random selection between RPS
            switch (Math.floor(Math.random()*3)){
                case 0:
                    return 'R';
                case 1:
                    return 'P';
                case 2:
                    return 'S';
            }
        }
 
    }
}

module.exports = new Bot();