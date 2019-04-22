var p1 = document.querySelector('#p1');
var p2 = document.getElementById('p2');
var res = document.getElementById("res");
var p1display = document.querySelector('#p1display');
var p2display = document.querySelector('#p2display');
var num_input = document.querySelector("input");
var para = document.querySelector("#pt");


var gameOver = false;
var winScore = 5;
var p1_score = 0;
var p2_score = 0;

p1.addEventListener("click", function(){
    if(!gameOver){
        p1_score++;
        if(p1_score === winScore){
            p1display.classList.add("win");
            alert("GAMEOVER!")
            gameOver = true

        }
            p1display.textContent = p1_score;
    }

});

p2.addEventListener("click", function(){
    if(!gameOver){
        p2_score++;
        if(p2_score === winScore){
            p2display.classList.add("win");
            alert("GAMEOVER!")
            gameOver = true

        }
            p2display.textContent = p2_score;
    }

});


res.addEventListener("click", function(){
    p1_score = 0;
    p2_score = 0;

    p1display.textContent = 0;
    p2display.textContent = 0;

    p1display.classList.remove("win");
    p2display.classList.remove("win");

    gameOver = false;

});

num_input.addEventListener("change", function(){

    pt.textContent = num_input.value;

    winScore = Number(num_input.value);
});
