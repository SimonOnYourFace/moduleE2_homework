// Unit E2.4 - Задание 3.

function reverseStr(str) {
    var newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}

console.log(reverseStr('Доброго утра, мир!'));




// Unit E2.4 - Задание 4.

function random() {
    let number = Math.ceil(Math.random() * 100);

    console.log(number)
}

random();


