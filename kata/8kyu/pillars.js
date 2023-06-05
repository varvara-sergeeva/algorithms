// There are pillars near the road. The distance between the pillars is the same and 
// the width of the pillars is the same. Your function accepts three arguments:
// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last 
// pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
	if (numPill < 2) {
		return 0
	} else {
		return ((numPill - 2) * width) + ((numPill - 1) * dist * 100)
	}
}

console.log(pillars(2, 20, 25))
console.log(pillars(1, 10, 10))
console.log(pillars(11, 15, 30))


// не мое решение более короткое

function pillars2(num_pill, dist, width) {
	return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
}