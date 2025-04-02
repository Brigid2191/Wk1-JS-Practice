function checkSpeed(speed) {
    const speedLimit = 70; //Sets the speed to a constant speed of 70km/s
    const maxPoints = 12; //This is the maximu points a driver should get 

    if (speed <= speedLimit) {// Condtional statement is the driver meets the function it prints OK.
        console.log("Ok"); 
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        if (demeritPoints >= maxPoints) {
            console.log("License suspended");//If the points exceed maximum points, prints License Suspended
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}
// Tests the function so as to print results
checkSpeed(80); 