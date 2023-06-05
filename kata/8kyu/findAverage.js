// вычислить среднее арифметическое между числами массива

function findAverage(array) {
	if (array.length == 0) {
		return 0
	} else {
		const result = array.reduce(function (sum, number) {
			return sum + number;
		}, 0);
		return result / array.length
	}
}

console.log(findAverage([1, 1, 1]))
console.log(findAverage([1, 2, 3]))
console.log(findAverage([1, 2, 3, 4]))


// не мои более красивые решения


var find_average = (array) => {
	return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
}

function find_average2(arr) {
	return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}