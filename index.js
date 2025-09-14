// Code your solution in this file!

distanceFromHqInBlocks = (destination) => {
    const hqLocation = 42;
    if (destination > hqLocation) {
        return destination - hqLocation;
    } else {
        return hqLocation - destination;
    }
}
distanceFromHqInFeet = (destination) => {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(destination) * feetPerBlock;
}
distanceTravelledInFeet = (start, destination) => {
    const feetPerBlock = 264;
    if (destination > start) {
        return (destination - start) * feetPerBlock;
    } else {
        return (start - destination) * feetPerBlock;
    }
}

// function calculatesFarePrice(start, destination) {
//     let charge = 2;
//     if (distanceTravelledInFeet(start, destination) <= 400) {
//         return free;
//     } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
//         return (distanceTravelledInFeet(start, destination) - 400) * charge;
//     } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
//         return '25$' ;
//     } else if (distanceTravelledInFeet(start, destination) > 2500) {
//         return "cannot travel that far" ;
//     }
    
// }

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}


