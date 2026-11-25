// ג
const secretNum = Math.floor(Math.random() * 20) + 1;
let counterGuess = 1;
let guess = Number(prompt(`נחשי מספר בין 1 ל20 `));

console.log(secretNum);
console.log(guess);

while (guess !== secretNum) {

    if (guess > secretNum) {
        alert("גבוה מדי");
    }
    else {
        alert("נמוך מדי");
    }

    guess = Number(prompt("נחשי מספר בין 1 ל20"));
    counterGuess++;
}

if (counterGuess <= 3) {
    console.log(`מדהים!  ניחשת אחרי ${counterGuess} ניסיונות`);
    alert(`מדהים!  ניחשת אחרי ${counterGuess} ניסיונות`);
}

else if (counterGuess <= 6) {
    console.log(`יפה מאוד, ניחשת אחרי ${counterGuess} ניסיונות`);
    alert(`יפה מאוד, ניחשת אחרי ${counterGuess} ניסיונות`);
}

else {
    console.log(`אפשר לשפר, ניחשת אחרי ${counterGuess} ניסיונות`);
    alert(`אפשר לשפר, ניחשת אחרי ${counterGuess} ניסיונות`);
}