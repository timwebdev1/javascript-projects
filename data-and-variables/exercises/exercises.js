let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

console.log(shuttleName, "will take", daysToMars, "days to reach Mars.")


let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName, "will take", daysToMoon, "days to reach Moon.")

console.log(16 - 2 * 5 / 3 + 1);
console.log(2 ** 2 ** 3 * 3);
