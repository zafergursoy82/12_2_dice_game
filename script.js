
document.getElementById("throwButton").addEventListener("click", function() {

    var randomNum1 = randomize1();

    document.getElementById("img1").setAttribute("src", srcMaker(randomNum1));


    var randomNum2 = randomize2();

    document.getElementById("img2").setAttribute("src", srcMaker(randomNum2));



    document.getElementById("header").textContent = writeResult(randomNum1, randomNum2);

});


function randomize1() {
    var random1 = Math.floor(Math.random()*6) + 1;
    return random1;
}

function randomize2() {
    var random2 = Math.floor(Math.random()*6) + 1;
    return random2;
}

function srcMaker(num) {
    var src = "./images/dice" + num + ".png";
    return src;
}

function writeResult(randomNum1, randomNum2) {

    var resultText="";

    if(randomNum1 > randomNum2) {
        resultText = "🚩 Player1 wins!";
    } else if (randomNum2 > randomNum1) {
        resultText = "Player2 wins! 🚩";
    } else {
        resultText = "Draw!";
    }

    return resultText;
}




