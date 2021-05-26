/*switch (Math.floor(Math.random()*5)){
    case 0:
        console.log('R');
        break;
    case 1:
        console.log('P');
        break;
    case 2:
        console.log('S');
        break;
    case 3:
        console.log('W');
        break;
    case 4:
        console.log('D');
        break;
}*/
//console.log(Math.floor(Math.random()*5)); picks a random number from 0-4

/*let valArr = [['D',23],['W',10],['R',5],['P',2],['S',9]];
valArr.sort(compareSecondColumn);

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

console.log(valArr);*/
function RandomRPS(){
    switch (Math.floor(Math.random()*3)){
        case 0:
            return 'R';
        case 1:
            return 'P';
        case 2:
            return 'S';
    }
}

console.log(RandomRPS());