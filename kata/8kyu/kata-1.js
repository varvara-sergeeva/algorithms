//! задание
// Build a function that returns an array of integers from n to 1 where n>0
// n=5 --> [5,4,3,2,1]

//* мое решение

const reverseSeq = n => {
	let result = [];
	do {
		n = (n - 1)
		result = (result + (n + 1)) + ','
	} while (n > 0)
	let arrResume = result.split(',').map(string => +string);
	arrResume.pop();
	return arrResume
};

//* решения других более складные

const reverseSeq1 = n => {
	let arr = [];
	for (let i = n; i > 0; i--) {
		arr.push(i);
	}
	return arr;
};


const reverseSeq2 = n => {
	let arr = [];
	while (n > 0) {
		arr.push(n);
		n--;
	}
	return arr;
};


//* продвинутые решения

const reverseSeq3 = n => {
	return Array(n).fill(0).map((e, i) => n - i);
};


const reverseSeq4 = length => Array.from({
	length
}, () => length--)