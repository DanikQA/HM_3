year = Number(prompt('Enter age'));   // Почему нульзя объявить переменную через let
let lastDigit = year % 10;

 if (lastDigit === 1) {
    alert (`Вам ${year} рік`);
} else if (lastDigit >= 2 && lastDigit <= 4) {
    alert (`Вам ${year} роки`);
} else {
    alert (`Вам ${year} років`);
}