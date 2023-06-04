// пусть у нас в массиве 16 чисел - выходит скорость поиска 
// в 4 итерации можно найти любое число - логорифм от 2 от кол-ва эл-тов
// рационально использовать ТОЛЬКО на УЖЕ отсортированных данных

const arraySample = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let count = 0

// используем цикл

function binarySearch(array, item) {
	let start = 0;
	let end = array.length;
	let middle;
	// флаг нашли или нет искомое
	let found = false;
	let position = -1;
	// определяем границы действия цикла: ЛИБО не нашли элемент, ЛИБО старт равен концу
	while (found === false && start <= end) {
		count += 1;
		// определяем середину - складываем первое и последнее число и делим на два, 
		// если будет нечетное число, чтобы небыло дробей используем округление
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item) {
			found = true;
			position = middle;
			return position;
		}
		// если искомое МЕНЬШЕ среднего числа то нам нужна левая часть массива
		if (item < array[middle]) {
			// вычисляем новое значение конца, чтобы правая часть не учитывалась
			end = middle - 1
		} else {
			// и наоборот если искомое БОЛЬШЕ среднего, то старт теперь равен среднее плюс один
			start = middle + 1
		}
	}
	return position;
}
console.log(binarySearch(arraySample, 11))
console.log(count);


//*  рекурсивный метод

function bnSearchRec(array, item, start, end) {
	let middle = Math.floor((start + end) / 2);

	if (item === array[middle]) {
		return middle
	}
	// если число больше или меньше середины то мы определяем новые границы массивов
	// и делаем рекурсию на оставшихся данных
	if (item < array[middle]) {
		return bnSearchRec(array, item, start, middle - 1)
	} else {
		return bnSearchRec(array, item, middle + 1, end)
	}
}

console.log(bnSearchRec(arraySample, 14, 0, arraySample.length))