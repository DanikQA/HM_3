let year = Number(prompt('Enter year'));

alert((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 'Високосний рік' : 'Не високосний рік');