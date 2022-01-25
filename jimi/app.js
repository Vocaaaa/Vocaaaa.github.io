
function vowelOrConsonant(letter) {
    let counter = 0;
    for(i = 0; i < letter.length; i++) {
        if(letter == "a") {
            counter++
        } if(letter == "e") {
                counter++
            } if(letter == "i") {
                counter++
            } if(letter == "o") {
                counter++
            } if(letter == "u") {
                counter++
            } if(letter == "y") {
                counter++
            } if(letter == "å") {
                counter++
            } if(letter == "ä") {
                counter++
            } if(letter == "ö") {
                counter++
            }

    }
    console.log(letter + " har " + counter + " vokaler");
    return counter;



}

vowelOrConsonant("Mamma");
vowelOrConsonant("Hej på dig");