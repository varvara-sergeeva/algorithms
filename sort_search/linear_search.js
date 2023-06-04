const array = [1, 5, 6, 11, 20, 77, 100, 3, 0, 4, 2]
let count = 0;

function linearSearch(array, desired) {
	for (let i = 0; i < array.length; i++) {
		count += 1;
		if (array[i] === desired) {
			return i;
		}
	}
	return null
}
console.log(linearSearch(array, 22))
console.log(linearSearch(array, 100))
console.log(count)