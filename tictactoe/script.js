const start_btn = document.getElementById('start_btn');
const start_display = document.getElementById('start_display');
win_flag = false;
const winAudio = new Audio('assets/win.wav');
const drwAudio = new Audio('assets/draw.wav');
const clickAudio = new Audio('assets/click.wav');

start_btn.addEventListener('click', () => {
    start_display.style.display = 'none';
clickAudio.play();
})


var box = document.querySelectorAll(".box");

var cell = document.getElementById('box');
// [0][1][2]
// [3][4][5]
// [6][7][8]
let win_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

box = Array.from(box);
var current_player = "x";
//function for checking winner
function check_winner() {
    win_combos.forEach(function (combination) {
        let wincheck = combination.every(
            index => box[index].innerHTML == current_player
        )
        if (wincheck) {
            winmsg(combination, current_player);
        }
    });
}
//marking x and o in board
var filledBox = 0;
box.forEach(function (selected_box) {
    selected_box.addEventListener('click', () => {

        if (selected_box.innerHTML == "") {
            clickAudio.play();
            selected_box.innerHTML = current_player;
            togglePlay(current_player, selected_box);

            filledBox++;
            if (filledBox == 9) {
                filledBox = 0;
                drawmsg();
            }
            check_winner();

            current_player = (current_player == "x") ? "o" : "x";

        }
    })
});
//chance toggler function
var tgle_btn = document.getElementById("toggler");

function togglePlay(current_player, selected_box) {

    if (current_player == "x") {

        tgle_btn.style.left = "92px";
        selected_box.style.color = 'red';
    }
    if (current_player == "o") {

        tgle_btn.style.left = '3px';
        selected_box.style.color = ' rgb(0, 153, 255)';


    }
    return current_player;

}
//restart button function
const restart = document.getElementById("restart");

restart.addEventListener('click', () => {

    alert("restart game");
    clrBoard();
})
//clearing board
function clrBoard() {
    let strike = document.querySelector('.strike');
    strike.style.display = 'none';
    strike.style.transform = 'rotate(0deg)';
    strike.style.top = '150px';
    strike.style.left = '7px';
     tgle_btn.style.left = '3px';
    filledBox = 0;
    for (let i = 0; i <= 9; i++) {
        box[i].innerHTML = "";

    }

}

//winning msg display
function winmsg(combination, current_player) {
winAudio.play();
    let strike = document.querySelector('.strike');

    if (combination == win_combos[0]) {
        strike.style.display = 'block';
        strike.style.top = '50px';
    }
    if (combination == win_combos[1]) {
        strike.style.display = 'block';
    }
    if (combination == win_combos[2]) {
        strike.style.display = 'block';
        strike.style.top = '250px';
    }
    if (combination == win_combos[3]) {
        strike.style.display = 'block';
        strike.style.left = '50px';
        strike.style.transform = 'rotate(90deg)';
    }
    if (combination == win_combos[4]) {
        strike.style.display = 'block';
        strike.style.transform = 'rotate(90deg)';
    }
    if (combination == win_combos[5]) {
        strike.style.display = 'block';
        strike.style.left = '100px';
        strike.style.transform = 'rotate(90deg)';
    }
    if (combination == win_combos[6]) {
        strike.style.display = 'block';
        strike.style.transform = 'rotate(45deg)';
    }
    if (combination == win_combos[7]) {
        strike.style.display = 'block';
        strike.style.transform = 'rotate(135deg)';
    }

    let win_display = document.getElementById("win_display");
    var restart_btn = document.getElementById("restart_btn");


    var win_msg = document.getElementById("win_msg");
    win_msg.innerHTML = current_player + "-won";


    setTimeout(() => {
        win_display.style.display = "flex";
        clrBoard();

    }, 1000);
    restart_btn.addEventListener('click', () => {
        win_display.style.display = 'none';

    })
}

//display msg
function drawmsg() {
    filledBox = 0;
    drwAudio.play();
    var win_msg = document.getElementById("win_msg");

    win_msg.innerHTML = "Draw!!!";

    win_display.style.display = "flex";
    restart_btn.addEventListener('click', () => {
        win_display.style.display = 'none';
    })
    clrBoard();
}
