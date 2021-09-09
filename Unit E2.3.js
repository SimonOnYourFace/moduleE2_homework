// Unit E2.3 - Задание 1.

var years = prompt('Введите значение?', );
alert('Вы ввели: ' + years)
var stroka = typeof(years + 0)


alert('Вы ввели: ' + stroka )
alert(typeof stroka)


// Unit E2.3 - Задание 2.

let x = null;

if (typeof x === 'number') {
    console.log('nr is number');
}

else if (typeof x === 'string') {
    console.log('nr is string');
}

else if (typeof x === 'boolean') {
    console.log('x is boolean');
}

else {
    console.log('Тип x не определён');
}

