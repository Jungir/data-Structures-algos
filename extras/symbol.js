const BLUE = Symbol('blue');
const cat = 'blue';

function getThreatLevel(color){
    switch (color){
        case BLUE:
            return 'low'
        default:
            console.log('no color for that')
    }
}

console.log(getThreatLevel(cat));
