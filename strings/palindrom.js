function palindrom(str) {
	// делаем нижний регистр строки
	str = str.toLowerCase();
	// переводим строку в массив
	let stringResult = str.split('');
	// переворачиваем получившися массив соотв методом
	stringResult = stringResult.reverse();
	console.log(stringResult)
	// собираем перевернутый результат в строку
	stringResult = stringResult.join('');

	if (str == stringResult) return true;
	else return false;
}

//* рефакторинг
function palindrom2(str) {
	str = str.toLowerCase();
	return str == str.split('').reverse().join('');
}

//* знание ES6 - стрелочная функция
const palindrom3 = str => {
	str = str.toLowerCase();
	return str == str.split('').reverse().join('');
}


console.log(palindrom('sos'));
console.log(palindrom2('sos'));
console.log(palindrom3('sos'));
console.log(palindrom('son'));