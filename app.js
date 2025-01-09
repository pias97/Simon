let gameSequence = [];
let playerSequence = [];
let h2 = document.querySelector("h2");

let buttons = ["yellow", "red", "blue","aqua"];

let gameStarted = false;
let gameLevel = 0;

document.addEventListener("keypress", function(){
    if(gameStarted == false){
        console.log("game started"); 
        gameStarted = true;

        upLevel(); 
    };
    
});

function upLevel(){
    gameLevel++;
    h2.innerText = `Level ${gameLevel}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = buttons[randomIndex];
    let randomButton = document.querySelector(`${randomColor}`);
    console.log(randomButton);
    flashButton(randomButton);
};

function flashButton(btn){
    btn.classList.add("flash");
    setTimeout(
        function(){
            btn.classList.remove("flash");
        }, 1000
    );
}; 