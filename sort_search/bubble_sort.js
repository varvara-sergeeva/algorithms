// пузырьковая сортировка самая не эффективная
// сравниваем поочередно два соседних числа и тот что меньше становится вперед
// повторяем пока большие числа не всплывут наверх - конец массива

let arrUnsort = [2, 45, 12, 6, 9, 0, 11, -30, 22, 3, 4, 7];
let count = 0;

function bubbleSort(array) {
	// первый цикл для всего массива
	for (let i = 0; i < array.length; i++) {
		// второй цикл ТОЖЕ для всего массива
		for (let j = 0; j < array.length; j++) {

			// если текущее значение array[j] больше того что следует за ним array[j+1], 
			// то они должны поменяться местами
			if (array[j + 1] < array[j]) {
				// меняем местами ЗНАЧЕНИЯ на МЕСТАХ

				// сохраняем МЕСТО текущего элемента массива, который имеет большее значение
				let replace = array[j]
				// ЗНАЧЕНИЕ текущего эл-та кладем на место СЛЕДУЮЩЕГО (высплывает, в конец массива)
				array[j] = array[j + 1]
				// в сохраненное МЕСТО кладем ЗНАЧЕНИЕ которое меньше
				array[j + 1] = replace;
			}
			count += 1;
		}
	}
	return array;
}

// сложность составляет кол-во эл-тов в массиве в квадрате
console.log(arrUnsort.length)
console.log(bubbleSort(arrUnsort))
console.log(count);