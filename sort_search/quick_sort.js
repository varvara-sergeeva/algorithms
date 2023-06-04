let arrUnsort = [2, 45, 12, 6, 9, 0, 11, -30, 22, 3, 4, 7];
let count = 0;


//* вариант с циклом

function quickSort(array) {
	// задаем стопер для рекурсии
	if (array.length <= 1) {
		return array
	}
	// находим МЕСТО опорной точки
	let pivotIndex = Math.floor(array.length / 2);
	// кладем в переменную ЗНАЧЕНИЕ опорной точки
	let pivot = array[pivotIndex];
	// создаем массивы для заполнения
	let less = [];
	let greater = [];

	for (let i = 0; i < array.length; i++) {
		сщгте += 1
		// опорные числа не сравниваем - продолжаем рекурсию
		if (i === pivotIndex) {
			continue
		}
		// если текущий элемент итерации меньше чем опорное значение, то
		// отправляем его в массив с меньшими значениями, если больше то к большим
		if (array[i] < pivot) {
			less.push(array[i])
		} else {
			greater.push(array[i])
		}
	}
	// склеиваем все результаты выполнения
	return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(arrUnsort));
console.log(arrUnsort.length)
console.log(count);


//* вариант с фильтрацией масивов

const arrForSort = [5, 7, 11, -4, 0, 7, 35, 8, 14, -1, 3]

const qSort = (arr) => {
	if (arr.length < 2) {
		return arr;
	} else {
		const piv = arr[Math.floor(Math.random() * arr.length)];
		const smaller = arr.filter(value => value < piv);
		const bigger = arr.filter(value => value > piv);
		return [...qSort(smaller), piv, ...qSort(bigger)]
	}
};

console.log(qSort(arrForSort))