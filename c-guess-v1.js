// ג
let answer = true;

while (answer) {
    let cancelled = false;
    const secretNum = Math.floor(Math.random() * 20) + 1;
    let counterGuess = 1;
    let guessText = (prompt("נחשי מספר בין 1 ל20"));
    if (guessText === null) {
            console.log("לחצו ביטול");
            cancelled = true;
            break;
        }
    let guess = Number(guessText);

    while (guess !== secretNum) {

        if (guess > secretNum) {
            alert("גבוה מדי");
        }
        else {
            alert("נמוך מדי");
        }

        guessText = prompt("נחשי מספר בין 1 ל20");
        if (guessText === null) {
            console.log("לחצו ביטול");
            cancelled = true;
            break;
        }
        guess = Number(guessText);
        counterGuess++;
    }

    if (cancelled === true) {
        break;
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

    answer = confirm("לשחק שוב?");
    console.log(answer);
}