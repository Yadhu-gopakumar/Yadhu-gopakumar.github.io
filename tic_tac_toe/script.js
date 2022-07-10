const start_btn = document.getElementById('start_btn');
const start_display = document.getElementById('start_display');
win_flag = false;
start_btn.addEventListener('click', () => {
    start_display.style.display = 'none';
})

var box = document.querySelectorAll(".box");
const tgle_btn = document.getElementById("toggler");
// [0][1][2]
// [3][4][5]
// [6][7][8]
let win_combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]

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

            selected_box.innerHTML = current_player;
            filledBox++;
            if (filledBox == 9) {
                filledBox=0;
                drawmsg();
            }
            check_winner();
            current_player = current_player == "x" ? "o" : "x";
            // if (current_player == "x") {
            //     tgle_btn.style.left = "3px";
            // }
            // else {
            //     tgle_btn.style.right = '3px';
            // }
        }

    })
});
//restart button function
const restart = document.getElementById("restart");

restart.addEventListener('click', () => {

    alert("restart game");
    clrBoard();
})
//clearing board
function clrBoard() {
    filledBox=0;
    for (let i = 0; i <= 9; i++) {
        box[i].innerHTML = "";

    }
}

//winning msg display
function winmsg(combination, current_player) {
    combination.forEach(function (index) {
        box[index].classList.add('highlight');
        win_display = document.getElementById("win_display");
        restart_btn = document.getElementById("restart_btn");


        win_msg = document.getElementById("win_msg");
        win_msg.innerHTML = current_player + "-won";

        win_display.style.display = "flex";
        restart_btn.addEventListener('click', () => {
            win_display.style.display = 'none';
        })
        clrBoard();
    })
}
//display msg
function drawmsg() {
    filledBox = 0;
    win_msg = document.getElementById("win_msg");
    win_msg.innerHTML = "Draw!!!";

    win_display.style.display = "flex";
    restart_btn.addEventListener('click', () => {
        win_display.style.display = 'none';
    })
    clrBoard();
}