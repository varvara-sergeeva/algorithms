// рекурсия - вызывает сама себя СТОПЕР обязателен или стек переполнится

// факториал - перемножение всех составных чисел по порядку 

const factorial = (n) => {
	if (n === 1) {
		return 1
	}
	return n * factorial(n - 1)
}

console.log(factorial(5))

// по сути происходит от обратного
// 5*4*3*2*1 = 120


// числа Фибоначи - последовательность - каждое след число явл суммой двух предыдущих
// пример = 1,1,2,3,5,8,13,21,34
// фибоначи вычислять рекурсивным методо ПЛОХАЯ идея, он просто хорош для объяснения рекурсии

const fibonachi = (n) => {
	// пишем условие для стопа если текущее число является первым или вторым, то верни 1
	if (n === 1 || n === 2) {
		return 1
	}
	return fibonachi(n - 1) + fibonachi(n - 2)
}

console.log(fibonachi(4))