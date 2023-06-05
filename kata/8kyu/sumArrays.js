//  to get the sum of two arrays... Actually the sum of all their elements

// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива,
// вызывая func для каждого элемента и передавая промежуточный результат между вызовами.

const someArr1 = [2, 3, 4]
const someArr2 = [8, 7, 6]

function arrayPlusArray(arr1, arr2) {
	const sumArr1 = arr1.reduce((sum, number) => {
		const calcSumArr1 = sum + number;
		return calcSumArr1;
	}, 0)
	const sumArr2 = arr2.reduce((sum, number) => {
		const calcSumArr2 = sum + number;
		return calcSumArr2;
	}, 0)
	return sumArr1 + sumArr2;
}

console.log(arrayPlusArray(someArr1, someArr2));



// не мои решения более элегантные



function arrayPlusArray2(arr1, arr2) {
	return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


function arrayPlusArray3(arr1, arr2) {
	let arr = [...arr1, ...arr2];
	return arr.reduce((a, b) => a + b);
}