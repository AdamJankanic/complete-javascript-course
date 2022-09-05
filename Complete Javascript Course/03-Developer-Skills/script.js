// Remember, we're gonna use strict mode in all scripts now!
'use strict';

function printForecast(array) {
  for (let day = 1; day <= array.length; day++) {
    console.log(`${array[day - 1]}🌡️ in ${day} days.`);
  }
}

const arrayOfTemp = [17, 21, 23];
const arrayOfTemp2 = [12, 5, -5, 0, 4];

printForecast(arrayOfTemp);
printForecast(arrayOfTemp2);
